import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title="Go to News" onPress={() => navigation.navigate("News")} />
      <Button
        title="See Dad Jokes!"
        onPress={() => navigation.navigate("DadJokes")}
      />
      <Button title="Bored?" onPress={() => navigation.navigate("Bored")} />
      <Button
        title="This Day In History"
        onPress={() => navigation.navigate("This Day in History")}
      />
    </View>
  );
};

export default HomeScreen;
