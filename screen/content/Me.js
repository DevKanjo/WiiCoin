import { View, Text, TextInput, TouchableHighlight } from "react-native";
import React, {useEffect} from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Me = () => {
  useEffect(() => {
    console.log("Screen Loaded");
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          paddingHorizontal: 5,
          borderBottomColor: "#f5f2f2",
          borderBottomWidth: 1,
          paddingBottom: 10,
        }}
      >
        <TextInput
          placeholder="Profile Name"
          clearButtonMode="always"
          style={{
            backgroundColor: "#F2F1F6",
            fontSize: 18,
            paddingHorizontal: 10,
            height: 40,
            width: "90%",
            borderRadius: 20,
            alignSelf: "center",
          }}
        ></TextInput>
        <TouchableHighlight
          style={{ alignSelf: "center" }}
          onPress={() => console.log("Pressed")}
        >
          <MaterialCommunityIcons name="plus" size={25} color="#ded5d5" />
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default Me;
