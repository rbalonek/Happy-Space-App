import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Animatable from "react-native-animatable";
import { useMediaQuery } from "react-responsive";

export default function DadJokes() {
  const [joke, setJoke] = React.useState("You kids like jokes?");
  const [animation, setAnimation] = useState("bounceIn");

  const tallerPhone = useMediaQuery({ minWidth: 410 });

  useEffect(() => {
    // console.log("DadJokes - tallerPhone:", tallerPhone);
    // console.log("DadJokes - joke:", joke);
  }, [tallerPhone, joke]);

  // Fallback dad jokes in case API fails
  const fallbackJokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "I'm reading a book about anti-gravity. It's impossible to put down!",
    "Why did the scarecrow win an award? He was outstanding in his field!",
    "I used to hate facial hair, but then it grew on me.",
    "What do you call a fake noodle? An impasta!",
    "Why don't eggs tell jokes? They'd crack each other up!",
    "I only know 25 letters of the alphabet. I don't know y.",
    "What did the ocean say to the beach? Nothing, it just waved!",
    "Why do fathers take an extra pair of socks when they go golfing? In case they get a hole in one!",
    "I'm afraid for the calendar. Its days are numbered."
  ];

  const getRandomFallbackJoke = () => {
    const randomJoke = fallbackJokes[Math.floor(Math.random() * fallbackJokes.length)];
    setJoke(randomJoke);
    setAnimation("bounceInRight");
  };

  const fetchApiCall = () => {
    fetch("https://icanhazdadjoke.com/", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response && response.joke) {
          setJoke(response.joke);
          setAnimation("bounceInRight");
        } else {
          getRandomFallbackJoke();
        }
      })
      .catch((err) => {
        // console.log(err);
        getRandomFallbackJoke();
      });
  };

  return (
    <View style={styles.container}>
      <Image
        style={tallerPhone ? styles.img : styles.imgShorter}
        source={require("../../assets/DadLawn.png")}
        resizeMode="contain"
        // onLoad={() => console.log("DadLawn.jpg loaded successfully")}
        // onError={(error) => console.log("DadLawn.jpg error:", error)}
      />

      <StatusBar style="auto" />

      <Animatable.View
        style={tallerPhone ? styles.jokeContainer : styles.jokeContainerSmaller}
        animation={animation}
        duration={800}
        key={joke}
      >
        <Text style={styles.joke}>"{joke}"</Text>
        <View style={styles.bubbleTail} />
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
    backgroundColor: "rgb(35, 177, 77)",
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
    width: "90%",
    alignSelf: "center",
    borderBottomWidth: 4,
    borderRadius: 5,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "black",
    shadowOpacity: 1.0,
  },
  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 20,
  },
  jokeContainer: {
    backgroundColor: "#00aabb",
    position: "relative",
    top: "-25%",
    padding: 20,
    left: -55,
    width: "60%",
    borderRadius: 50,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "black",
    shadowOpacity: 0.5,
    zIndex: 10,
    overflow: "visible",
  },
  bubbleTail: {
    position: "absolute",
    bottom: -15,
    right: 20,
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 25,
    borderRightWidth: 0,
    borderTopWidth: 30,
    borderBottomWidth: 0,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: "#00aabb",
    borderBottomColor: "transparent",
  },
  joke: {
    fontSize: 15,
    color: "#FFF",
    padding: 10,
    fontWeight: "bold",
  },
  img: {
    position: "absolute",
    zIndex: 1,
    width: "100%",
    height: "60%",
    top: "20%",
    resizeMode: "contain",
  },
  imgShorter: {
    position: "absolute",
    zIndex: 1,
    width: "100%",
    height: "50%",
    top: "15%",
    resizeMode: "contain",
  },
  jokeContainerSmaller: {
    backgroundColor: "#00aabb",
    position: "relative",
    top: "-35%",
    padding: 20,
    left: -60,
    width: "60%",
    borderRadius: 50,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "black",
    shadowOpacity: 0.5,
    zIndex: 10,
    overflow: "visible",
  },
});
