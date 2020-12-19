import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, Pressable } from "react-native";
import "@expo/match-media";
import { useMediaQuery } from "react-responsive";
import ThisDayHomeButton from "../../components/ThisDayHomeButton";
import CatsHomeButton from "../../components/CatsHomeButton";
import DadHomeButton from "../../components/DadHomeButton";
import InspirationHomeButton from "../../components/InpirationHomeButton";
import AboutButton from "../../components/AboutButton";

const HomeScreen = () => {
  const [quote, setQuote] = useState("Loading...");
  const [author, setAuthor] = useState("");

  const tallerPhone = useMediaQuery({ minWidth: 410 });

  useEffect(() => {
    fetchApiCall();
  }, []);

  const fetchApiCall = () => {
    fetch("https://api.quotable.io/random", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setQuote(response.content);
        setAuthor(response.author);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.title}>Welcome to Happy Space</Text>
      </View>

      {tallerPhone ? (
        <View style={styles.aboutButtonTaller}>
          <Pressable>
            <AboutButton />
          </Pressable>
        </View>
      ) : (
        <View style={[styles.aboutButtonSmaller]}>
          <AboutButton />
        </View>
      )}

      {tallerPhone ? (
        <View style={styles.widerContainer}>
          <View style={styles.quotesLarger}>
            <Text style={styles.quote}>"{quote}"</Text>
            <Text style={styles.author}>-{author}</Text>
          </View>

          <View style={styles.catsSmallerContainer}>
            <CatsHomeButton screenName={"Advice From Cats"} />
          </View>

          <View style={styles.historyShorterContainer}>
            <ThisDayHomeButton screenName={"This Day in History"} />
          </View>
          <View style={styles.DadShorterContainer}>
            <DadHomeButton screenName={"Dad Jokes"} />
          </View>
          <View style={styles.InspirationShorterContainer}>
            <InspirationHomeButton screenName={"Bored"} />
          </View>
        </View>
      ) : (
        <View style={styles.shorterContainer}>
          <View style={styles.quotesSmaller}>
            <Text style={styles.quote}>"{quote}"</Text>
            <Text style={styles.author}>-{author}</Text>
          </View>

          <View style={styles.catsSmallerContainer}>
            <CatsHomeButton screenName={"Advice From Cats"} />
          </View>

          <View style={styles.historyShorterContainer}>
            <ThisDayHomeButton screenName={"This Day in History"} />
          </View>
          <View style={styles.DadShorterContainer}>
            <DadHomeButton screenName={"Dad Jokes"} />
          </View>
          <View style={styles.InspirationShorterContainer}>
            <InspirationHomeButton screenName={"Bored"} />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#A6D9F7",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  aboutButtonTaller: {
    position: "absolute",
    bottom: "5%",
    zIndex: 999,
  },
  aboutButtonSmaller: {
    position: "absolute",
    bottom: "5%",
    zIndex: 999,
  },
  titleView: {
    backgroundColor: "#312F2F",
    width: "100%",
    height: 100,
    position: "absolute",
    top: 0,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0.5, height: 1 },
    shadowOpacity: 1.9,
    shadowRadius: 8,
  },
  title: {
    color: "#A6D9F7",
    fontSize: 25,
    // fontFamily: "Baskerville-SemiBold",
    position: "relative",
    top: "20%",
  },
  quotes: {
    position: "absolute",
    top: "35%",
    paddingLeft: 10,
    paddingRight: 10,
  },
  quote: {
    fontSize: 20,
  },
  author: {
    color: "grey",
  },

  shorterContainer: {
    flex: 1,
    alignItems: "center",
  },
  quotesSmaller: {
    position: "absolute",
    top: "15%",
    paddingLeft: 10,
    paddingRight: 10,
  },

  catsSmallerContainer: {
    position: "relative",
    top: 290,
    right: 100,
  },
  historyShorterContainer: {
    position: "relative",
    top: 140,
    right: -100,
  },
  DadShorterContainer: {
    position: "relative",
    top: 180,
    right: 100,
  },
  InspirationShorterContainer: {
    position: "relative",
    top: 30,
    right: -100,
  },
  widerContainer: {
    flex: 1,
    alignItems: "center",
    position: "relative",
    top: 50,
  },
  quotesLarger: {
    position: "absolute",
    top: "10%",
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default HomeScreen;
