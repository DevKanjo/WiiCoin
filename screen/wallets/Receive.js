import React, { useState, useRef, useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  Animated,
  Modal,
  TouchableWithoutFeedback,
  TextInput,
} from "react-native";
import { Button } from "react-native-paper";
import QRCode from "react-native-qrcode-svg";

const Receive = () => {
  const [qrValue, setQrValue] = useState(generateRandomValue());
  const [visible, setVisible] = useState(false);
  const [inputValue, setInputValue] = useState(""); // Stores input value
  const [description, setDescription] = useState("");
  const [displayText, setDisplayText] = useState(""); // Stores displayed text
  const [showD, setShowD] = useState(""); // Stores displayed text

  const translateY = useRef(new Animated.Value(300)).current; // Initially hidden below screen

useEffect(() => {
  if (visible) {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false, // Change this to false
    }).start();
  } else {
    Animated.timing(translateY, {
      toValue: 300,
      duration: 200,
      useNativeDriver: false, // Change this to false
    }).start();
  }
}, [visible]);

  function generateRandomValue() {
    return Math.random().toString(36).substring(7); // Generates a random short string
  }
  const handleCreate = () => {
    setDisplayText(inputValue); // Update displayed text
    setInputValue(""); // Clear input after submission
    setDescription("");
    setShowD(description);
    setVisible(false);
  };
  const clear = () => {
    setDisplayText("");
    setInputValue("");
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 35, color: "#A654A0" }}>
        {displayText + " WIII"}
      </Text>
      <Text style={{ fontSize: 15 }}>{showD}</Text>
      {/* QR Code with Logo */}
      <QRCode
        value={qrValue} // Generates QR code based on random value
        size={300} //x Adjust size
        backgroundColor="white"
        color="black" // QR code color
        logo={require("../../assets/images/logo.png")} // Path to your logo
        logoSize={50} // Adjust logo size
        logoBackgroundColor="transparent" // Ensure logo blends in
      />

      <Text style={{ color: "#918e8e", marginVertical: 20, fontSize: 20 }}>
        Vodiodoidiojjo3jfgd5fDhjk7lSNjknSL
      </Text>
      <TouchableOpacity onPress={() => setVisible(true)}>
        <Text style={{ color: "#A654A0", fontSize: 18, marginTop: 20 }}>
          Receive with amount
        </Text>
      </TouchableOpacity>
      <Button
        mode="outlined"
        onPress={() => console.log("Pressed")}
        style={styles.dicon}
        textColor="#ffffff"
        buttonColor="#A654A0"
      >
        <Text style={styles.dbutton}>Share</Text>
      </Button>
      {/* Pop-up Modal */}
      {visible && (
      <Modal transparent visible={visible} animationType="fade">
        {/* Dismiss Keyboard When Tapping Outside */}
        <TouchableWithoutFeedback onPress={() => setVisible(false)}>
          <View style={styles.overlay}>
            <TouchableWithoutFeedback>
              <Animated.View
                style={[styles.popupContainer, { transform: [{ translateY }] }]}
              >
                <TextInput
                  style={styles.balance}
                  placeholder="0 WIII"
                  placeholderTextColor={"#A654A0"}
                  textAlign="center"
                  keyboardType="numeric"
                  value={inputValue}
                  onChangeText={setInputValue}
                ></TextInput>
                <TextInput
                  style={styles.input}
                  placeholder="Description"
                  value={description}
                  onChangeText={setDescription}
                />
                <Button
                  mode="outlined"
                  onPress={handleCreate}
                  style={styles.dicon}
                  textColor="#ffffff"
                  buttonColor="#A654A0"
                >
                  <Text style={styles.dbutton}>Create</Text>
                </Button>
                <Button
                  onPress={clear}
                  style={styles.dicon}
                  textColor="#A654A0"
                >
                  <Text
                    style={{
                      color: "#A654A0",
                      fontSize: 18,
                      fontWeight: "bold",
                    }}
                  >
                    Reset
                  </Text>
                </Button>
              </Animated.View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      )}
    </View> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    paddingHorizontal: "20",
  },
  balance: {
    width: 50,
    height: 60,
    borderColor: "#918e8e",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 8,
    color: "#A654A0",
    marginBottom: 20,
    fontSize: 20,
  },
  dicon: {
    marginTop: 20,
    width: "70%",
    alignSelf: "center",
  },
  dbutton: {
    color: "#ffffff",
    fontSize: 19,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)", // Semi-transparent background
    justifyContent: "flex-end", // Align to bottom
  },
  popupContainer: {
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    elevation: 5, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },

  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default Receive;
