import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Button } from "react-native-paper";
import React, { useState , useContext} from "react";
import { ListContext } from "./ListWallet";

const AddWallet = ({ navigation, route }) => {
  const [text, setText] = useState("");
  const { addItem } = useContext(ListContext);

  const handleAddAndNavigate = () => {
    if (text.trim()) {
      addItem(text);
      setText("");
      navigation.navigate("BackupPhrase");
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#ffffff",
        paddingHorizontal: 20,
        paddingVertical: 20,
      }}
    >
      <Text style={{ marginBottom: 12 }}>Name</Text>
      <TextInput
        placeholder="My First Wallet"
        value={Text}
        onChangeText={setText}
        style={{
          backgroundColor: "#f5f2f2",
          borderRadius: 8,
          paddingHorizontal: 5,
          borderColor: "#BFBFBF",
          borderWidth: 1,
          marginBottom: 10,
        }}
      ></TextInput>
      <Text style={{ marginBottom: 12 }}>Type</Text>
      <TouchableOpacity
        onPress={() => console.log("Pressed")}
        style={{ width: 170, height: 100, marginBottom: 12 }}
      >
        <View
          style={{
            width: 170,
            height: 100,
            borderColor: "#A654A0",
            borderWidth: 1,
            borderRadius: 7,
            backgroundColor: "#e0ccdf",
          }}
        >
          <Text style={{ color: "#A654A0", padding: 20, fontSize: 18 }}>
            Wiiicoin
          </Text>
          <Image
            source={require("../../assets/images/logo.png")}
            style={{
              flex: 1,
              width: 40,
              height: 40,
              resizeMode: "contain",
              alignSelf: "flex-end",
            }}
          />
        </View>
      </TouchableOpacity>
      <Button
        mode="outlined"
        onPress={handleAddAndNavigate}
        style={styles.dicon}
        textColor="#ffffff"
        buttonColor="#A654A0"
      >
        <Text style={styles.dbutton}>Create</Text>
      </Button>
      <Button
        onPress={() => console.log("Pressed")}
        style={styles.dicon}
        textColor="#A654A0"
      >
        <Text style={{ color: "#A654A0", fontSize: 18 }}>Import Wallet</Text>
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  dicon: {
    marginTop: 20,
    width: "70%",
    alignSelf: "center",
  },
  dbutton: {
    color: "#ffffff",
    fontSize: 18,
  },
});

export default AddWallet;
