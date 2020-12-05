import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Button,
} from "react-native";

export default function ThisDayHistory() {
  const [description, setDescription] = useState("Click for Idea!");
  const [date, setDate] = useState("");
  const [wiki, setWiki] = useState("");

  var day = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  const fetchApiCall = () => {
    fetch(`https://byabbe.se/on-this-day/${month}/${day}/events.json`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        const length = response.events.length;
        const randomNum = getRandomInt(length);
        setDate(response.events[randomNum].year);
        setDescription(response.events[randomNum].description);
        setWiki(response.events[randomNum].wikipedia[0].wikipedia);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>HISTORY</Text>
      <TouchableHighlight onPress={fetchApiCall}>
        <View style={styles.button}>
          <Text style={styles.buttonText}> Idea</Text>
        </View>
      </TouchableHighlight>
      <StatusBar style="auto" />
      <View style={styles.jokeContainer}>
        {date ? <Text>In the year {date},</Text> : <Text></Text>}
        <Text style={styles.joke}>{description}</Text>
        {wiki ? <Text>Learn more at: {wiki}</Text> : <Text></Text>}
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
