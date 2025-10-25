import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, {useState} from "react";
/* import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"; */
import Me from "./Me";
import Following from "./Following";

/* const Tab = createMaterialTopTabNavigator(); */

const Content = () => {

/*     <Tab.Navigator initialRouteName="Me">
      <Tab.Screen name="Me" component={Me} />
      <Tab.Screen name="Following" component={Following} />
    </Tab.Navigator> */
    const [activeTab, setActiveTab] = useState("Me"); // State to track active tab

  return (
    <View style={{ flex: 1 }}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "Me" && styles.activeTab]}
          onPress={() => setActiveTab("Me")}
        >
          <Text style={styles.tabText}>Me</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === "Following" && styles.activeTab]}
          onPress={() => setActiveTab("Following")}
        >
          <Text style={styles.tabText}>Following</Text>
        </TouchableOpacity>
      </View>

      {/* Render Active Tab */}
      <View style={{ flex: 1 }}>
        {activeTab === "Me" ? <Me /> : <Following />}
      </View>
    </View>
  );
  
};

const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#ffffff",
  },
  tab: {
    paddingVertical: 10,
width: "45%"
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#A654A0",
  },
  tabText: {
    color: "#A654A0",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center"
  },
});   

export default Content;
