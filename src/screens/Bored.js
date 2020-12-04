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

export default function Bored() {
  let [joke, setJoke] = React.useState("Click for Idea!");

  const fetchApiCall = () => {
    fetch("https://www.boredapi.com/api/activity", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      //http://www.boredapi.com/api/activity?type=recreational //education //social //relaxation //cooking

      .then((response) => response.json())
      .then((response) => {
        // console.log(response);
        setJoke(response.activity);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bored???</Text>
      <TouchableHighlight onPress={fetchApiCall}>
        <View style={styles.button}>
          <Text style={styles.buttonText}> Idea</Text>
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
