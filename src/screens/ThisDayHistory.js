import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Button,
  Linking,
} from "react-native";
import * as Animatable from "react-native-animatable";
import "@expo/match-media";

export default function ThisDayHistory() {
  const [description, setDescription] = useState("Click for Idea!");
  const [date, setDate] = useState("");
  const [wiki, setWiki] = useState("");

  var day = new Date().getDate();
  var month = new Date().getMonth() + 1;
  // var year = new Date().getFullYear();

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

  const fadeIn = {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>HISTORY</Text>

      <StatusBar style="auto" />

      {date ? (
        <Animatable.View
          style={styles.historyContainer}
          animation="slideInLeft"
        >
          {date ? (
            <Text style={styles.year}>In the year {date},</Text>
          ) : (
            <Text></Text>
          )}

          <Animatable.Text style={styles.description} animation={fadeIn}>
            {description}
          </Animatable.Text>
          {wiki ? (
            <>
              <Text style={styles.wikiTitle}>Learn more at:</Text>
              <Text
                onPress={() => {
                  Linking.openURL(`${wiki}`);
                }}
                style={styles.wiki}
              >
                {wiki}
              </Text>
            </>
          ) : (
            <Text></Text>
          )}
        </Animatable.View>
      ) : (
        <Text></Text>
      )}
      <Animatable.View animation="zoomIn">
        <TouchableHighlight onPress={fetchApiCall}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Learn Some History!</Text>
          </View>
        </TouchableHighlight>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#aaa",
    backgroundColor: "#4b357a",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    position: "absolute",
    top: 10,
    fontSize: 35,
    color: "#fff",
  },
  button: {
    position: "relative",
    padding: 20,
    paddingLeft: 100,
    paddingRight: 100,
    backgroundColor: "#0645AD",
    shadowColor: "#000",
    shadowOffset: { width: 0.5, height: 1 },
    shadowOpacity: 0.7,
    shadowRadius: 8,
    bottom: -10,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 20,
    width: "100%",
  },
  historyContainer: {
    // backgroundColor: "#fff",
    backgroundColor: "#e2daee",
    position: "relative",
    top: -20,
    padding: 20,
    borderRadius: 10,
    width: "90%",
    height: "65%",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0.5, height: 1 },
    shadowOpacity: 0.7,
    shadowRadius: 5,
  },
  year: {
    fontSize: 20,
    position: "absolute",
    top: 5,
    padding: 5,
  },
  description: {
    fontSize: 22,
    color: "black",
    padding: 10,
  },
  wikiTitle: {
    position: "absolute",
    bottom: 30,
    padding: 5,
    fontSize: 15,
  },
  wiki: {
    position: "absolute",
    bottom: 5,
    padding: 5,
    fontSize: 10,
    color: "darkblue",
    width: "100%",
  },
});
