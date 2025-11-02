import React from "react";
import { View, Text, Pressable, StyleSheet, Linking } from "react-native";

export default function AboutPopup() {
  return (
    <View style={styles.container}>
      <Text style={styles.aboutMe}>Created by: Robert Balonek</Text>
      <Text style={styles.aboutMe}></Text>
      <Text style={styles.aboutMe}>I created this in 2020 as my first App Store App using APIs and React Native.</Text>
      

      <View style={styles.button}>
        <Pressable>
          <Text
            style={styles.buttonText}
            onPress={() => {
              Linking.openURL("https://www.robertbalonek.dev/?utm_source=happy_space_app");
            }}
          >
            View My Portfolio
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: "100%",
    backgroundColor: "white",
    textAlign: "center",
    justifyContent: "center",
  },
  button: {
    position: "relative",
    top: 30,
    height: 50,
    width: 200,
    backgroundColor: "red",
    justifyContent: "center",
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  aboutMe: {
    textAlign: "center",
  },
});
