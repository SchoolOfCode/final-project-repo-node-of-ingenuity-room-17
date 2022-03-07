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
  id,
}) => {
  return (
    <TouchableOpacity
      onLongPress={() => {
        completeChore(id);
      }}
      style={isComplete ? styles.viewCompleted : styles.chore}
    >
      <Text style={isComplete ? styles.titleCompleted : styles.title}>
        {title}
      </Text>
      <Text style={isComplete ? styles.memberCompleted : styles.member}>
        {member}
      </Text>
      <Text style={isComplete ? styles.dateCompleted : styles.dueDate}>
        {dueDate}
      </Text>
      <Text
        style={isComplete ? styles.descriptionCompleted : styles.description}
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
    backgroundColor: "#FFBD00",
    color: "white",
  },
  titleCompleted: {
    backgroundColor: "#FFBD00",
    color: "white",
  },
  memberCompleted: {
    backgroundColor: "#FFBD00",
    color: "white",
  },
  descriptionCompleted: {
    backgroundColor: "#FFBD00",
    color: "white",
  },
  dateCompleted: {
    backgroundColor: "#FFBD00",
    color: "white",
  },
});

export default Chore;
