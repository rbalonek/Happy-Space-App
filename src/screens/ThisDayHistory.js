import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Linking } from "react-native";
import * as Animatable from "react-native-animatable";
import "@expo/match-media";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ThisDayHistory() {
  const [animation, setAnimation] = useState("zoomInLeft");
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
        setAnimation("lightSpeedOut");
        setAnimation("flipInX");
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
      <StatusBar style="auto" />

      {date ? (
        <Animatable.View
          style={styles.historyContainer}
          animation={animation}
          easing="ease-in"
        >
          {date ? (
            <Text style={[styles.year, styles.text]}>
              On {month}/{day}/{date}:
            </Text>
          ) : (
            <Text></Text>
          )}

          <Animatable.Text
            style={[styles.description, styles.text]}
            animation={fadeIn}
          >
            {description}
          </Animatable.Text>
          {wiki ? (
            <>
              <Text style={[styles.wikiTitle, styles.text]}>
                Learn more at:
              </Text>
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
      <Animatable.View animation="zoomIn" style={styles.buttonContainer}>
        <TouchableOpacity onPress={fetchApiCall}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Learn Some History!</Text>
          </View>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4b357a",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    position: "absolute",
    top: 10,
    fontSize: 35,
    color: "#fff",
    width: "100%",
    backgroundColor: "gold",
    textAlign: "center",
  },
  buttonContainer: {
    position: "absolute",
    bottom: "5%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    position: "relative",
    padding: 20,
    paddingLeft: 100,
    paddingRight: 100,
    backgroundColor: "#0645AD",
    borderBottomWidth: 4,
    borderRadius: 5,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "black",
    shadowOpacity: 1.0,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 20,
    width: "100%",
  },
  historyContainer: {
    backgroundColor: "#000",
    position: "relative",
    top: "-10%",
    padding: 20,
    borderRadius: 10,
    width: "90%",
    height: "75%",
    justifyContent: "center",
    shadowColor: "lightblue",
    shadowOffset: { width: 0.5, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  text: {
    color: "white",
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
    color: "lightblue",
    width: "100%",
  },
});
