import {
  StyleSheet,
  Text,
  View,
  Button,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { useState } from "react";
import Chore from "../components/Chore";

export default function ChoreList(props) {
  const [chores, setChores] = useState([
    {
      id: 1,
      title: "Tidy room",
      member: "Jeff",
      description: "Lorem ipsum lorem lorem ipsum lorem ipsum lorem",
      dueDate: "21.02.2022",
    },
    {
      id: 2,
      title: "Tidy room",
      member: "Jeff",
      description: "Lorem ipsum lorem lorem ipsum lorem ipsum lorem",
      dueDate: "21.02.2022",
    },
    {
      id: 3,
      title: "Tidy room",
      member: "Jeff",
      description: "Lorem ipsum lorem lorem ipsum lorem ipsum lorem",
      dueDate: "21.02.2022",
    },
    {
      id: 4,
      title: "Tidy room",
      member: "Jeff",
      description: "Lorem ipsum lorem lorem ipsum lorem ipsum lorem",
      dueDate: "21.02.2022",
    },
    {
      id: 5,
      title: "Tidy room",
      member: "Jeff",
      description: "Lorem ipsum lorem lorem ipsum lorem ipsum lorem",
      dueDate: "21.02.2022",
    },
  ]);
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.heading}>This week's chores</Text>
      <Text style={styles.date}>21st February 2022</Text>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.choreList}>
        {chores.map((el) => (
          <Chore
            key={el.id}
            title={el.title}
            member={el.member}
            description={el.description}
            dueDate={el.dueDate}
          />
        ))}
      </ScrollView>
      <View style={styles.btnContainer}>
        <Button
          title="Add Chore"
          color="#FFBD00"
          onPress={() =>
            props.navigation.navigate({
              routeName: "AddChores",
            })
          }
        />
        <Button
          title="Go To Dashboard"
          color="#FFBD00"
          onPress={() =>
            props.navigation.navigate({
              routeName: "Dashboard",
            })
          }
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
