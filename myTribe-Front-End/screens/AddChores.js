import {
  StyleSheet,
  Text,
  View,
  Button,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  Modal,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import ModalPicker from "../components/ModalPicker";

export default function AddChores() {
  //DATE USE STATES
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");
  // MODAL USE STATES
  const [chooseData, setChooseData] = useState("Assigned To...");
  const [isModalVisible, setIsModalVisible] = useState(false);

  //MODAL FUNCTIONS
  const setData = (option) => {
    setChooseData(option);
  };

  const changeModalVisible = (bool) => {
    setIsModalVisible(bool);
  };
  // const displayDate = new Date().getDate().getMonth().getFullYear();
  // DATE FUNCTIONS
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
    setShow(!show);
    setMode(currentMode);
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      {/* Top Bar */}
      <Text style={styles.heading}>This week's chores</Text>
      <Text style={styles.date}>Current Date</Text>
      {/* Main Content */}
      <ScrollView showsVerticalScrollIndicator={false} style={styles.choreList}>
        <Text style={styles.subheading}>Chore Name</Text>
        <TextInput style={styles.input}></TextInput>
        <Text style={styles.subheading}>Description</Text>
        <TextInput style={styles.input}></TextInput>
        {/* Date Picker Button */}
        <Button
          title="Due Date"
          style={styles.subheading}
          color={styles.date}
          onPress={() => showMode("date")}
        ></Button>
        {/* This allows the button to render the date */}
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
        {/* Modal Dropdown */}
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() => changeModalVisible(true)}
        >
          <Text style={styles.text}>{chooseData}</Text>
        </TouchableOpacity>
        <Modal
          transparent={true}
          animationType="fade"
          visible={isModalVisible}
          nRequestClose={() => changeModalVisible(false)}
        >
          <ModalPicker
            changeModalVisible={changeModalVisible}
            setData={setData}
          />
        </Modal>
      </ScrollView>
      {/* Footer Buttons */}
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
  subHeading: {
    fontSize: 24,
    color: "white",
  },

  text: {
    fontSize: 20,
    color: "black",
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

  input: {
    width: "100%",
    height: 40,
    backgroundColor: "white",
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 30,
  },
  modal: {
    backgroundColor: "white",
  },
  dateDisplay: {
    backgroundColor: "white",
    color: "black",
    fontSize: 18,
  },
  touchableOpacity: {
    width: "100%",
    height: 40,
    backgroundColor: "white",
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 30,
  },
});
