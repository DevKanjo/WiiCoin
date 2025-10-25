import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,

  Switch,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { Button } from "react-native-paper";
import { Picker } from "@react-native-picker/picker"; // Install: npm install @react-native-picker/picker


const Ipfs = () => {
  const [isToggleOn, setIsToggleOn] = useState(false);
  const [selectedOption, setSelectedOption] = useState("option1");
  const [textValue, setTextValue] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSave = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000); // Simulate API call (3 seconds)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>IPFS Gateway</Text>
      <Picker
        selectedValue={selectedOption}
        onValueChange={(itemValue) => setSelectedOption(itemValue)}
        enabled={!isToggleOn} // Disable when toggle is ON
        style={styles.picker}
      >
        <Picker.Item label="Temporal" value="option1" />
        <Picker.Item label="Cloudflare" value="option2" />
        <Picker.Item label="Ipfs" value="option3" />
        <Picker.Item label="Infura" value="option3" />
        <Picker.Item label="Pinata" value="option3" />
      </Picker>

      <View style={styles.toggleContainer}>
        <Text style={styles.label1}>Use Custom IPFS Gateway</Text>
        <Switch value={isToggleOn} onValueChange={setIsToggleOn} />
      </View>

      <TextInput
        style={styles.input}
        value={textValue}
        onChangeText={setTextValue}
        editable={isToggleOn} // Enable when toggle is ON
        placeholder="e.g. https://ipfs.io/ipfs/"
      />

      <Button
        style={styles.dicon}
        mode="outlined"
        onPress={handleSave}
        disabled={isToggleOn || loading}
        textColor="#ffffff"
        buttonColor="#A654A0"
      >
        <Text style={styles.dbutton}>Save</Text>
      </Button>

      {loading && (
        <ActivityIndicator size="large" color="blue" style={styles.spinner} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    color: "#1b2454",
  },
  label1: {
    fontSize: 18,
    fontWeight: "bold",

    color: "#1b2454",
  },
  picker: {
    width: "100%",
    height: 50,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    borderColor: "#0c0d0c",
    borderWidth: 1,
  },
  toggleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    justifyContent: "space-between",
  },
  input: {
    backgroundColor: "#f5f2f2",
    borderRadius: 8,
    paddingHorizontal: 5,
    borderColor: "#BFBFBF",
    borderWidth: 1,
    marginBottom: 10,
    width: "100%",
    height: 45,
  },
  spinner: {
    marginTop: 20,
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

export default Ipfs;
