import React, { useState } from "react";
import { Text, View, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ThisDayHomeButton({ screenName }) {
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
            style={styles.imgTopCaveMan}
            source={require("../../assets/thisDay.png")}
          />
          <Text style={styles.text}>This day in History</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imgTopCaveMan: {
    height: 120,
    width: 110,
    position: "relative",
    top: 20,
    left: 20,
  },
  text: {
    position: "relative",
    bottom: 115,
    left: 15,
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
    backgroundColor: "purple",
    borderRadius: 25,
  },
  frontBoxUnPressed: {
    height: 145,
    width: 150,
    backgroundColor: "white",
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
    // borderWidth: 0.25,
  },
  frontBoxPressed: {
    height: 140,
    width: 140,
    backgroundColor: "white",
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
