import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

import { useState } from "react";

export default function SavedBPMs({ setBPM }) {
  const [inputBPM, setInputBPM] = useState("");
  const [savedBPMs, setSavedBPMs] = useState([]);

  function handleAddBPM() {
    const newBPM = parseInt(inputBPM, 10);
    setSavedBPMs((prevBPMS) => [...prevBPMS, newBPM]);
    setInputBPM(""); // Clear the input field after adding
  }
  function handleRemoveBPM(indexToRemove) {
    setSavedBPMs((prevBPMS) =>
      prevBPMS.filter((_, index) => index !== indexToRemove)
    );
  }

  return (
    <View style={styles.savedBPMContainer}>
      <Text style={{ fontSize: 24 }}>Saved BPMs</Text>
      <View style={styles.bpmList}>
        {savedBPMs.map((item, index) => (
          <Pressable
            key={index}
            onPress={() => {
              setBPM(item);
            }}
            onLongPress={() => handleRemoveBPM(index)}
          >
            <Text style={styles.bpmSelection}>{item}</Text>
          </Pressable>
        ))}
      </View>
      <TextInput
        style={styles.input}
        inputMode="numeric"
        keyboardType="number-pad"
        placeholder="Add BPM"
        value={inputBPM} // Bind the value to state
        onChangeText={setInputBPM} // Update state when text changes
        onSubmitEditing={handleAddBPM} // Call handleAddBPM when user submits
      />
      {savedBPMs.length > 0 ? (
        <Pressable
          onPress={() => {
            setSavedBPMs([]);
          }}
        >
          <Text
            style={{
              fontSize: 16,
            }}
          >
            Clear
          </Text>
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  savedBPMContainer: {
    paddingTop: 24,
    alignItems: "center",
  },
  bpmList: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  bpmSelection: {
    fontSize: 56,
    padding: 8,
  },
  input: {
    height: 56,
    width: 150,
    margin: 16,
    borderWidth: 0,
    padding: 10,
    backgroundColor: "#E2E2E2",
  },
});
