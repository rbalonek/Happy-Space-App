import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function HomeButtons(props) {
  return (
    <View>
      <View style={props.backgroundBtnStyle}></View>
      <Pressable
        style={props.buttonStyle}
        onPressIn={() => {
          props.setButtonStyleCat(styles.frontBoxPressedCat);
          props.setBackgroundButtonStyleCat(backgroundBoxPressedCat);
        }}
        onPressOut={() => {
          props.setButtonStyleCat(styles.frontBoxCat);
          props.setBackgroundButtonStyleCat(styles.backgroundBoxCat);
          props.Nav;
        }}
        easing="ease-in-out"
      >
        <Image style={props.styles.imgTopCat} source={props.ImgSource} />
        <Text style={props.TextStyle}>{props.Text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundBoxCat: {
    height: 200,
    width: 200,
    backgroundColor: "grey", //"#A4B0F5", //
    borderRadius: 25,
    marginTop: 2,
    shadowColor: "#A4B0F5",
    shadowOffset: {
      width: 10,
      height: -3,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 20,
  },

  backgroundBoxPressedCat: {
    height: 200,
    width: 200,
    backgroundColor: "#A4B0F5",
    borderRadius: 25,
    marginTop: 2,
    shadowColor: "#A4B0F5",
    shadowOffset: {
      width: 10,
      height: -3,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 20,
  },
  frontBoxCat: {
    height: 192,
    width: 195,
    backgroundColor: "#f7f7f7",
    position: "relative",
    right: 207.9,
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
  },
  frontBoxPressedCat: {
    height: 192,
    width: 190,
    backgroundColor: "#f7f7f7",
    position: "relative",
    marginTop: 5,
    right: 207,
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
    backgroundColor: "white",
  },
});
