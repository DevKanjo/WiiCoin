import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const Wallet = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
    
      <View style={styles.top}>
        <Image
          source={require("../../assets/images/logo.png")} 
          style={styles.backgroundImage}
          resizeMode="contain" // Ensures it fits well without distortion
        />

        {/* Main Content */}
        <Text style={styles.text}>Wallet</Text>
        <Text style={styles.text2}>0 WIII</Text>
      </View>
      <View style={{ paddingHorizontal: 20, flex: 1 }}>
        <Text
          style={{
            color: "#1b2454",
            fontWeight: "600",
            fontSize: 25,
            marginTop: 18,
            alignSelf: "flex-start",
          }}
        >
          Transactions
        </Text>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ color: "#918e8e", fontSize: 18 }}>
            Your transactions will appear here
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.leftButton]}
          onPress={() => navigation.navigate("Receive")}
        >
          <Text style={styles.buttonText1}>Receive</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.rightButton]}
          onPress={() => navigation.navigate("Send")}
        >
          <Text style={styles.buttonText2}>Send</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,

    backgroundColor: "#ffffff", // Optional background color
  },
  top: {
    backgroundColor: "#bf86bb",
    height: 150,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  backgroundImage: {
    position: "absolute",
    bottom: 10, // Adjust as needed
    right: 10, // Adjust as needed
    width: 100, // Set the image width
    height: 100, // Set the image height
    opacity: 0.3, // Makes the image faint
  },
  text: {
    fontSize: 20,

    color: "#ffffff",
  },
  text2: {
    color: "#ffffff",
    fontSize: 40,
  },
  buttonContainer: {
    flexDirection: "row", // Places buttons side by side
    position: "absolute", // Fixes at the bottom
    bottom: 20,
    left: 50,
    right: 50,
    backgroundColor: "#ffffff", // Background for contrast
    paddingVertical: 10,
    justifyContent: "center", // Centers buttons horizontally
    alignItems: "center",
  },
  button: {
    flex: 1, // Makes buttons equal in size
    paddingVertical: 13,
    alignItems: "center",
  },
  leftButton: {
    backgroundColor: "#ffffff", // Blue
    elevation: 5,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
  rightButton: {
    backgroundColor: "#ffffff", // Red
    borderTopRightRadius: 25,
    elevation: 5,
    borderBottomRightRadius: 25,
  },
  buttonText1: {
    color: "green",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonText2: {
    color: "red",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Wallet;
