import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import NewsCard from "../components/NewsCard";
import newAPI from "../../apis/News";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNewsFromAPI();
  }, []);

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
    <View style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red", //#c9aa88",
  },
});

export default News;
