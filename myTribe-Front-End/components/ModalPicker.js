import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import React from "react";
//DUMMY OPTIONS DATE
const OPTIONS = [
  "Eleanor",
  "Samuel",
  "Billy",
  "Brianna",
  "Eddie",
  "David",
  "Lizzie",
  "Sandra",
];
// SET SIZE OF MODAL
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const ModalPicker = (props) => {
  //MAKES MODAL APPEAR AND DISAPPEAR ON PRESS
  const onPressItem = (option) => {
    props.changeModalVisible(false);
    props.setData(option);
  };
  //GOES THROUGH DUMMY DATA AT INDEX
  const option = OPTIONS.map((item, index) => {
    return (
      <TouchableOpacity key={index} onPress={() => onPressItem(item)}>
        <Text style={styles.option}>{item}</Text>
      </TouchableOpacity>
    );
  });
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => props.changeModalVisible(false)}
    >
      <View style={[styles.modal, { width: WIDTH - 20, height: HEIGHT / 2 }]}>
        <ScrollView>{option}</ScrollView>
      </View>
    </TouchableOpacity>
  );
};

export default ModalPicker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    backgroundColor: "white",
    borderRadius: 10,
  },

  option: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    fontWeight: "bold",
    padding: 20,
  },
});
