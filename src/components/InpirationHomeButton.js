import React, { useState } from "react";
import { Text, View, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function InspirationHomeButton({ screenName }) {
  const [backgroundBtnStyle, setBackgroundButtonStyle] = useState(
    styles.backgroundBoxUnPressed
  );
  const [buttonStyle, setButtonStyle] = useState(styles.frontBoxUnPressed);
  const navigation = useNavigation();

  return (
    <View>
      <View style={backgroundBtnStyle}>
        <Pressable
          style={buttonStyle}
          onPressIn={() => {
            setButtonStyle(styles.frontBoxPressed);
            setBackgroundButtonStyle(styles.backgroundBoxPressed);
          }}
          onPressOut={() => {
            setButtonStyle(styles.frontBoxUnPressed);
            setBackgroundButtonStyle(styles.backgroundBoxUnPressed);
            navigation.navigate(screenName);
          }}
        >
          <Image
            style={styles.imgTop}
            source={require("../../assets/icon.png")}
          />
          <Text style={styles.text}>Inspiration</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imgTop: {
    height: 120,
    width: 100,
    position: "relative",
    top: 15,
    left: 20,
  },
  text: {
    position: "relative",
    bottom: 115,
    left: 40,
    fontSize: 12,
  },
  backgroundBoxUnPressed: {
    height: 150,
    width: 150,
    backgroundColor: "grey",
    borderRadius: 25,
  },
  backgroundBoxPressed: {
    height: 150,
    width: 150,
    backgroundColor: "yellow",
    borderRadius: 25,
  },
  frontBoxUnPressed: {
    height: 145,
    width: 150,
    backgroundColor: "#f5f5f5",
    position: "relative",
    top: -4,
    right: -2,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 27,
    },
    textAlign: "center",
    justifyContent: "center",
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 10,
    borderWidth: 0.25,
  },
  frontBoxPressed: {
    height: 140,
    width: 140,
    backgroundColor: "#f5f5f5",
    position: "relative",
    top: 4,
    right: -5,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 70,
    textAlign: "center",
    justifyContent: "center",
  },
});
