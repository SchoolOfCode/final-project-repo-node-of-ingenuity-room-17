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
import { updateFamily } from "../firebase/firestore";

export default function ChoreList(props) {

const {family, setFamily} = useContext(pageState)


  // const [chores, setChores] = useState([]);
  // const [family, setFamily] = useState(false);
  // const [currentMember, setCurrentMember] = useState(false);
  const [date, setDate] = useState(false);
  // const [addChoreCalled, setAddChoreCalled] = useState(false)

  const addFamilyChoresHandler = () => {
    props.navigation.navigate({ routename: "AddChores" });
  };

  // function addChoreToggler(){
  //   setAddChoreCalled(!addChoreCalled)
  // }

  const completeChore = (id) => {
    // console.log("family chores:", family.chores)
    
    const familyCopy = {...family};
    const completedChore = familyCopy.chores.find((el) => el.id === id);
    let updatedChores = [];
    if (completedChore.id === 1) {
      updatedChores = [
        { ...completedChore, isComplete: true },
        ...familyCopy.chores.slice(1),
      ];
    } else {
      updatedChores = [...familyCopy.chores.slice(0, completedChore.id - 1), {...completedChore, isComplete: true} , ...familyCopy.chores.slice(completedChore.id)
      ]
    }
    console.log("updated chores:", updatedChores)
    console.log("family chores:", family.chores)
const updatedFamily = {...familyCopy, chores: updatedChores}
    setFamily(updatedFamily);
    updateFamily(updatedFamily, updatedFamily.docRef);
    console.log("updated family", updatedFamily.docRef)
  };

  const dashboardHandler = (name) => {
    props.navigation.setParams({ routeName: "Dashboard" });
    props.navigation.navigate("Dashboard", {
      family: family,
      member: name,
    });
  };

  // useEffect(() => {
  //   const newFamily = props.navigation.getParam("family");
  //   console.log('use Effect called')
  //   // console.log(newFamily);
  //   setFamily(newFamily);
  //   setCurrentMember(newFamily.members[0].name);
  //   if (newFamily.chores !== undefined) {
  //     setChores(newFamily.chores);
  //   }
  //   setDate(getDateDisplay());
  // }, []);

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.heading}>
        {family.memberSession && `${family.memberSession}'s chores`}
      </Text>
      <Text style={styles.date}>{date && date}</Text>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.choreList}>
        <Text>In Progress:</Text>
        {family.chores.length > 0 &&
          family.chores.map((el) => {
            if (!el.isComplete) {
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
        {family.chores.length > 0 &&
          family.chores.map((el) => {
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
