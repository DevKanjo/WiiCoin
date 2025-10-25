import { View, Text, TextInput, TouchableHighlight } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Following = () => {
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
          placeholder="Shortcode or Namespace ID"
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
          <MaterialCommunityIcons name="search-web" size={25} />
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default Following;
