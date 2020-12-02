import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Button, FlatList } from "react-native";
import NewsCard from "../components/NewsCard";
import newAPI from "../../apis/News";

const News = ({ navigation }) => {
  // const [news, setNews] = useState([])
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNewsFromAPI();
    // newsResponse();
  }, []);

  // const newsResponse = async () => {
  //   const response = await newAPI.get(
  //     "top-headlines?country=us&apiKey=2ccfaad1ef4c4946a0c23d70300c840e"
  //   );
  //   console.log(response.data);
  // };

  function getNewsFromAPI() {
    newAPI
      .get("top-headlines?country=us&apiKey=2ccfaad1ef4c4946a0c23d70300c840e")
      .then(async function (response) {
        setNews(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  if (!news) {
    return null;
  }

  return (
    <View>
      <Button
        title="Go to Landing"
        onPress={() => navigation.navigate("Landing")}
      />
      <FlatList
        data={news.articles}
        keyExtractor={(item, index) => "key" + index}
        renderItem={({ item }) => {
          return <NewsCard item={item} />;
        }}
      />
    </View>
  );
};

export default News;
