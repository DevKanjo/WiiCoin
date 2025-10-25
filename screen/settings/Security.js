import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Switch } from "react-native-paper";

const Security = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const [isSwitchOn1, setIsSwitchOn1] = React.useState(false);
  const onToggleSwitch1 = () => setIsSwitchOn1(!isSwitchOn1);
  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{
            color: "#1b2454",
            fontWeight: "bold",
            fontSize: 25,
            marginBottom: 18,
          }}
        >
          Biometrics
        </Text>
        <View style={styles.cont1}>
          <Text style={styles.bluetext}>Use Biometrics</Text>
          <Switch
            value={isSwitchOn}
            onValueChange={onToggleSwitch}
            style={{ alignSelf: "center" }}
          />
        </View>
        <View style={{ marginVertical: 8 }}>
          <Text style={{ color: "#1b2454" }}>
            Biometrics will be used to confirm your identity prior to making a
            transaction, unlocking, exporting or deleting a wallet. Biometrics
            will not be used to unlock an encrypted storage
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 35 }}>
        <Text
          style={{
            color: "#1b2454",
            fontWeight: "bold",
            fontSize: 25,
            marginBottom: 18,
          }}
        >
          Storage
        </Text>
        <View style={styles.cont1}>
          <Text style={styles.bluetext}>Encrypted and Password Protected</Text>
          <Switch
            value={isSwitchOn1}
            onValueChange={onToggleSwitch1}
            style={{ alignSelf: "center" }}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "#ffffff",
  },
  bluetext: {
    color: "#1b2454",
    fontSize: 18,
    alignSelf: "center",
  },

  cont1: {
    paddingVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "#f5f2f2",
    borderTopWidth: 1,
    borderTopColor: "#f5f2f2",
    borderBottomWidth: 1,
  },
});

export default Security;
