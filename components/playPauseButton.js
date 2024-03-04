import { AntDesign } from "@expo/vector-icons";
import { View } from "react-native";
import { useState } from "react";

export default function PlayPauseButton({ isPlaying, setIsPlaying }) {
  function handlePlayPause() {
    setIsPlaying(!isPlaying);
  }

  return (
    <View style={{
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center",
      paddingBottom: 44
    }}>
      <AntDesign
        name={isPlaying ? "pausecircle" : "play"}
        size={104}
        onPress={handlePlayPause}
      />
    </View>
  );
}
