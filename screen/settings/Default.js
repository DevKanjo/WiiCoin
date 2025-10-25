import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useContext } from "react";

import { ListContext } from "./../wallets/ListWallet";

const Default = ({ navigation }) => {
  const { items } = useContext(ListContext);
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.container}
    >
      {items.length > 0 ? (
        items.map((item, index) => (
          <TouchableOpacity onPress={() => navigation.goBack()} key={index}>
            <View style={styles.item}>
              <View>
                <Text style={styles.itemText}>{item}</Text>
                <Text style={{ color: "white", fontSize: 35 }}>0 WIII</Text>
              </View>
              <View>
                <Text style={{ color: "white" }}>Latest Transaction</Text>
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  Never
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))
      ) : (
        <Text></Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#ffffff",
  },
  item: {
    backgroundColor: "#A654A0",
    borderRadius: 10,
    width: "100%",
    marginRight: 10,
    paddingHorizontal: 15,
    height: 160,
    justifyContent: "space-between",
    paddingVertical: 20,
    marginTop: 10
  },
  itemText: {
    fontSize: 20,
    color: "white",
  },
});

export default Default;
