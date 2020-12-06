import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import * as Animatable from "react-native-animatable";
import "@expo/match-media";

export default function Bored() {
  let [idea, setIdea] = useState("");
  const [animation, setAnimation] = useState("flipInY");

  const fetchApiCallRecreational = () => {
    fetch("https://www.boredapi.com/api/activity?type=recreational", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setIdea(response.activity);
        setAnimation("lightSpeedOut");
        setAnimation("flipInY");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const fetchApiCallSocial = () => {
    fetch("http://www.boredapi.com/api/activity?type=social", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setIdea(response.activity);
        setAnimation("lightSpeedOut");
        setAnimation("flipInY");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchApiCallEducational = () => {
    fetch("http://www.boredapi.com/api/activity?type=education", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setIdea(response.activity);
        setAnimation("lightSpeedOut");
        setAnimation("flipInY");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchApiCallRelaxation = () => {
    fetch("http://www.boredapi.com/api/activity?type=relaxation", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setIdea(response.activity);
        setAnimation("lightSpeedOut");
        setAnimation("flipInY");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require("../../assets/aqua-d9b59c89.png")}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={fetchApiCallRecreational}>
          <Animatable.View style={styles.button} animation="fadeIn">
            <Text style={styles.buttonText}>Recreational</Text>
          </Animatable.View>
        </TouchableOpacity>
        <TouchableOpacity onPress={fetchApiCallSocial}>
          <Animatable.View style={styles.button} animation="fadeIn">
            <Text style={styles.buttonText}> Social</Text>
          </Animatable.View>
        </TouchableOpacity>
        <TouchableOpacity onPress={fetchApiCallEducational}>
          <Animatable.View style={styles.button} animation="fadeIn">
            <Text style={styles.buttonText}> Educational</Text>
          </Animatable.View>
        </TouchableOpacity>
        <TouchableOpacity onPress={fetchApiCallRelaxation}>
          <Animatable.View style={styles.button} animation="fadeIn">
            <Text style={styles.buttonText}> Relaxation</Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />

      {idea ? (
        <Animatable.View style={styles.ideaContainer} animation={animation}>
          <Text style={styles.idea}>"{idea}"</Text>
        </Animatable.View>
      ) : (
        <View></View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4787e2",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    shadowColor: "#000",
    shadowOffset: { width: 0.5, height: 1 },
    shadowOpacity: 0.7,
    shadowRadius: 8,
    height: 150,
    alignItems: "center",
  },
  button: {
    padding: 20,
    paddingLeft: 10,
    paddingRight: 10,
    marginVertical: 25,
    backgroundColor: "green",
    width: 90,
    borderBottomWidth: 4,
    borderRadius: 5,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "black",
    shadowOpacity: 1.0,
  },
  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 11,
  },
  ideaContainer: {
    alignItems: "center",
    justifyContent: "center",
    zIndex: 999,
    backgroundColor: "green",
    position: "relative",
    bottom: "100%",
    padding: 20,
    borderRadius: 5,
    height: "40%",
    width: "80%",
    borderBottomWidth: 4,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "black",
    shadowOpacity: 1.0,
  },
  idea: {
    zIndex: 999,
    fontSize: 25,
    color: "white",
    padding: 10,
  },
  img: {
    zIndex: -1,
    height: "150%",
    width: "100%",
  },
});
