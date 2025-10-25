import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Switch } from "react-native-paper";

const GeneralSettings = ({navigation}) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const [isSwitchOn1, setIsSwitchOn1] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn1(!isSwitchOn);
  const onToggleSwitch1 = () => setIsSwitchOn1(!isSwitchOn1);
  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View style={styles.whitecont}>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => navigation.navigate("OnLaunch")}
        >
          <View style={styles.cont}>
            <Text style={styles.bluetext}>On Launch</Text>
            <MaterialCommunityIcons
              name="greater-than"
              color="#1E1E1E"
              style={{ alignSelf: "center" }}
              size={12}
            />
          </View>
        </TouchableHighlight>

        <View style={styles.cont1}>
          <Text style={styles.bluetext}>Advanced Mode</Text>
          <Switch
            value={isSwitchOn}
            onValueChange={onToggleSwitch}
            style={{ alignSelf: "center" }}
          />
        </View>

        <View style={styles.cont3}>
          <View style={{ marginVertical: 8 }}>
            <Text style={{ color: "#1b2454" }}>
              When enabled, you will be able to view selected wallets, and
              transactions, using your other Apple iCloud connected devices
            </Text>
          </View>
          <View style={styles.newC}>
            <Text style={styles.bluetext}>Show Refreshing Status</Text>
            <Switch
              value={isSwitchOn1}
              onValueChange={onToggleSwitch1}
              style={{ alignSelf: "center" }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  whitecont: {
    marginVertical: 5,
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  bluetext: {
    color: "#1b2454",
    fontSize: 18,
    alignSelf: "center",
  },
  cont: {
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cont1: {
    paddingVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopColor: "#f5f2f2",
    borderTopWidth: 1,
  },
  cont3: {
    paddingVertical: 8,

    borderTopColor: "#f5f2f2",
    borderTopWidth: 1,
    borderBottomColor: "#f5f2f2",
    borderBottomWidth: 1,
  },
  newC: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default GeneralSettings;
