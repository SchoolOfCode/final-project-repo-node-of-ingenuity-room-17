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
import { updateFamily } from "../firebase/firestore";
export default function AddChores(props) {
  //DATE USE STATES
  const [family, setFamily] = useState("");
  const [choreTitle, setChoreTitle] = useState("");
  const [choreDescription, setChoreDescription] = useState("");
  const [choreMember, setChoreMember] = useState("");
  const [choreDueDate, setChoreDueDate] = useState("");

  const [displayDate, setDisplayDate] = useState(false);
  const [calendarDate, setCalendarDate] = useState(false);
  const [currentMember, setCurrentMember] = useState(false);
  const [members, setMembers] = useState(false);
  const [chore, setChore] = useState(false);
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");

  // MODAL USE STATES
  const [chooseData, setChooseData] = useState("Assign to...");
  const [isModalVisible, setIsModalVisible] = useState(false);

  //MODAL FUNCTIONS
  const setData = (option) => {
    setChooseData(option);
    setChoreMember(option);
  };

  const changeModalVisible = (bool) => {
    setIsModalVisible(bool);
  };
  const onChange = (e, selectedDate) => {
    const currentDate = selectedDate || date;
    let tempDate = new Date(currentDate);
    let formDate = `${tempDate.getDate()} / ${
      tempDate.getMonth() + 1
    } / ${tempDate.getFullYear()}`;
    setChoreDueDate(formDate);
  };

  const addChoreHandler = () => {
    let id;
    if (!family.chores || family.chores.length < 1) {
      id = 1;
    } else {
      id = family.chores[family.chores.length - 1].id + 1;
    }
    const newChore = {
      id: id,
      title: choreTitle,
      description: choreDescription,
      member: choreMember,
      dueDate: choreDueDate,
      isComplete: false,
    };
    let finalFamily;
    if (!family.chores) {
      finalFamily = { ...family, chores: [newChore] };
    } else {
      finalFamily = {
        ...family,
        chores: [...family.chores, newChore],
      };
    }
    updateFamily(finalFamily, finalFamily.docRef);
    props.navigation.setParams({ routeName: "ChoreList" });
    props.navigation.navigate("ChoreList", { family: finalFamily });
  };
  useEffect(() => {
    const family = props.navigation.getParam("family");
    const dDate = props.navigation.getParam("date");
    const calendarDate = new Date(
      new Date().toString().split("GMT")[0] + " UTC"
    ).toISOString();
    const member = props.navigation.getParam("member");
    setCurrentMember(member);
    setCalendarDate(calendarDate);
    setDisplayDate(dDate);
    const modalMembers = family.members.map((el) => el.name);
    setMembers(modalMembers);
    setFamily(family);
  }, []);
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.heading}>Add a new chore</Text>
      <Text style={styles.date}>{displayDate && displayDate}</Text>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.choreList}>
        <Text style={styles.label}>Chore Title</Text>
        <TextInput
          onChangeText={(text) => setChoreTitle(text)}
          style={styles.input}
        ></TextInput>
        <Text style={styles.label}>Description</Text>
        <TextInput
          onChangeText={(text) => setChoreDescription(text)}
          style={styles.input}
        ></TextInput>
        <View style={styles.dateContainer}>
          <Text style={styles.label}>Select Date</Text>
          <View style={styles.datePickerContainer}>
            {calendarDate && (
              <DateTimePicker
                testID="dateTimePicker"
                value={calendarDate}
                mode="date"
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}
          </View>
        </View>
        <TouchableOpacity
          style={styles.dropdown}
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
            members={members}
          />
        </Modal>
      </ScrollView>
      <View style={styles.btnContainer}>
        <Button 
        accessibilityLabel='AddChoreButton'
        title="add chore" color="#FFBD00" onPress={addChoreHandler} />
        <Button
          title="back"
          color="#FFBD00"
          onPress={() =>
            props.navigation.navigate({
              routeName: "ChoreList",
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
  label: {
    fontSize: 15,
    marginBottom: 5,
  },

  text: {
    fontSize: 16,
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

  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },

  datePickerContainer: {
    width: "40%",
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
  dropdown: {
    width: "100%",
    height: 40,
    backgroundColor: "white",
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 30,
    justifyContent: "center",
  },
});
