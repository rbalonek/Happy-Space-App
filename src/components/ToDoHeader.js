import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ToDoHeader() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: "coral",
    width: "100%",
  },
  title: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    justifyContent: "center",
    marginTop: 10,
  },
});
