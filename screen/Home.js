import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import WHome from "./wallets/WHome";
import Content from "./content/Content";
import Explore from "./explore/Explore";
import SHome from "./settings/SHome";
import "react-native-gesture-handler";

const Tab = createBottomTabNavigator();

export default function Home() {
   /*  useEffect(() => {
      fetch("http://192.168.1.219:5000/api/version")
        .then((res) => res.json())
        .then((data) => console.log("Server version:", data))
        .catch((err) => console.log("Error:", err));
    }, []); */
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#A654A0",
        tabBarLabelStyle: { fontSize: 14 },
      }}
    >
      <Tab.Screen
        name="WHome"
        component={WHome}
        options={{
          tabBarLabel: "Wallets",
          header: () => false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="wallet" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Content"
        component={Content}
        options={{
          tabBarLabel: "Content",
          header: () => false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="inbox-multiple"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          header: () => false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="search-web"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SHome"
        component={SHome}
        options={{
          tabBarLabel: "Settings",
          headerTitle: "Settings",
          headerTitleStyle: {
            color: "#1b2454",
            fontWeight: "bold",
            fontSize: 30,
          },
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
