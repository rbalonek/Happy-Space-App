import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({ navigation }) => {
  const [quote, setQuote] = useState("Loading...");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetchApiCall();
  }, []);

  const fetchApiCall = () => {
    fetch("https://api.quotable.io/random", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setQuote(response.content);
        setAuthor(response.author);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.title}>Welcome to Happy Space</Text>
      </View>

      <View style={styles.buttonsTop}>
        <TouchableOpacity
          style={styles.button}
          title="Advice from Cats"
          onPress={() => navigation.navigate("Advice From Cats")}
        >
          <Text style={styles.buttonText}>Advice From Cats</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          title="This Day In History"
          onPress={() => navigation.navigate("This Day in History")}
        >
          <Text style={styles.buttonText}>This Day In History</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.quotes}>
        <Text style={styles.quote}>"{quote}"</Text>
        <Text style={styles.author}>-{author}</Text>
      </View>

      <View style={styles.buttonsBottom}>
        <TouchableOpacity
          style={styles.button}
          title="See Dad Jokes!"
          onPress={() => navigation.navigate("Dad Jokes")}
        >
          <Text style={styles.buttonText}>Dad Jokes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          title="Bored"
          onPress={() => navigation.navigate("Bored")}
        >
          <Text style={styles.buttonText}>Inspiration</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#A6D9F7",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleView: {
    backgroundColor: "#312F2F",
    width: "100%",
    height: 100,
    position: "absolute",
    top: 0,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0.5, height: 1 },
    shadowOpacity: 1.9,
    shadowRadius: 8,
  },
  title: {
    color: "#A6D9F7",
    fontSize: 25,
    fontFamily: "Baskerville-SemiBold",
    position: "relative",
    top: "20%",
  },
  quotes: {
    position: "relative",
    top: "0%",
    paddingLeft: 10,
    paddingRight: 10,
  },
  quote: {
    fontSize: 20,
  },
  author: {
    color: "grey",
  },
  allButtons: {
    position: "absolute",
    bottom: "5%",
  },
  buttonsTop: {
    position: "absolute",
    top: 150,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: "100%",
  },
  buttonsBottom: {
    position: "absolute",
    bottom: "10%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: "100%",
  },
  button: {
    backgroundColor: "#A4B0F5",
    height: 90,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    marginBottom: 20,
    borderBottomWidth: 4,
    borderRadius: 20,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "#312F2F",
    shadowOpacity: 1.0,
  },
  buttonText: {
    color: "#312F2F",
    fontWeight: "bold",
  },
});
export default HomeScreen;
