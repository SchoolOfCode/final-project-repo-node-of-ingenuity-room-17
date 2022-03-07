import {
  StyleSheet,
  Text,
  View,
  Button,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { useState, useEffect, useContext } from "react";
import Chore from "../components/Chore";
import getDateDisplay from "../utils/date";
import {pageState} from "../App"

export default function ChoreList(props) {

  console.log("page state:", pageState)
const {state, setState} = useContext(pageState)
console.log("context", state)

  const [chores, setChores] = useState([]);
  const [family, setFamily] = useState(false);
  const [currentMember, setCurrentMember] = useState(false);
  const [date, setDate] = useState(false);
  const [addChoreCalled, setAddChoreCalled] = useState(false)

  const addFamilyChoresHandler = () => {
    props.navigation.setParams({ routename: "AddChores" });
    props.navigation.navigate("AddChores", {
      family: family,
      member: currentMember,
      date: date,
     
    });
  };

  // function addChoreToggler(){
  //   setAddChoreCalled(!addChoreCalled)
  // }

  const completeChore = (id) => {
    // const choreId = chores.findIndex((el) => el.id === id);
    // const newChore = chores[choreId];
    // const newChores = [
    //   chores.splice(0, choreId),
    //   { ...newChore, isComplete: true },
    //   chores.splice(choreId + 1),
    // ];
    // console.log("updated chores:", newChores);
    // setChores(newChores);
    console.log("completed chore fired");
    const choreCopy = [...chores];
    const completedChore = choreCopy.find((el) => el.id === id);
    let updatedChores = [];
    if (completedChore.id === 1) {
      updatedChores = [
        { ...completedChore, isComplete: true },
        ...choreCopy.slice(1),
      ];
    }
    console.log("updated chores:", updatedChores);
    setChores(updatedChores);
  };

  const dashboardHandler = (name) => {
    props.navigation.setParams({ routeName: "Dashboard" });
    props.navigation.navigate("Dashboard", {
      family: family,
      member: name,
    });
  };

  useEffect(() => {
    const newFamily = props.navigation.getParam("family");
    console.log('use Effect called')
    // console.log(newFamily);
    setFamily(newFamily);
    setCurrentMember(newFamily.members[0].name);
    if (newFamily.chores !== undefined) {
      setChores(newFamily.chores);
    }
    setDate(getDateDisplay());
  }, []);

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.heading}>
        {currentMember && `${currentMember}'s chores`}
      </Text>
      <Text style={styles.date}>{date && date}</Text>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.choreList}>
        <Text>In Progress:</Text>
        {chores.length > 0 &&
          chores.map((el) => {
            if (!el.isComplete) {
              console.log('incomplete element:', el)
              return (
                <Chore
                  key={el.id}
                  title={el.title}
                  member={el.member}
                  description={el.description}
                  dueDate={el.dueDate}
                  id={el.id}
                  completeChore={completeChore}
                />
              );
            }
          })}
        <Text>Completed:</Text>
        {chores.length > 0 &&
          chores.map((el) => {
            if (el.isComplete) {
              return (
                <Chore
                  key={el.id}
                  title={el.title}
                  member={el.member}
                  description={el.description}
                  dueDate={el.dueDate}
                  id={el.id}
                />
              );
            }
          })}
      </ScrollView>
      <View style={styles.btnContainer}>
        <Button
          title="Add Chore"
          color="#FFBD00"
          onPress={addFamilyChoresHandler}
        />
        <Button
          onPress={dashboardHandler}
          title="View Dashboard"
          color="#FFBD00"
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    paddingTop: 100,
    paddingBottom: 50,
    paddingLeft: 50,
    paddingRight: 50,
    backgroundColor: "#F2F0F0",
  },

  heading: {
    fontSize: 30,
    fontWeight: "bold",
  },

  date: {
    color: "#AAAAAC",
  },

  choreList: {
    marginTop: 50,
  },

  btnContainer: {
    paddingTop: 10,
    paddingBottom: 10,
  },
});
