import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Pressable,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
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

  const [backgroundBtnStyleHistory, setBackgroundButtonStyleHistory] = useState(
    styles.backgroundBoxHistory
  );
  const [buttonStyleHistory, setButtonStyleHistory] = useState(
    styles.frontBoxPressedHistory
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
        <View style={styles.buttonsTop}>
          <View style={backgroundBtnStyleCat}></View>
          <Pressable
            style={buttonStyleCat}
            onPressIn={() => {
              setButtonStyleCat(styles.frontBoxPressedCat);
              setBackgroundButtonStyleCat(styles.backgroundBoxPressedCat);
            }}
            onPressOut={() => {
              setButtonStyleCat(styles.frontBoxCat);
              setBackgroundButtonStyleCat(styles.backgroundBoxCat);
              // NavCats();
            }}
            easing="ease-in-out"
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
              setButtonStyleHistory(styles.frontBoxHistory);
              setBackgroundButtonStyleHistory(styles.backgroundBoxHistory);
              // NavCats();
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
      ) : (
        <View style={styles.buttonsTopShorter}>
          <TouchableOpacity
            style={styles.buttonShorter}
            title="Advice from Cats"
            onPress={() => navigation.navigate("Advice From Cats")}
          >
            <Image
              style={styles.imgTopCatSmaller}
              source={require("../../../assets/Cat.png")}
            />
            <Text style={styles.buttonTextTopShorter}>Advice From Cats</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonShorter}
            title="This Day In History"
            onPress={() => navigation.navigate("This Day in History")}
          >
            <Image
              style={styles.imgTopCaveManSmaller}
              source={require("../../../assets/thisDay.png")}
            />
            <Text style={styles.buttonTextHistoryTopShorter}>
              This Day In History
            </Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.quotes}>
        <Text style={styles.quote}>"{quote}"</Text>
        <Text style={styles.author}>-{author}</Text>
      </View>

      {tallerPhone ? (
        <View style={styles.buttonsBottom}>
          <TouchableOpacity
            style={styles.button}
            title="See Dad Jokes!"
            onPress={() => navigation.navigate("Dad Jokes")}
          >
            <Text style={[styles.buttonText, styles.buttonLeft]}>
              Dad Jokes
            </Text>
            <Image
              style={styles.imgDadLarge}
              source={require("../../../assets/DadLawn.jpg")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            title="Bored"
            onPress={() => navigation.navigate("Bored")}
          >
            <Text style={styles.buttonText}>Inspiration</Text>
            <Image
              style={styles.imgInspirationLarge}
              source={require("../../../assets/icon.png")}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.buttonsBottomShorter}>
          <TouchableOpacity
            style={styles.buttonShorter}
            title="See Dad Jokes!"
            onPress={() => navigation.navigate("Dad Jokes")}
          >
            <Image
              style={styles.imgDadShort}
              source={require("../../../assets/DadLawn.jpg")}
            />
            <Text style={styles.buttonDadTextShort}>Dad Jokes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonShorter}
            title="Bored"
            onPress={() => navigation.navigate("Bored")}
          >
            <Image
              style={styles.imgInspirationShort}
              source={require("../../../assets/icon.png")}
            />
            <Text style={styles.buttonInspirationTextShort}>Inspiration</Text>
          </TouchableOpacity>
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
    position: "relative",
    top: "2%",
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
  buttonsTop: {
    position: "absolute",
    top: "18%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: "100%",
  },
  buttonsBottom: {
    position: "absolute",
    bottom: "6%",
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
  buttonText: {
    color: "#312F2F",
    fontWeight: "bold",
    position: "relative",
    top: 15,
    zIndex: 999,
  },
  buttonLeft: {
    left: -15,
  },
  buttonsTopShorter: {
    position: "absolute",
    top: 120,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: "100%",
  },
  buttonShorter: {
    backgroundColor: "white",
    height: 150,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    marginBottom: 20,
    borderBottomWidth: 4,
    borderRadius: 20,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "#312F2F", //'#fce500'
    shadowOpacity: 1.0,
  },
  buttonTextShorter: {
    color: "#312F2F",
    fontWeight: "bold",
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
  imgInspirationLarge: {
    position: "relative",
    top: -8,
    height: 185,
    width: 150,
    borderRadius: 20,
  },
  imgDadLarge: {
    position: "relative",
    top: -8,
    height: 185,
    width: 150,
    borderRadius: 20,
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
  imgTopCatSmaller: {
    position: "relative",
    top: 15,
    height: "90%",
    width: 149,
    borderRadius: 20,
  },
  buttonTextTopShorter: {
    color: "#312F2F",
    fontWeight: "bold",
    position: "relative",
    bottom: 125,
    zIndex: 999,
  },
  imgTopCaveManSmaller: {
    position: "relative",
    top: 22,
    height: "93%",
    width: "87%",
    borderRadius: 20,
  },
  buttonTextHistoryTopShorter: {
    color: "#312F2F",
    fontWeight: "bold",
    position: "relative",
    bottom: 128,
    zIndex: 999,
  },
  imgInspirationShort: {
    position: "relative",
    top: 10,
    height: "95%",
    width: 149,
    borderRadius: 20,
  },
  buttonInspirationTextShort: {
    color: "#312F2F",
    fontWeight: "bold",
    position: "relative",
    bottom: 128,
    zIndex: 999,
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
  buttonUnpressed: {
    backgroundColor: "white", //"#f7ad00", //"#fce500", //backgroundColor:"#A4B0F5",
    height: 200,
    width: 195,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    marginBottom: 20,
    borderBottomWidth: 6,
    borderRadius: 20,
    shadowOffset: { width: 5, height: 5 }, //shadowOffset: { width: 5, height: 5 },
    shadowColor: "#312F2F", //'#fce500'
    shadowOpacity: 1.0,
  },
  buttonpressed: {
    transform: [{ scale: 0.95 }],
  },
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

  backgroundBoxHistory: {
    position: "absolute",
    top: 0,
    right: 0,
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
    right: 0,
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
  frontBoxHistory: {
    height: 192,
    width: 195,
    backgroundColor: "#f7f7f7",
    // position: "relative",
    // right: 207.9,
    position: "absolute",
    top: 0,
    right: 0,
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
    // position: "relative",
    position: "absolute",
    top: 0,
    right: 5,
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
});

export default HomeScreen;
