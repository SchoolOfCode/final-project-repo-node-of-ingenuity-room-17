import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  Button,
  KeyboardAvoidingView,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const Chore = ({
  title,
  member,
  dueDate,
  description,
  isComplete,
  completeChore,
  deleteChore,
  id,
}) => {
  return (
    <TouchableOpacity
      onLongPress={() => {
        if(isComplete){
          deleteChore(id)
        } else{
        completeChore(id);
        }
      }}
      style={isComplete ? styles.viewCompleted : styles.chore}
    >
      <Text style={styles.title}>
        {title}
      </Text>
      <Text style={styles.member}>
        {member}
      </Text>
      <Text style={styles.dueDate}>
        {dueDate}
      </Text>
      <Text
        style={styles.description}
      >
        {description}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  chore: {
    width: "100%",
    marginBottom: 10,
    position: "relative",
    padding: 10,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 2,
    shadowOpacity: 0.1,
    borderRadius: 10,
  },

  dueDate: {
    position: "absolute",
    top: 10,
    right: 10,
    color: "#FFBD00",
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
  },

  member: {
    color: "#FFBD00",
    marginBottom: 20,
    fontWeight: "bold",
    marginTop: 5,
  },

  description: {
    color: "#AAAAAC",
  },
  viewCompleted: {
    width: "100%",
    marginBottom: 10,
    position: "relative",
    padding: 10,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 2,
    shadowOpacity: 0.1,
  borderColor: "limegreen",
   borderWidth: 1,
   borderRadius: 10,
  },

});

export default Chore;
