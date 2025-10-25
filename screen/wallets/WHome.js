import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,

  ScrollView,

} from "react-native";
import React, { useContext } from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ListContext } from "./ListWallet";
// import { ScrollView } from "react-native-web";

const WHome = ({ navigation }) => {
  const { items } = useContext(ListContext);
 

  return (
    <ScrollView
      contentContainerStyle={{ justifyContent: "center", flexGrow: 1 }}
      style={styles.container}
    >
      <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="plus"
            color={"#A654A0"}
            size={25}
            onPress={() => navigation.navigate("AddWallet")}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Text
          style={{
            color: "#1b2454",
            fontWeight: "bold",
            fontSize: 32,
            marginBottom: 18,
          }}
        >
          Wallets
        </Text>
        <ScrollView contentContainerStyle={{ flexDirection: "row" }} horizontal>
          {items.length > 0 ? (
            items.map((item, index) => (
              <TouchableOpacity onPress={()=> navigation.navigate("Wallet")} key={index}>
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
          <TouchableOpacity onPress={() => navigation.navigate("AddWallet")}>
            <View style={styles.item1}>
              <Text style={{ color: "#1b2454", fontSize: 25 }}>
                Add a Wallet
              </Text>
              <Text style={{ color: "#918e8e" }}>
                It's free and you can create
              </Text>
              <Text style={{ color: "#918e8e" }}>as many as you like</Text>
            </View>
          </TouchableOpacity>

          {/*   <FlatList
              data={items}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.listContainer}
            /> */}
        </ScrollView>
      </View>
      <View style={{ flex: 3 }}>
        <Text
          style={{
            color: "#1b2454",
            fontWeight: "600",
            fontSize: 25,
            marginTop: 18,
            alignSelf: "flex-start",
          }}
        >
          Transactions
        </Text>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ color: "#918e8e", fontSize: 18 }}>
            Your transactions will appear here
          </Text>
          <Text style={{ color: "#918e8e", fontSize: 18 }}>Start with your wallet</Text>
        </View>
      </View>

      {/* Add More button */}

      {/* Modal for adding a new item */}
      {/*  <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <TextInput
            style={styles.input}
            placeholder="Enter name"
            value={newItemName}
            onChangeText={setNewItemName}
          />
          <Button title="Add Item" onPress={addItem} />
          <Button title="Cancel" onPress={() => setModalVisible(false)} />
        </View>
      </Modal> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#ffffff",
  },
  listContainer: {
    alignItems: "center",
  },
  item: {
    backgroundColor: "#A654A0",
    borderRadius: 10,
    width: 280,
    marginRight: 10,
    paddingHorizontal: 15,
    height: 175,
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  item1: {
    backgroundColor: "#edebeb",
    borderRadius: 10,
    width: 280,
    marginRight: 10,
    paddingHorizontal: 25,
    height: 175,
    justifyContent: "center",
    paddingVertical: 20,
  },
  itemText: {
    fontSize: 20,
    color: "white",
  },
  addButton: {
    backgroundColor: "#008CBA",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    marginTop: 20,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "80%",
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
});
export default WHome;
