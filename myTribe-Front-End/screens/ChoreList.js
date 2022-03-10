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
    props.navigation.navigate({ routeName: "AddChores" });
  };


// allowing the users to mark chore as completed
  const completeChore = (id) => {
  
    
    const familyCopy = {...family};
    const completedChoreID = familyCopy.chores.findIndex((el) => el.id === id);
    const completedChore = familyCopy.chores.find((el) => el.id === id);
    let updatedChores = [];
    if (completedChoreID === 0) {
      updatedChores = [
        { ...completedChore, isComplete: true },
        ...familyCopy.chores.slice(1),
      ];
    } else {
    updatedChores = familyCopy.chores.filter((el, index)=>{
        if(index !== completedChoreID){
          return el
        }
    })

    updatedChores=[...updatedChores, {...completedChore, isComplete: true}]
  }

const updatedFamily = {...familyCopy, chores: updatedChores}
    setFamily(updatedFamily);
    updateFamily(updatedFamily, updatedFamily.docRef);

  };

  //allow users to delete completed chore
  function deleteChore(id){

    console.log("This is chore's id", id);
    const familyCopy = {...family};
    const completedChore = familyCopy.chores.findIndex((el) => el.id === id);
    let updatedChores = familyCopy.chores.filter((el, index)=>{
      if(index !== completedChore){
        return el
      }
    })
    console.log("This is chore's id", id)
const updatedFamily = {...familyCopy, chores: updatedChores}
updateFamily(updatedFamily, updatedFamily.docRef);
    setFamily(updatedFamily);
  }

  const dashboardHandler = () => {
    props.navigation.navigate({ routeName: "Dashboard" });
 
  };



  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.heading}>
        {family.memberSession && `${family.memberSession}'s chores`}
      </Text>
      <Text style={styles.date}>{date && date}</Text>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.choreList}>
        <Text style={styles.subHeading}>In Progress:</Text>
        {family.chores && family.chores.length > 0 &&
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
                  isComplete={el.isComplete}
                  completeChore={completeChore}
                  deleteChore = {deleteChore}
                />
              );
            }
          })}
        <Text style={styles.subHeading}>Completed:</Text>
        {family.chores && family.chores.length > 0 &&
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
                  isComplete={el.isComplete}
                  completeChore={completeChore}
                  deleteChore = {deleteChore}
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
  subHeading: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 15,
  }
});
