import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Pressable,
} from "react-native";
import "@expo/match-media";
import { useMediaQuery } from "react-responsive";
const HomeScreen = ({ navigation }) => {
  const [quote, setQuote] = useState("Loading...");
  const [author, setAuthor] = useState("");

  const [backgroundBtnStyleCat, setBackgroundButtonStyleCat] = useState(
    styles.backgroundBoxCat
  );
  const [buttonStyleCat, setButtonStyleCat] = useState(
    styles.frontBoxPressedCat
  );
  const [
    backgroundBtnStyleCatShorter,
    setBackgroundButtonStyleCatShorter,
  ] = useState(styles.backgroundBoxCatsSmaller);

  const [buttonStyleCatShorter, setButtonStyleCatShorter] = useState(
    styles.frontBoxPressedCatShorter
  );

  const [backgroundBtnStyleHistory, setBackgroundButtonStyleHistory] = useState(
    styles.backgroundBoxHistory
  );
  const [buttonStyleHistory, setButtonStyleHistory] = useState(
    styles.frontBoxPressedHistory
  );

  const [
    backgroundBtnStyleDadJokes,
    setBackgroundButtonStyleDadJokes,
  ] = useState(styles.backgroundBox);
  const [buttonStyleDadJokes, setButtonStyleDadJokes] = useState(
    styles.frontBoxPressed
  );
  const [
    backgroundBtnStyleInspiration,
    setBackgroundButtonStyleInspiration,
  ] = useState(styles.backgroundBox);
  const [buttonStyleInspiration, setButtonStyleInspiration] = useState(
    styles.frontBoxPressedInspiration
  );

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

  const NavCats = () => {
    navigation.navigate("Advice From Cats");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.title}>Welcome to Happy Space</Text>
      </View>

      {tallerPhone ? (
        <View>
          <View style={styles.buttonsTop}>
            <View style={backgroundBtnStyleCat}></View>
            <Pressable
              style={buttonStyleCat}
              onPressIn={() => {
                setButtonStyleCat(styles.frontBoxPressedCat);
                setBackgroundButtonStyleCat(styles.backgroundBoxPressedCat);
              }}
              onPressOut={() => {
                setButtonStyleCat(styles.frontBoxUnPressedCat);
                setBackgroundButtonStyleCat(styles.backgroundBoxUnPressedCat);
                navigation.navigate("Advice From Cats");
              }}
            >
              <Image
                style={styles.imgTopCat}
                source={require("../../../assets/Cat.png")}
              />
              <Text style={styles.buttonTextTopCat}>Advice From Cats</Text>
            </Pressable>

            <View style={backgroundBtnStyleHistory}></View>
            <Pressable
              style={buttonStyleHistory}
              onPressIn={() => {
                setButtonStyleHistory(styles.frontBoxPressedHistory);
                setBackgroundButtonStyleHistory(
                  styles.backgroundBoxPressedHistory
                );
              }}
              onPressOut={() => {
                setButtonStyleHistory(styles.frontBoxHistoryUnPressed);
                setBackgroundButtonStyleHistory(
                  styles.backgroundBoxUnPressedHistory
                );
                navigation.navigate("This Day in History");
              }}
              easing="ease-in-out"
            >
              <Image
                style={styles.imgTopCaveMan}
                source={require("../../../assets/thisDay.png")}
              />
              <Text style={styles.buttonTextHistory}>This day in History</Text>
            </Pressable>
          </View>

          <View style={styles.quotes}>
            <Text style={styles.quote}>"{quote}"</Text>
            <Text style={styles.author}>-{author}</Text>
          </View>
          <View style={styles.buttonsBottom}>
            <View style={backgroundBtnStyleDadJokes}></View>
            <Pressable
              style={buttonStyleDadJokes}
              onPressIn={() => {
                setButtonStyleDadJokes(styles.frontBoxPressedDadJokes);
                setBackgroundButtonStyleDadJokes(
                  styles.backgroundBoxPressedDadJokes
                );
              }}
              onPressOut={() => {
                setButtonStyleDadJokes(styles.frontBoxUnPressedDadJokes);
                setBackgroundButtonStyleDadJokes(
                  styles.backgroundBoxUnPressedDadJokes
                );
                navigation.navigate("Dad Jokes");
              }}
              easing="ease-in-out"
            >
              <Image
                style={styles.imgDadLarge}
                source={require("../../../assets/DadLawn.jpg")}
              />
              <Text style={styles.buttonTextDadLarge}>Dad Jokes</Text>
            </Pressable>

            <View style={backgroundBtnStyleInspiration}></View>
            <Pressable
              style={buttonStyleInspiration}
              onPressIn={() => {
                setButtonStyleInspiration(styles.frontBoxPressedInspiration);
                setBackgroundButtonStyleInspiration(
                  styles.backgroundBoxPressedInspiration
                );
              }}
              onPressOut={() => {
                setButtonStyleInspiration(styles.frontBoxUnPressedInspiration);
                setBackgroundButtonStyleInspiration(
                  styles.backgroundBoxUnPressedInspiration
                );
                navigation.navigate("Bored");
              }}
            >
              <Image
                style={styles.imgInspirationLarge}
                source={require("../../../assets/icon.png")}
              />
              <Text style={styles.buttonInspirationTextLarge}>Inspiration</Text>
            </Pressable>
          </View>
        </View>
      ) : (
        <View style={styles.shorterContainer}>
          <View style={styles.quotesSmaller}>
            <Text style={styles.quote}>"{quote}"</Text>
            <Text style={styles.author}>-{author}</Text>
          </View>
          <View style={backgroundBtnStyleCatShorter}>
            <Pressable
              style={buttonStyleCatShorter}
              onPressIn={() => {
                setBackgroundButtonStyleCatShorter(
                  styles.backgroundBoxCatsSmallerPressed
                );
                setButtonStyleCatShorter(styles.frontBoxPressedCatShorter);
              }}
              onPressOut={() => {
                setBackgroundButtonStyleCatShorter(
                  styles.backgroundBoxCatsSmaller
                );
                setButtonStyleCatShorter(styles.frontBoxUnPressedCatShorter);
              }}
            >
              <Image
                style={styles.imgTopCatSmaller}
                source={require("../../../assets/Cat.png")}
              />
            </Pressable>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ecf0f1",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
    fontFamily: "Baskerville-SemiBold",
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
  // allButtons: {
  //   position: "absolute",
  //   bottom: "5%",
  // },

  ////////////////////////////////////////////TOP CONTAINER ////////////////////////////////////////////
  buttonsTop: {
    position: "absolute",
    bottom: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: "100%",
  },
  imgTopCat: {
    position: "relative",
    top: 15,
    height: 170,
    width: "100%", //149,
    borderRadius: 20,
  },
  imgTopCaveMan: {
    position: "relative",
    top: 29,
    height: "80%",
    width: "75%",
    borderRadius: 20,
    alignSelf: "center",
  },
  buttonTextTopCat: {
    color: "#312F2F",
    fontWeight: "bold",
    position: "relative",
    bottom: 159,
    right: -50,
    zIndex: 999,
  },
  buttonTextHistory: {
    color: "#312F2F",
    fontWeight: "bold",
    position: "relative",
    bottom: 150,
    zIndex: 999,
    textAlign: "center",
  },

  //////////////////////////////////CAT
  backgroundBoxUnPressedCat: {
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
  frontBoxUnPressedCat: {
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

  /////////////////////////////// History
  backgroundBoxUnPressedHistory: {
    position: "absolute",
    top: 0,
    right: 5,
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

  backgroundBoxPressedHistory: {
    position: "absolute",
    top: 0,
    right: 5,
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
  frontBoxHistoryUnPressed: {
    height: 192,
    width: 195,
    backgroundColor: "#f7f7f7",
    position: "absolute",
    top: 0,
    right: 5,
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
  frontBoxPressedHistory: {
    height: 192,
    width: 190,
    backgroundColor: "#f7f7f7",
    position: "absolute",
    top: 0,
    right: 10,
    marginTop: 5,
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

  ////////////////////////////// SMALLER SCREENS
  buttonsTopShorter: {
    // position: "absolute",
    // top: 220,
    // left: 100,
    // display: "flex",
    // flexDirection: "row",
    // flexWrap: "wrap",
    // justifyContent: "space-around",
    // width: "100%",
    // height: "80%",
  },

  imgTopCatShorter: {
    position: "relative",
    top: 15,
    height: 170,
    width: "100%", //149,
    borderRadius: 20,
  },

  buttonTextTopCatShorter: {
    position: "absolute",
    bottom: 120,
    left: -15,
    fontSize: 10,
  },

  backgroundBoxUnPressedCatShorter: {
    position: "relative",
    top: -100,
    left: -72,
    height: 150,
    width: 150,
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

  // backgroundBoxPressedCatShorter: {
  //   position: "relative",
  //   top: -100,
  //   left: -72,
  //   height: 150,
  //   width: 150,
  //   backgroundColor: "#A4B0F5",
  //   borderRadius: 25,
  //   marginTop: 2,
  //   shadowColor: "#A4B0F5",
  //   shadowOffset: {
  //     width: 10,
  //     height: -3,
  //   },
  //   shadowOpacity: 0.41,
  //   shadowRadius: 9.11,
  //   elevation: 20,
  // },

  // frontBoxPressedCatShorter: {
  //   position: "relative",
  //   top: -70,
  //   left: -70,
  //   height: 80,
  //   width: 90,
  //   backgroundColor: "#f7f7f7",
  //   position: "relative",
  //   marginTop: 5,
  //   // right: 207,
  //   borderRadius: 25,
  //   shadowColor: "#000",
  //   shadowOffset: {
  //     width: 0,
  //     height: 7,
  //   },
  //   shadowOpacity: 0.41,
  //   shadowRadius: 9.11,
  //   elevation: 70,
  //   textAlign: "center",
  //   justifyContent: "center",
  //   backgroundColor: "white",
  // },

  //
  // buttonTextTopShorter: {
  //   color: "#312F2F",
  //   fontWeight: "bold",
  //   position: "relative",
  //   bottom: 125,
  //   zIndex: 999,
  // },
  // imgTopCaveManSmaller: {
  //   position: "relative",
  //   top: 22,
  //   height: "93%",
  //   width: "87%",
  //   borderRadius: 20,
  // },
  // buttonTextHistoryTopShorter: {
  //   color: "#312F2F",
  //   fontWeight: "bold",
  //   position: "relative",
  //   bottom: 128,
  //   zIndex: 999,
  // },

  ////////////////////////////////////////////BOTTOM CONTAINER ////////////////////////////////////////////
  buttonsBottom: {
    position: "relative",
    bottom: "-70%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: "100%",
  },
  // button: {
  //   backgroundColor: "white", //"#f7ad00", //"#fce500", //backgroundColor:"#A4B0F5",
  //   height: 190,
  //   width: 150,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   borderWidth: 0.5,
  //   marginBottom: 20,
  //   borderBottomWidth: 6,
  //   borderRadius: 20,
  //   shadowOffset: { width: 5, height: 5 }, //shadowOffset: { width: 5, height: 5 },
  //   shadowColor: "#312F2F", //'#fce500'
  //   shadowOpacity: 1.0,
  // },

  buttonLeft: {
    // left: -15,
  },

  buttonsBottomShorter: {
    position: "absolute",
    bottom: "2%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: "100%",
  },
  /////////////////////////////DAD JOKES ////////
  backgroundBoxUnPressedDadJokes: {
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

  backgroundBoxPressedDadJokes: {
    height: 200,
    width: 200,
    backgroundColor: "green", //"#A4B0F5",
    borderRadius: 25,
    marginTop: 2,
    shadowColor: "green",
    shadowOffset: {
      width: 10,
      height: 13,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 20,
  },
  frontBoxUnPressedDadJokes: {
    height: 192,
    width: 195,
    backgroundColor: "#ffffff",
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
  frontBoxPressedDadJokes: {
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

  imgDadLarge: {
    position: "relative",
    top: 8,
    left: 25,
    height: 185,
    width: 150,
    borderRadius: 20,
  },

  buttonTextDadLarge: {
    color: "#312F2F",
    fontWeight: "bold",
    position: "relative",
    bottom: 150,
    zIndex: 999,
    left: 30,
  },

  imgDadShort: {
    position: "relative",
    top: 15,
    left: 20,
    height: "90%",
    width: "70%",
    borderRadius: 20,
  },
  buttonDadTextShort: {
    color: "#312F2F",
    fontWeight: "bold",
    position: "relative",
    bottom: 120,
    zIndex: 999,
  },

  ///////// Inspiration /////////
  backgroundBoxUnPressedInspiration: {
    position: "absolute",
    right: 5,
    bottom: 0,
    height: 200,
    width: 180,
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

  backgroundBoxPressedInspiration: {
    position: "absolute",
    right: 5,
    bottom: 0,
    height: 200,
    width: 180,
    backgroundColor: "green", //"#A4B0F5",
    borderRadius: 25,
    marginTop: 2,
    shadowColor: "green",
    shadowOffset: {
      width: 10,
      height: 13,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 20,
  },
  frontBoxUnPressedInspiration: {
    position: "absolute",
    right: 5,
    bottom: "5%",
    height: 192,
    width: 180,
    backgroundColor: "#f6f6f6",
    // position: "relative",
    // right: 0,
    // top: 100,
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
  frontBoxPressedInspiration: {
    position: "absolute",
    right: 10,
    bottom: 5,
    height: 192,
    width: 170,
    backgroundColor: "#f6f6f6",
    // position: "relative",
    // marginTop: 5,
    // right: 207,
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
    // position: "relative",
    // right: 0,
  },

  imgInspirationLarge: {
    position: "relative",
    bottom: -10,
    right: -15,
    height: 185,
    width: 150,
    borderRadius: 20,
  },

  imgInspirationShort: {
    position: "relative",
    top: 10,
    height: "95%",
    width: 149,
    borderRadius: 20,
  },
  buttonInspirationTextLarge: {
    color: "#312F2F",
    fontWeight: "bold",
    position: "relative",
    bottom: 170,
    zIndex: 999,
    left: 50,
  },
  buttonInspirationTextShort: {
    color: "#312F2F",
    fontWeight: "bold",
    position: "relative",
    bottom: 128,
    zIndex: 999,
  },
  /////////////////////////////////////////////////////////////// SMALLER

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
  backgroundBoxCatsSmaller: {
    height: 150,
    width: 150,
    backgroundColor: "grey",
    borderRadius: 25,
    position: "relative",
    top: 350,
    left: -100,
    // transform: [{ skewX: "15deg" } ]
  },
  backgroundBoxCatsSmallerPressed: {
    height: 150,
    width: 150,
    backgroundColor: "purple",
    borderRadius: 25,
    position: "relative",
    top: 350,
    left: -100,
    // transform: [{ skewX: "15deg" } ]
  },
  frontBoxPressedCatShorter: {
    position: "relative",
    top: -2,
    left: 3,
    height: 140,
    width: 145,
    backgroundColor: "#f7f7f7",
    position: "relative",
    marginTop: 5,
    // right: 207,
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
  frontBoxUnPressedCatShorter: {
    position: "relative",
    top: -10,
    left: 5,
    height: 140,
    width: 145,
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
    alignItems: "center",
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 10,
  },
  imgTopCatSmaller: {
    position: "relative",
    top: 15,
    height: "80%",
    width: 129,
    borderRadius: 20,
  },
});

export default HomeScreen;
