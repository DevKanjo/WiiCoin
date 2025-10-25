import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

const WalletMenu = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Name</Text>
        <TextInput
          placeholder="Note To Self"
          style={{
            borderColor: "#ccc",
            borderWidth: 1,
            borderRadius: 5,
            paddingHorizontal: 5,
            marginTop: 30,
          }}
        ></TextInput>
      </View>
      <View style={{ marginTop: 25 }}>
        <Text>Type</Text>
        <Text style={{ color: "#ccc" }}>HD Multi-address</Text>
      </View>
      <Button
        mode="outlined"
        onPress={() => console.log("Pressed")}
        style={styles.dicon}
        textColor="#ffffff"
        buttonColor="#A654A0"
      >
        <Text style={styles.dbutton}>Export / Backup</Text>
      </Button>
      <Button
        mode="outlined"
        onPress={() => console.log("Pressed")}
        style={styles.dicon}
        textColor="#ffffff"
        buttonColor="#A654A0"
      >
        <Text style={styles.dbutton}>Show wallet XPUB</Text>
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate("Broadcast")}
        style={styles.dicon}
        textColor="#ffffff"
        buttonColor="#A654A0"
      >
        <Text style={styles.dbutton}>Broadcast Transaction</Text>
      </Button>
      <Button
        mode="outlined"
        onPress={() => console.log("Pressed")}
        style={styles.dicon}
        textColor="#A654A0"
      >
        <Text style={{}}>Reset Transaction History</Text>
      </Button>
      <Button
        onPress={() => navigation.goBack()}
        style={styles.dicon}
        textColor="#A654A0"
        buttonColor="#ffffff"
      >
        <Text style={{ color: "#A654A0" }}>Delete</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 30,
    flex: 1,
    backgroundColor: "#ffffff",
  },
  dicon: {
    marginTop: 20,
    width: "100%",
    alignSelf: "center",
  },
  dbutton: {
    color: "#ffffff",
    fontSize: 19,
  },
});

export default WalletMenu;
