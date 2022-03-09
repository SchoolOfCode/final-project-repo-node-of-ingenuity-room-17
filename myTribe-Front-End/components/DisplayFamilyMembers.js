import { StyleSheet, Text, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function DisplayFamilyMembers({ family }) {
  console.log(family.members, "this is the one want");
  return family.members.map((el) => {
    return (
      <View key={el.id} style={styles.memberControls}>
        <Text style={styles.memberName} key={el.id}>
          {el.name}
        </Text>
        <View>
          <BouncyCheckbox
            onPress={() => setIsTicked(!isTicked)}
            fillColor="#FFBD00"
            isChecked={el.isParent}
          />
        </View>
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
