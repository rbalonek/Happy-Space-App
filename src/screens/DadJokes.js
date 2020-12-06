import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Animatable from "react-native-animatable";
import "@expo/match-media";

export default function DadJokes() {
  let [joke, setJoke] = React.useState("You kids like jokes?");
  const [animation, setAnimation] = useState("bounceIn");

  const fetchApiCall = () => {
    fetch("https://icanhazdadjoke.com/", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setAnimation("lightSpeedOut");
        setAnimation("bounceInRight");
        setJoke(response.joke);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require("../../assets/DadLawn.jpg")} />

      <StatusBar style="auto" />
      <Animatable.View style={styles.jokeContainer} animation={animation}>
        <Text style={styles.joke}>"{joke}"</Text>
      </Animatable.View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={fetchApiCall}>
          <View style={styles.button}>
            <Text style={styles.buttonText}> GET Joke!</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  button: {
    zIndex: 999,
    padding: 20,
    paddingLeft: 100,
    paddingRight: 100,
    marginVertical: 25,
    backgroundColor: "#0645AD",
    width: "100%",
    borderRadius: 80,
  },
  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 20,
  },
  jokeContainer: {
    backgroundColor: "#00aabb",
    position: "relative",
    top: "-35%",
    padding: 20,
    borderRadius: 50,
    left: -55,
    width: "60%",
  },
  joke: {
    fontSize: 15,
    color: "#FFF",
    padding: 10,
    fontWeight: "bold",
  },
  img: {
    position: "absolute",
    flex: 1,
    zIndex: -1,
    width: "100%",
    top: 0,
  },
});
