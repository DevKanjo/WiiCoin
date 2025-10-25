import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Switch } from "react-native-paper";

const OnLaunch = ({ navigation }) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View style={styles.whitecont}>
        <View style={styles.cont}>
          <Text style={styles.bluetext}>View All Wallets</Text>
          <Switch
            value={isSwitchOn}
            onValueChange={onToggleSwitch}
            style={{ alignSelf: "center" }}
          />
        </View>

        <View style={styles.cont3}>
          <View style={{ marginVertical: 15 }}>
            <Text style={{ color: "#1b2454" }}>
              When disabled, BlueWallet will immediately open the selected
              wallet at Launch
            </Text>
          </View>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => navigation.navigate("Default")}
          >
            <View style={styles.newC}>
              <Text style={styles.bluetext}>Default Into</Text>
              <View style={{ flexDirection: "row", alignSelf: "center" }}>
                <Text style={{ color: "#918e8e", marginRight: 10, fontSize: 17 }}>
                  Wallet
                </Text>
                <MaterialCommunityIcons
                  name="greater-than"
                  color="#918e8e"
                  style={{ alignSelf: "center" }}
                  size={13}
                />
              </View>
            </View>
          </TouchableHighlight>
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
    paddingVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
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
    marginTop: 10
  },
});

export default OnLaunch;
