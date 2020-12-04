import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Storage() {
  // const [data, setData] = useState(JSON.stringify({ username: "bob" }));

  const [text, setText] = useState("");
  const [title, setTitle] = useState("");

  const changeTitleHandler = (value) => {
    setTitle(value);
  };

  const changeTextHandler = (value) => {
    setText(value);
  };

  const SaveData = async () => {
    console.log("Saving...");
    // AsyncStorage.setItem("@store2:key", "Data of the Item");
    await AsyncStorage.setItem(
      "ToDos",
      JSON.stringify({
        text: text,
        title: title,
      })
    );
    console.log("Saved");
  };

  const AddData = async () => {
    let arr = JSON.parse(data);
    arr.push(text);
    await AsyncStorage.setItem("New Line", JSON.stringify(arr));
  };

  const LoadData = async () => {
    console.log("Loading...");
    var item = await AsyncStorage.getItem("ToDos");
    var keys = await AsyncStorage.getAllKeys();
    var data = JSON.parse(item);
    console.log("keys:", keys);
    console.log("data:", data);
    console.log("Loaded");
  };

  const ClearData = () => {
    AsyncStorage.clear();
  };

  return (
    <View style={styles.container}>
      <Text>Async Storage</Text>

      <TextInput
        style={styles.input}
        placeholder="Title"
        onChangeText={changeTitleHandler}
      />

      <TextInput
        style={styles.input}
        placeholder="Text"
        onChangeText={changeTextHandler}
      />

      <Button title="save data" onPress={SaveData} />
      <Button title="ADD data" onPress={AddData} />
      <Button title="Load data" onPress={LoadData} />
      <Button title="Clear All" onPress={ClearData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
