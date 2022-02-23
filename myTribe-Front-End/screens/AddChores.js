import {
  StyleSheet,
  Text,
  View,
  Button,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { useEffect, useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function AddChores() {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");

  const onChange = (e, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let formDate = `${tempDate.getDate()} / ${
      tempDate.getMonth() + 1
    } / ${tempDate.getFullYear()}`;

    setText(formDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.heading}>This week's chores</Text>
      <Text style={styles.date}>21st February 2022</Text>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.choreList}>
        <Button
          title="due date"
          color="#FFBD00"
          onPress={() => showMode("date")}
        ></Button>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
      </ScrollView>
      <View style={styles.btnContainer}>
        <Button title="add chore" color="#FFBD00" />
        <Button title="family management" color="#FFBD00" />
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
