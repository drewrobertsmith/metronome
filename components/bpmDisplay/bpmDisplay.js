import { StyleSheet, Text, View } from "react-native";

import { AntDesign } from "@expo/vector-icons";

export default function BPMDisplay({ BPM, setBPM }) {
  return (
    <View style={styles.bpmContainer}>
      <View style={styles.bpmController}>
        <AntDesign
          name="minuscircleo"
          size={48}
          color="black"
          onPress={() => {
            setBPM(BPM - 1);
          }}
          style={styles.plusMinusButtons}
        />
        <View style={{ alignItems: "center" }}>
          <Text style={styles.bpmText}>{BPM}</Text>
        </View>
        <AntDesign
          name="pluscircleo"
          size={48}
          color="black"
          onPress={() => {
            setBPM(BPM + 1);
          }}
          style={styles.plusMinusButtons}
        />
      </View>
      <Text style={{
        fontSize: 16
      }}>BPM</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bpmContainer: {
    backgroundColor: "#A7C480",
    alignItems: "center",
    padding: 48,
  },
  bpmController: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  bpmText: {
    fontSize: 104,
  },
  plusMinusButtons: {
    padding: 16,
  },
});
