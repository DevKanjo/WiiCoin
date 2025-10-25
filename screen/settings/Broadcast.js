import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

const Broadcast = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Input Transaction Hash</Text>
      <TextInput style={styles.input}></TextInput>
      <Button
        style={styles.dicon}
        mode="outlined"
        onPress={() => navigation.goBack()}
        textColor="#ffffff"
        buttonColor="#A654A0"
      >
        <Text style={styles.dbutton}>BROADCAST</Text>
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  input: {
    backgroundColor: "#beedcb",
    height: 100,
    marginTop: 15,
    borderRadius: 5,
    paddingHorizontal:10
  },
  dicon: {
    marginTop: 20,
    width: "100%",
    alignSelf: "center",
  },
  dbutton: {
    color: "#ffffff",
    fontSize: 18,
  },
});
export default Broadcast;
