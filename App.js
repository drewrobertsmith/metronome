import { SafeAreaView, StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";

import { Audio } from "expo-av";
import BPMDisplay from "./components/bpmDisplay/bpmDisplay";
import PlayPauseButton from "./components/playPauseButton";
import SavedBPMs from "./components/savedBPMs/savedBPMs";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [BPM, setBPM] = useState(100);
  const interval = (60 / BPM) * 1000; //Convert BPM to milliseconds
  //const BPMS = [50, 100, 150];

  async function loadSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("./assets/Synth_Bell_A_hi.wav")
    );
    setSound(sound);
  }

  useEffect(() => {
    loadSound();
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, []);

  useEffect(() => {
    let timerId;
    if (isPlaying && sound) {
      sound.playAsync();
      timerId = setInterval(() => {
        sound.replayAsync();
      }, interval);
    }
    return () => {
      if (timerId) {
        clearInterval(timerId);
      }
    };
  }, [isPlaying, sound, BPM]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <BPMDisplay BPM={BPM} setBPM={setBPM} />
      <SavedBPMs setBPM={setBPM} />
      <PlayPauseButton isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
});
