import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Camera } from "expo-camera";
import { Button } from "react-native-paper";

const Send = () => {
  const [text, setText] = useState("");
  const [hasPermission, setHasPermission] = useState(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  useEffect(() => {
    requestCameraPermission();
  }, []);

  // Function to request camera permission
  const requestCameraPermission = async () => {
    const { status } = await Camera.requestPermissionsAsync();
    if (status === "granted") {
      setHasPermission(true);
    } else {
      setHasPermission(false);
    }
  };

  // Show alert when permission is denied
  const showPermissionAlert = () => {
    Alert.alert(
      "Camera Permission Required",
      "To scan QR codes, please enable camera access in settings.",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Open Settings", onPress: () => Linking.openSettings() },
      ]
    );
  };

  // Handle Scan button click
  const openCamera = async () => {
    if (hasPermission === null) {
      await requestCameraPermission(); // Ask for permission
    } else if (hasPermission === false) {
      showPermissionAlert(); // Permission denied, show alert
    } else {
      setIsCameraOpen(true); // Open camera
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="0 WIII"
        placeholderTextColor={"#A654A0"}
        style={styles.input1}
        keyboardType="numeric"
      ></TextInput>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Address"
          value={text}
          onChangeText={setText}
        />
        <TouchableOpacity style={styles.scanButton} onPress={openCamera}>
          <Text style={styles.scanText}>Scan</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        placeholder="Note To Self"
        style={{
          borderColor: "#ccc",
          borderWidth: 1,
          borderRadius: 5,
          paddingHorizontal: 5,
          marginTop: 20,
        }}
      ></TextInput>

      <Button
        mode="outlined"
        onPress={() => console.log("Pressed")}
        style={styles.dicon}
        textColor="#ffffff"
        buttonColor="#A654A0"
      >
        <Text style={styles.dbutton}>Next</Text>
      </Button>
      {/* Camera Screen */}
      {isCameraOpen && hasPermission && (
        <Camera
          style={styles.camera}
          onBarCodeScanned={({ data }) => {
            setText(data);
            setIsCameraOpen(false);
          }}
        >
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setIsCameraOpen(false)}
          >
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
        </Camera>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: "#ffffff",
    flex: 1,
    paddingTop: 30,
  },
  input1: {
    height: 70,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 30,
    textAlign: "center",
    color: "#A654A0",
  },
  dicon: {
    marginTop: 40,
    width: "70%",
    alignSelf: "center",
  },
  dbutton: {
    color: "#ffffff",
    fontSize: 19,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    marginTop: 20,
    borderRadius: 5,
    paddingHorizontal: 10,
    width: "100%",
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 0,
  },
  scanButton: {
    backgroundColor: "#807d80",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginLeft: 10,
  },
  scanText: {
    color: "#fff",
    fontWeight: "bold",
  },
  camera: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  closeButton: {
    position: "absolute",
    top: 40,
    right: 20,
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
  },
  closeText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Send;
