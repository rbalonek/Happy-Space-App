import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  Linking,
} from "react-native";

const { width, height } = Dimensions.get("window");

const NewsCard = ({ item }) => {
  // console.log(item.url);
  return (
    <View style={styles.cardView}>
      <Text
        onPress={() => {
          Linking.openURL(`${item.url}`); //"https://aboutreact.com"
        }}
        style={styles.title}
      >
        {item.title}
      </Text>
      <Text style={styles.author}>{item.author}</Text>
      <Image style={styles.image} source={{ uri: item.urlToImage }} />
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    backgroundColor: "white",
    margin: width * 0.02,
    borderRadius: width * 0.05,
    shadowColor: "#000",
    shadowOffset: { width: 0.5, height: 1 },
    shadowOpacity: 0.6,
    shadowRadius: 3,
  },
  title: {
    marginHorizontal: width * 0.05,
    margin: width * 0.03,
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  author: {
    marginVertical: height * 0.0,
    marginHorizontal: width * 0.05,
    fontSize: 15,
    color: "gray",
  },
  image: {
    // width: width,
    height: height / 6,
    marginLeft: width * 0.05,
    marginRight: width * 0.05,
    marginVertical: height * 0.02,
  },

  description: {
    // width: width,
    marginVertical: width * 0.05,
    marginHorizontal: width * 0.02,
    // margin: width * 0.05,
    color: "gray",
    fontSize: 18,
  },
});

export default NewsCard;
