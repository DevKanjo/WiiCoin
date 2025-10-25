import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const SHome = ({navigation}) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View style={styles.whitecont}>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => navigation.navigate("GeneralSettings")
          }
        >
          <View style={styles.cont}>
            <Text style={styles.bluetext}>General</Text>
            <MaterialCommunityIcons
              name="greater-than"
              color="#1E1E1E"
              style={{ alignSelf: "center" }}
              size={12}
            />
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => navigation.navigate("Security")}
        >
          <View style={styles.cont1}>
            <Text style={styles.bluetext}>Security</Text>
            <MaterialCommunityIcons
              name="greater-than"
              color="#1E1E1E"
              style={{ alignSelf: "center" }}
              size={12}
            />
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => navigation.navigate("Network")}
        >
          <View style={styles.cont1}>
            <Text style={styles.bluetext}>Network</Text>
            <MaterialCommunityIcons
              name="greater-than"
              color="#1E1E1E"
              style={{ alignSelf: "center" }}
              size={12}
            />
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => navigation.navigate("About")}
        >
          <View style={styles.cont3}>
            <Text style={styles.bluetext}>About</Text>
            <MaterialCommunityIcons
              name="greater-than"
              color="#1E1E1E"
              style={{ alignSelf: "center" }}
              size={12}
            />
          </View>
        </TouchableHighlight>
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
  },
  cont: {
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cont1: {
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopColor: "#f5f2f2",
    borderTopWidth: 1,
  },
  cont3: {
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopColor: "#f5f2f2",
    borderTopWidth: 1,
    borderBottomColor: "#f5f2f2",
    borderBottomWidth: 1,
  },
});

export default SHome;
