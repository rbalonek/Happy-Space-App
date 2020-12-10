import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import * as Animatable from "react-native-animatable";
import "@expo/match-media";

export default function Decisions() {
  const [decision, setDecision] = useState("");
  const [advice, setAdvice] = useState("");
  const [kitten, setKitten] = useState(null);
  const [adviceAnimation, setAdviceAnimation] = useState("flipInY");
  const [kittenAnimation, setKittenAnimation] = useState("flipInX");
  const [yesNoAnimation, setYesNoAnimation] = useState("bounceInDown");

  const fetchDecisions = () => {
    fetch("https://yesno.wtf/api", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setDecision(response.answer);
        setYesNoAnimation("fadeOut");
        setYesNoAnimation("bounceInDown");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchAdvice = () => {
    fetch("https://api.adviceslip.com/advice", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setAdvice(response.slip.advice);
        setAdviceAnimation("fadeOut");
        setAdviceAnimation("flipInY");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchKitten = () => {
    fetch(`https://aws.random.cat/meow`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setKitten(response.file);
        setKittenAnimation("fadeOut");
        setKittenAnimation("flipInX");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const buttonPress = () => {
    fetchAdvice();
    fetchDecisions();
    fetchKitten();
  };

  return (
    <View style={styles.container}>
      <View style={styles.yesNoContainer}>
        {decision ? (
          <View>
            <Text>Your decision:</Text>
            <Animatable.Text style={styles.yesNo} animation={yesNoAnimation}>
              {decision}
            </Animatable.Text>
          </View>
        ) : (
          <View>
            <Text>Ask Anything (yes / no)</Text>
          </View>
        )}
      </View>

      <Animatable.View
        style={styles.kittenContainer}
        animation={kittenAnimation}
      >
        <Image
          style={styles.kittens}
          source={{
            uri: `${kitten}`,
          }}
        />
      </Animatable.View>

      {advice ? (
        <Animatable.View style={styles.advice} animation={adviceAnimation}>
          <Text> Advice:</Text>
          <Text>{advice}</Text>
        </Animatable.View>
      ) : (
        <View style={styles.advice}>
          <Text></Text>
        </View>
      )}

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={buttonPress}>
          <Text style={styles.buttonText}>Decisions</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  yesNoContainer: {
    position: "relative",
  },
  yesNo: {
    fontSize: 30,
  },
  advice: {
    position: "relative",
    bottom: 100,
    paddingLeft: 20,
    paddingRight: 20,
  },
  kittenContainer: {
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "black",
    shadowOpacity: 1,
  },
  kittens: {
    height: 200,
    width: 200,
    position: "relative",
    bottom: 60,
    borderRadius: 50,
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
});
