import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Button } from "react-native-paper";
import axios from "axios";

const BackupPhrase = ({ navigation }) => {
  const [randomWords, setRandomWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    fetchWords(); // Automatically fetch words when the screen loads
  }, []);

  const fetchWords = async () => {
    try {
      const response = await axios.get(
        "https://random-word-api.herokuapp.com/word?number=50"
      ); // Fetch more words
      const filteredWords = response.data
        .filter((word) => word.length <= 8)
        .slice(0, 23); // Keep words ≤ 6 chars
      setRandomWords(filteredWords);
    } catch (error) {
      setRandomWords(["Error fetching words"]);
      setFetchError(true)
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Please take a moment to write down this mnemonic phrase on a piece of
        paper. It's your backup you can use to restore the wallet on this device
      </Text>
      {loading ? (
        <ActivityIndicator size="large" color="blue" style={styles.loader} />
      ) : (
        <View style={{ flex: 1 }}>
          <View style={styles.wordContainer}>
            {randomWords.length > 0 ? (
              randomWords.map((word, index) => (
                <View
                  key={index}
                  style={{
                    backgroundColor: "#f5f5f5",
                    margin: 5,
                    borderRadius: 5,
                  }}
                >
                  <Text style={styles.word}>
                    {index + 1}. {word}
                  </Text>
                </View>
              ))
            ) : (
              <Text style={styles.noWords}>
                No short words found. Try again.
              </Text>
            )}
          </View>
          <View>
            <Button
              mode="outlined"
              onPress={() => navigation.navigate("Home")}
              style={styles.dicon}
              textColor="#ffffff"
              buttonColor="#A654A0"
              disabled={fetchError}
            >
              <Text style={styles.dbutton}>OK, I wrote this down!</Text>
            </Button>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    paddingTop: 60,
    backgroundColor: "#ffffff",
  },
  title: { fontSize: 15, marginBottom: 15, color: "#1b2454" },
  wordContainer: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  word: {
    fontSize: 15,
    fontWeight: "700",
    padding: 5,
    textAlign: "center",
    color: "#918e8e",
  },
  noWords: { fontSize: 16, color: "red", marginTop: 10 },
  loader: { marginTop: 20 },
  dicon: {
    marginTop: 20,
    width: "70%",
    alignSelf: "center",
  },
  dbutton: {
    color: "#ffffff",
    fontSize: 18,
  },
});

export default BackupPhrase;
