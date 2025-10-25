import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

const About = () => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        flex: 1,
        paddingBottom: 30,
        paddingHorizontal: 5
      }}
    >
      <Image
        source={require("../../assets/images/logo.png")}
        style={{
          width: 110,
          height: 110,
          resizeMode: "contain",
        }}
      />
      <Text
        style={{
          color: "#8b8f8b",
          textAlign: "center",
          marginVertical: 15,
          fontSize: 16,
        }}
      >
        The world's first and largest digital marketplace for crypto
        collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
        exclusive digital items.
      </Text>
      <Text style={{ fontSize: 16, color: "#1b2454" }}>
        Always backup your keys!
      </Text>
      <Button
        style={styles.dicon}
        mode="outlined"
        onPress={() => console.log("Pressed")}
        textColor="#ffffff"
        buttonColor="#A654A0"
      >
        <Text style={styles.dbutton}>Help with a review</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  dicon: {
    marginTop: 30,
    width: "70%",
    alignSelf: "center",
  },
  dbutton: {
    color: "#ffffff",
    fontSize: 18,
  },
});

export default About;
