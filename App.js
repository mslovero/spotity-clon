import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./StackNavigatior";
import { ModalPortal } from "react-native-modals";
import { PlayedContext } from "./PlayedContext";

export default function App() {
  return (
    <>
      <PlayedContext>
        <Navigation />
        <ModalPortal />
      </PlayedContext>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
