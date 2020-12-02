import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Button,
} from "react-native";

export default function DadJokes({ navigation }) {
  let [joke, setJoke] = React.useState("Click GET JOKE!");

  const fetchApiCall = () => {
    fetch("https://icanhazdadjoke.com/", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        // console.log(response.joke);
        setJoke(response.joke);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Random Dad Joke App</Text>
      <TouchableHighlight onPress={fetchApiCall}>
        <View style={styles.button}>
          <Text style={styles.buttonText}> GET Joke!</Text>
        </View>
      </TouchableHighlight>
      <StatusBar style="auto" />
      <View style={styles.jokeContainer}>
        <Text style={styles.joke}>"{joke}"</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#aaa",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    position: "absolute",
    top: 100,
    fontSize: 35,
    color: "#fff",
  },
  button: {
    padding: 20,
    paddingLeft: 100,
    paddingRight: 100,
    marginVertical: 25,
    backgroundColor: "#0645AD",
  },
  buttonText: {
    color: "#FFF",
  },
  jokeContainer: {
    backgroundColor: "#fff",
    position: "relative",
    bottom: -100,
    padding: 20,
    borderRadius: 5,
  },
  joke: {
    fontSize: 25,
    color: "black",
    padding: 10,
  },
});
