import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import * as Animatable from "react-native-animatable";
import "@expo/match-media";
import { useMediaQuery } from "react-responsive";

export default function AdviceFromCats() {
  const [decision, setDecision] = useState("");
  const [advice, setAdvice] = useState("");
  const [kitten, setKitten] = useState(null);
  const [adviceAnimation, setAdviceAnimation] = useState("flipInY");
  const [kittenAnimation, setKittenAnimation] = useState("flipInY");
  const [yesNoAnimation, setYesNoAnimation] = useState("bounceInUp");

  const tallerPhone = useMediaQuery({ minWidth: 410 });
  const shorterPhone = useMediaQuery({ maxWidth: 410 });

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
        setYesNoAnimation("bounceInUp");
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
        setAdviceAnimation("fadeInUpBig");
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
        setKittenAnimation("flipInY");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const buttonPress = () => {
    setKittenAnimation("fadeOut");
    setAdviceAnimation("fadeOut");
    setYesNoAnimation("fadeOut");
    fetchKitten();
    fetchAdvice();
  };

  const yesNoButton = () => {
    setKittenAnimation("fadeOut");
    setAdviceAnimation("fadeOut");
    setYesNoAnimation("fadeOut");
    fetchKitten();
    fetchDecisions();
  };

  return (
    <View style={styles.container}>
      <Animatable.View
        style={styles.kittenContainer}
        animation={kittenAnimation}
        duration={4000}
      >
        <Image
          style={styles.kittenImg}
          source={{
            uri: `${kitten}`,
          }}
        />
      </Animatable.View>

      {decision ? (
        <View>
          {tallerPhone && (
            <Animatable.View
              duration={3000}
              style={styles.yesNoContainer}
              animation={yesNoAnimation}
            >
              <Animatable.Text style={styles.yesNo}>{decision}</Animatable.Text>
              <Image
                style={styles.yesNoWordBubble}
                source={require("../../assets/wordBubble.png")}
              />
            </Animatable.View>
          )}
          {shorterPhone && (
            <Animatable.View
              duration={2000}
              style={styles.yesNoContainerShorter}
              animation={yesNoAnimation}
            >
              <Animatable.Text style={styles.yesNoShorter}>
                {decision}
              </Animatable.Text>
              <Image
                style={styles.yesNoWordBubbleShorter}
                source={require("../../assets/wordBubble.png")}
              />
            </Animatable.View>
          )}
        </View>
      ) : (
        <View>
          <Text style={styles.AdviceNegSpace}></Text>
        </View>
      )}

      {advice ? (
        <View>
          {tallerPhone && (
            <Animatable.View
              duration={2000}
              style={styles.adviceContainer}
              animation={adviceAnimation}
            >
              <Text style={styles.adviceText}>{advice}</Text>
              <Image
                style={styles.adviceWordBubble}
                source={require("../../assets/wordBubble.png")}
              />
            </Animatable.View>
          )}
          {shorterPhone && (
            <Animatable.View
              duration={2000}
              style={styles.adviceContainerShorter}
              animation={adviceAnimation}
            >
              <Text style={styles.adviceTextShorter}>{advice}</Text>
              <Image
                style={styles.adviceWordBubbleShorter}
                source={require("../../assets/wordBubble.png")}
              />
            </Animatable.View>
          )}
        </View>
      ) : (
        <View>
          <Text style={styles.decisionNegSpace}></Text>
        </View>
      )}

      <Animatable.View style={styles.buttonContainer} animation="zoomIn">
        <TouchableOpacity style={styles.button} onPress={buttonPress}>
          <Text style={styles.buttonText}>Advice</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={yesNoButton}>
          <Text style={styles.buttonText}>Yes or No?</Text>
        </TouchableOpacity>
      </Animatable.View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#cc3336",
  },
  kittenContainer: {
    position: "relative",
    top: "10%",
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "black",
    shadowOpacity: 1,
    zIndex: 999,
  },
  kittenImg: {
    height: 200,
    width: 200,
    position: "relative",
    bottom: "0%",
    borderRadius: 50,
    zIndex: 999,
  },
  decisionNegSpace: {
    height: 300,
    position: "relative",
  },
  AdviceNegSpace: {
    height: 320,
    position: "relative",
  },

  yesNoContainer: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 999,
    bottom: "-15%",
  },

  yesNoWordBubble: {
    position: "relative",
    bottom: "30%",
    top: 0,
    transform: [{ scaleY: -1 }],
  },

  yesNo: {
    fontSize: 60,
    position: "relative",
    bottom: "-55%",
    zIndex: 999,
  },

  adviceContainer: {
    position: "relative",
    top: "0%",
    width: "65%",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 998,
  },
  adviceWordBubble: {
    transform: [{ scaleY: -1 }],
    position: "relative",
    bottom: "90%",
    zIndex: -1,
  },
  adviceText: {
    color: "black",
    fontSize: 20,
    position: "relative",
    top: "-33%",
    right: "-0%",
  },

  buttonContainer: {
    position: "absolute",
    bottom: "5%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    zIndex: 999,
  },
  button: {
    position: "relative",
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: "#0645AD",
    borderBottomWidth: 4,
    borderRadius: 5,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "black",
    shadowOpacity: 1.0,
    zIndex: 999,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 20,
    width: "100%",
  },
  yesNoContainerShorter: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 999,
    bottom: "-15%",
  },
  yesNoWordBubbleShorter: {
    position: "relative",
    bottom: "-10%",
    transform: [{ scaleY: -1 }],
  },
  yesNoShorter: {
    fontSize: 60,
    position: "relative",
    bottom: "-65%",
    zIndex: 999,
  },
  adviceContainerShorter: {
    position: "relative",
    top: "0%",
    width: "75%",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 998,
  },
  adviceTextShorter: {
    color: "black",
    fontSize: 20,
    position: "relative",
    top: "8%",
    right: "-0%",
  },
  adviceWordBubbleShorter: {
    transform: [{ scaleY: -1 }],
    position: "relative",
    bottom: "50%",
    zIndex: -1,
  },
});
