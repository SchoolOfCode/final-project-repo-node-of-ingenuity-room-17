import {
  View,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import { useState, useContext } from "react";
import { pageState } from "../App";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import addUserIcon from "../assets/add-user-light.png";
export default function AddFamilyMember(props) {
  const [memberName, setMemberName] = useState("");
  const [isTicked, setIsTicked] = useState(false);
  const { family, setFamily } = useContext(pageState);
  const addMemberHandler = () => {
    if (memberName.trim() === "") {
      return;
    }
    props.addMember(memberName, isTicked);
    props.pressHandler();
  };
  return (
    <View style={styles.memberControls}>
      <TextInput
        style={[styles.memberInput]}
        onChangeText={(text) => setMemberName(text)}
      />
      <BouncyCheckbox
        onPress={() => setIsTicked(!isTicked)}
        fillColor="#FFBD00"
      />
      <TouchableOpacity onPress={addMemberHandler}>
        <Image style={styles.addIcon} source={addUserIcon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  addIcon: {
    height: 30,
    width: 30,
  },
  memberControls: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },

  memberInput: {
    width: "50%",
    margin: 0,
    height: 40,
    backgroundColor: "white",
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
