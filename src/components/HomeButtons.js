import React, { useState } from "react";
import { Text, View, StyleSheet, Pressable, Animated } from "react-native";

export default function HomeButtons() {
  return (
    <View style={styles.container}>
      <View intensity={1} style={styles.backroundBox}></View>
      <Pressable
        onPressIn={() => {
          setStyle(styles.frontBoxPressed);
        }}
        onPressOut={() => {
          setStyle(styles.frontBox);
        }}
        easing="ease-in-out"
        style={style}
      >
        <Text style={styles.text}>Click</Text>
      </Pressable>

      <Animated.View
        animation={adviceAnimation}
        onPress={() => {
          setAdviceAnimation("pulse");
        }}
        style={styles.animatiedButton}
      >
        <Text>Bitton</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
  },
  backroundBox: {
    height: 200,
    width: 200,
    backgroundColor: "grey",
    borderRadius: 25,
    // transform: [{ skewX: "15deg" } ]
  },
  frontBox: {
    height: 190,
    width: 195,
    backgroundColor: "white",
    position: "relative",
    top: -210,
    right: -3,
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
    // transform: [{ skewX: "15deg" } ]
  },
  frontBoxPressed: {
    height: 190,
    width: 190,
    backgroundColor: "white",
    position: "relative",
    top: -195,
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
    //  transform: [{ scale: .95 },{ skewX: "15deg" } ]
    // transform: [{ scale: .95 },{ skewX: "5deg" } ]
  },
  // text: {
  //   position: "flex",
  //   textAlign: "center",
  //   justifyContent: "center",
  // },
  animatiedButton: {
    height: 50,
    width: 200,
    backgroundColor: "blue",
  },
});

// export default function HomeButtons(props) {
//   return (
//     <View>
//       <View style={props.backgroundBtnStyle}></View>
//       <Pressable
//         style={props.buttonStyle}
//         onPressIn={() => {
//           props.setButtonStylePressIn({ props, buttonStylePressIn });
//           props.SetBackgroundPressIn({ props, backgroundPressIn });
//         }}
//         onPressOut={() => {
//           props.setButtonStylePressOut({ props, buttonStylePressOut });
//           props.setBackgroundButtonStylePressOut({
//             props,
//             backgroundButtonStylePressOut,
//           });
//         }}
//       >
//         <Image style={props.styles.imgTopCat} source={props.ImgSource} />
//         <Text style={props.TextStyle}>{props.Text}</Text>
//       </Pressable>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   backgroundBoxCat: {
//     height: 200,
//     width: 200,
//     backgroundColor: "grey", //"#A4B0F5", //
//     borderRadius: 25,
//     marginTop: 2,
//     shadowColor: "#A4B0F5",
//     shadowOffset: {
//       width: 10,
//       height: -3,
//     },
//     shadowOpacity: 0.41,
//     shadowRadius: 9.11,
//     elevation: 20,
//   },

//   backgroundBoxPressedCat: {
//     height: 200,
//     width: 200,
//     backgroundColor: "#A4B0F5",
//     borderRadius: 25,
//     marginTop: 2,
//     shadowColor: "#A4B0F5",
//     shadowOffset: {
//       width: 10,
//       height: -3,
//     },
//     shadowOpacity: 0.41,
//     shadowRadius: 9.11,
//     elevation: 20,
//   },
//   frontBoxCat: {
//     height: 192,
//     width: 195,
//     backgroundColor: "#f7f7f7",
//     position: "relative",
//     right: 207.9,
//     borderRadius: 25,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 10,
//       height: 27,
//     },
//     textAlign: "center",
//     justifyContent: "center",
//     shadowOpacity: 0.41,
//     shadowRadius: 9.11,
//     elevation: 10,
//   },
//   frontBoxPressedCat: {
//     height: 192,
//     width: 190,
//     backgroundColor: "#f7f7f7",
//     position: "relative",
//     marginTop: 5,
//     right: 207,
//     borderRadius: 25,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 7,
//     },
//     shadowOpacity: 0.41,
//     shadowRadius: 9.11,
//     elevation: 70,
//     textAlign: "center",
//     justifyContent: "center",
//     backgroundColor: "white",
//   },
// });
