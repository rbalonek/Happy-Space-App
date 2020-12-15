import React from "react";
import { View, Text, Pressable, StyleSheet, Linking } from "react-native";

export default function AboutPopup() {
  return (
    <View style={styles.container}>
      <Text style={styles.aboutMe}>Created by:</Text>
      <Text style={styles.aboutMe}>Robert Balonek</Text>

      <View style={styles.button}>
        <Pressable>
          <Text
            style={styles.buttonText}
            onPress={() => {
              Linking.openURL("https://www.robertbalonek.dev/");
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
