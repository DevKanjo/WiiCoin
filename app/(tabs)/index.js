import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MaterialCommunityIcons from "@expo/vector-icons";
import "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import Home from "../../screen/Home.js";
import AddWallet from "../../screen/wallets/AddWallet.js";
import BackupPhrase from "../../screen/wallets/BackupPhrase.js";
import GeneralSettings from "../../screen/settings/GeneralSettings.js";
import OnLaunch from "../../screen/settings/OnLaunch.js";
import Default from "../../screen/settings/Default.js";
import Security from "../../screen/settings/Security.js";
import Network from "../../screen/settings/Network.js";
import Electrum from "../../screen/settings/Electrum.js";
import Ipfs from "../../screen/settings/Ipfs.js";
import Broadcast from "../../screen/settings/Broadcast.js";
import About from "../../screen/settings/About.js";
import { ListProvider } from "../../screen/wallets/ListWallet.js";
import Wallet from "../../screen/wallets/Wallet.js";
import Send from "../../screen/wallets/Send.js";
import Receive from "../../screen/wallets/Receive.js";
import WalletMenu from "../../screen/wallets/WalletMenu.js";
import { ElectrumProvider } from "../../electrum-proxy/ElectrumContext.js";

const Stack = createNativeStackNavigator();

export default function Apps() {
  return (
    <ElectrumProvider>
      <ListProvider>
        <NavigationIndependentTree>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={Home}
                options={{
                  header: () => false,
                }}
              ></Stack.Screen>
              <Stack.Screen
                name="AddWallet"
                component={AddWallet}
                options={{
                  presentation: "modal",
                  headerTitle: "Add Wallet",
                }}
              ></Stack.Screen>
              <Stack.Screen
                name="BackupPhrase"
                component={BackupPhrase}
                options={{
                  header: () => false,
                }}
              ></Stack.Screen>
              <Stack.Screen
                name="GeneralSettings"
                component={GeneralSettings}
                options={{
                  headerTitle: "",
                }}
              ></Stack.Screen>
              <Stack.Screen
                name="OnLaunch"
                component={OnLaunch}
                options={{
                  headerTitle: "",
                }}
              ></Stack.Screen>
              <Stack.Screen
                name="Default"
                component={Default}
                options={{
                  headerTitle: "",
                }}
              ></Stack.Screen>
              <Stack.Screen
                name="Security"
                component={Security}
                options={{
                  headerTitle: "",
                }}
              ></Stack.Screen>
              <Stack.Screen
                name="Network"
                component={Network}
                options={{
                  headerTitle: "",
                }}
              ></Stack.Screen>
              <Stack.Screen
                name="Electrum"
                component={Electrum}
                options={{
                  headerTitle: "",
                }}
              ></Stack.Screen>
              <Stack.Screen
                name="Ipfs"
                component={Ipfs}
                options={{
                  headerTitle: "",
                }}
              ></Stack.Screen>
              <Stack.Screen
                name="Broadcast"
                component={Broadcast}
                options={{
                  headerTitle: "",
                }}
              ></Stack.Screen>
              <Stack.Screen
                name="About"
                component={About}
                options={{
                  headerTitle: "",
                }}
              ></Stack.Screen>
              <Stack.Screen
                name="Wallet"
                component={Wallet}
                options={({ navigation }) => ({
                  headerTitle: "",
                  headerStyle: {
                    backgroundColor: "#bf86bb",
                  },
                  headerRight: () => (
                    <TouchableOpacity
                      onPress={() => navigation.navigate("WalletMenu")}
                      style={{ marginRight: 15 }}
                    >
                      <Ionicons name="menu" size={24} color="#ffffff" />
                    </TouchableOpacity>
                  ),
                  headerTintColor: "#fff",
                  headerShadowVisible: false,
                })}
              ></Stack.Screen>
              <Stack.Screen
                name="Send"
                component={Send}
                options={{
                  headerTitle: "",
                }}
              ></Stack.Screen>
              <Stack.Screen
                name="Receive"
                component={Receive}
                options={{
                  headerTitle: "",
                }}
              ></Stack.Screen>
              <Stack.Screen
                name="WalletMenu"
                component={WalletMenu}
                options={{
                  headerTitle: "",
                }}
              ></Stack.Screen>
            </Stack.Navigator>
          </NavigationContainer>
        </NavigationIndependentTree>
      </ListProvider>
    </ElectrumProvider>
  );
}
