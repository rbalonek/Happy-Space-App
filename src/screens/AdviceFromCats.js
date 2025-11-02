import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import * as Animatable from "react-native-animatable";
import { useMediaQuery } from "react-responsive";

export default function AdviceFromCats() {
  const [decision, setDecision] = useState("");
  const [advice, setAdvice] = useState("");
  // Set initial cat image for splash screen
  const [kitten, setKitten] = useState("https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg");
  const [adviceAnimation, setAdviceAnimation] = useState("fadeIn");
  const [kittenAnimation, setKittenAnimation] = useState("fadeIn");
  const [yesNoAnimation, setYesNoAnimation] = useState("fadeIn");

  const tallerPhone = useMediaQuery({ minWidth: 410 });

  useEffect(() => {
    // console.log("Decision state changed:", decision);
  }, [decision]);

  useEffect(() => {
    // console.log("Advice state changed:", advice);
  }, [advice]);

  // Fallback cat images in case API fails
  const fallbackCatImages = [
    "https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg",
    "https://cdn2.thecatapi.com/images/MTY3ODIyMQ.jpg",
    "https://cdn2.thecatapi.com/images/eac.jpg",
    "https://cdn2.thecatapi.com/images/d08.jpg",
    "https://cdn2.thecatapi.com/images/MjA0ODM5MQ.jpg",
    "https://cdn2.thecatapi.com/images/MTk1ODQyNw.jpg",
    "https://cdn2.thecatapi.com/images/9j5.jpg",
    "https://cdn2.thecatapi.com/images/bi.jpg"
  ];

  // Fallback advice in case API fails
  const fallbackAdvice = [
    "Take a break and stretch your legs.",
    "Drink a glass of water to refresh yourself.",
    "Write down three things you're grateful for today.",
    "Take five deep breaths and relax.",
    "Call someone you care about.",
    "Do something that makes you smile.",
    "Learn something new today.",
    "Be kind to yourself and others.",
    "Focus on what you can control.",
    "Celebrate your small wins."
  ];

  const generateYesNo = () => {
    // Pure JavaScript random Yes/No/Maybe generator
    const options = ["yes", "no", "maybe"];
    const randomChoice = options[Math.floor(Math.random() * options.length)];
    // console.log("Generated Yes/No decision:", randomChoice);
    setDecision(randomChoice);
    setYesNoAnimation("bounceIn");
  };

  const getRandomFallbackAdvice = () => {
    const randomAdvice = fallbackAdvice[Math.floor(Math.random() * fallbackAdvice.length)];
    // console.log("Setting fallback advice:", randomAdvice);
    setAdvice(randomAdvice);
    setAdviceAnimation("fadeInUp");
  };

  const fetchAdvice = () => {
    // console.log("Fetching advice from API...");
    fetch("https://api.adviceslip.com/advice", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response && response.slip && response.slip.advice) {
          // console.log("Got advice from API:", response.slip.advice);
          setAdvice(response.slip.advice);
          setAdviceAnimation("fadeInUp");
        } else {
          // console.log("API response invalid, using fallback");
          getRandomFallbackAdvice();
        }
      })
      .catch((err) => {
        // console.log("API error:", err);
        getRandomFallbackAdvice();
      });
  };

  const getRandomFallbackCat = () => {
    const randomCat = fallbackCatImages[Math.floor(Math.random() * fallbackCatImages.length)];
    setKitten(randomCat);
    setKittenAnimation("zoomIn");
  };

  const fetchKitten = () => {
    fetch("https://api.thecatapi.com/v1/images/search", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response && response[0] && response[0].url) {
          setKitten(response[0].url);
          setKittenAnimation("zoomIn");
        } else {
          getRandomFallbackCat();
        }
      })
      .catch((err) => {
        // console.log(err);
        getRandomFallbackCat();
      });
  };

  const buttonPress = () => {
    // console.log("Advice button pressed");
    // Clear previous content
    setDecision("");
    fetchKitten();
    fetchAdvice();
  };

  const yesNoButton = () => {
    // console.log("Yes/No button pressed");
    // Clear previous content
    setAdvice("");
    fetchKitten();
    generateYesNo();
  };

  return (
    <View style={styles.container}>
      <Animatable.View
        style={styles.kittenContainer}
        animation={kittenAnimation}
        duration={600}
        easing="ease-out"
        key={kitten}
      >
        <Image
          style={styles.kittenImg}
          source={{
            uri: `${kitten}`,
          }}
          resizeMode="cover"
        />
      </Animatable.View>

      {decision ? (
        <Animatable.View
          duration={700}
          easing="ease-out-back"
          style={tallerPhone ? styles.yesNoContainer : styles.yesNoContainerShorter}
          animation={yesNoAnimation}
          key={decision}
        >
          <Animatable.Text
            style={tallerPhone ? styles.yesNo : styles.yesNoShorter}
            animation="pulse"
            iterationCount={2}
            duration={500}
          >
            {decision}
          </Animatable.Text>
          <Image
            style={tallerPhone ? styles.yesNoWordBubble : styles.yesNoWordBubbleShorter}
            source={require("../../assets/wordBubble.png")}
          />
        </Animatable.View>
      ) : (
        <View>
          <Text style={styles.AdviceNegSpace}></Text>
        </View>
      )}

      {advice ? (
        <Animatable.View
          duration={800}
          easing="ease-out"
          style={tallerPhone ? styles.adviceContainer : styles.adviceContainerShorter}
          animation={adviceAnimation}
          key={advice}
        >
          <Text style={tallerPhone ? styles.adviceText : styles.adviceTextShorter}>
            {advice}
          </Text>
          <Image
            style={tallerPhone ? styles.adviceWordBubble : styles.adviceWordBubbleShorter}
            source={require("../../assets/wordBubble.png")}
          />
        </Animatable.View>
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
    top: "-10%",
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
    paddingHorizontal: 20,
    paddingVertical: 10,
    textAlign: "center",
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
    bottom: "40%",
    transform: [{ scaleY: -1 }],
  },
  yesNoShorter: {
    fontSize: 60,
    position: "relative",
    bottom: "-20%",
    zIndex: 999,
  },
  adviceContainerShorter: {
    position: "relative",
    top: "-10%",
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
    textAlign: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  adviceWordBubbleShorter: {
    transform: [{ scaleY: -1 }],
    position: "relative",
    bottom: "50%",
    zIndex: -1,
  },
});
