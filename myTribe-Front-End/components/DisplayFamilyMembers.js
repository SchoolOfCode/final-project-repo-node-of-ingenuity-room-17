import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import deleteUserIcon from "../assets/delete-user.png";

export default function DisplayFamilyMembers(props) {
  
  return props.family.members.map((el) => {
    return (
      <View key={el.id} style={styles.memberControls}>
        <Text style={styles.memberName} key={el.id} id={el.id}>
          {el.name}
        </Text>
        <BouncyCheckbox
          onPress={() => setIsTicked(!isTicked)}
          fillColor="#FFBD00"
          isChecked={el.isParent}
        />
        <TouchableOpacity onPress = {props.deleteFamily}>
          <Image style={styles.addIcon} source={deleteUserIcon} />
        </TouchableOpacity>
      </View>
    );
  });
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

  memberName: {
    width: "50%",
    margin: 0,
    height: 40,
  },
});
