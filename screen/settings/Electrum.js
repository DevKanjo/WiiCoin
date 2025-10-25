import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState, useContext } from "react";
import { Button } from "react-native-paper";
import { ElectrumContext } from "../../electrum-proxy/ElectrumContext";

const Electrum = () => {
  const { status, connectToProxy } = useContext(ElectrumContext);
  const [host, setHost] = useState("etx1.wiiicoin.io");
  const [tcpPort, setTcpPort] = useState("50001");
  const [sslPort, setSslPort] = useState("50002");

  const saveSettings = () => {
    connectToProxy(host);
    alert(
      "Your settings have been saved. Attempting to connect to Electrum server..."
    );
  };

  return (
    <View
      style={{ backgroundColor: "#ffffff", flex: 1, paddingHorizontal: 10 }}
    >
      <View style={{ alignItems: "center", flex: 1, justifyContent: "center" }}>
        <Text>Status</Text>
        <View
          style={{
            backgroundColor: "#beedcb",
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 20,
            width: 120,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: status.includes("Connected") ? "#07eb47" : "#FF0000",
            }}
          >
            {status}
          </Text>
        </View>
        <Text style={{ color: "#A654A0", marginTop: 20 }}>
          {host}:{sslPort}
        </Text>
      </View>

      <View style={{ flex: 3 }}>
        <Text>Set to blank to use default</Text>
        <TextInput
          placeholder="Host, for example 111.222.333.444"
          value={host}
          editable={false}
          style={styles.input}
        />
        <TextInput
          placeholder="TCP Port, usually 50001"
          value={tcpPort}
          editable={false}
          keyboardType="numeric"
          style={styles.input}
        />
        <TextInput
          placeholder="SSL Port, usually 50002"
          value={sslPort}
          editable={false}
          keyboardType="numeric"
          style={styles.input}
        />

        <Button
          mode="outlined"
          style={styles.dicon}
          onPress={saveSettings}
          textColor="#ffffff"
          buttonColor="#A654A0"
        >
          <Text style={styles.dbutton}>Save</Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dicon: {
    marginTop: 20,
    width: "100%",
    alignSelf: "center",
  },
  dbutton: {
    color: "#ffffff",
    fontSize: 18,
  },
  input: {
    backgroundColor: "#F2F1F6",
    fontSize: 18,
    paddingHorizontal: 10,
    height: 40,
    width: "100%",
    borderRadius: 5,
    marginVertical: 10,
    alignSelf: "center",
    borderColor: "#D9D9D9",
    borderWidth: 1,
  },
});

export default Electrum;
