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
      <Button title="To Do List" onPress={() => navigation.navigate("ToDo")} />
      <Button
        title="StorageTwo"
        onPress={() => navigation.navigate("StorageTwo")}
      />
      <Button title="Storage" onPress={() => navigation.navigate("Storage")} />
    </View>
  );
};

export default HomeScreen;
