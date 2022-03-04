import {
  StyleSheet,
  Text,
  View,
  Button,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { useState, useEffect } from "react";
import Chore from "../components/Chore";
import getDateDisplay from "../utils/date";

export default function ChoreList(props) {
  const [chores, setChores] = useState([]);
  const [family, setFamily] = useState(false);
  const [currentMember, setCurrentMember] = useState(false);
  const [date, setDate] = useState(false);

  const addFamilyChoresHandler = () => {
    props.navigation.setParams({ routename: "AddChores" });
    props.navigation.navigate("AddChores", {
      family: family,
      member: currentMember,
      date: date,
    });
  };

  const familyManagementHandler = () => {
    props.navigation.navigate({ routeName: "Family" });
  };

  useEffect(() => {
    const newFamily = props.navigation.getParam("family");
    setFamily(newFamily);
    setCurrentMember(newFamily.members[0].name);
    if (newFamily.chores !== undefined) {
      setChores(newFamily.chores);
    }
    setDate(getDateDisplay());
  });

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.heading}>
        {currentMember && `${currentMember}'s chores`}
      </Text>
      <Text style={styles.date}>{date && date}</Text>
      <ScrollView 
      showsVerticalScrollIndicator={false} style={styles.choreList}>
        {chores.length > 0 ? (
          chores.map((el) => (
            <Chore
              key={el.id}
              title={el.title}
              member={el.member}
              description={el.description}
              dueDate={el.dueDate}
            />
          ))
        ) : (
          <Text>You haven't added any chores.</Text>
        )}
      </ScrollView>
      <View style={styles.btnContainer}>
        <Button
        accessibilityLabel='addChore'
          title="add chore"
          color="#FFBD00"
          onPress={addFamilyChoresHandler}
        />
        <Button
          onPress={familyManagementHandler}
          title="family management"
          color="#FFBD00"
        />
        <Button title="logout" color="#FFBD00" />
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
