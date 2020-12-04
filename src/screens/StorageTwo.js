import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function StorageTwo() {
  // const [data, setData] = useState(JSON.stringify({ username: "bob" }));
  // const [posts, setPosts] = useState([{}]);
  // const [keys, setKeys] = useState([]);

  const [text, setText] = useState("");
  const [title, setTitle] = useState("");

  const changeTitleHandler = (value) => {
    setTitle(value);
  };

  const changeTextHandler = (value) => {
    setText(value);
  };

  const ClearData = () => {
    AsyncStorage.clear();
  };

  const SaveData = async () => {
    console.log("Saving...");
    // AsyncStorage.clear();
    // AsyncStorage.setItem("@store2:key", "Data of the Item");
    await AsyncStorage.setItem(
      title,
      JSON.stringify({
        text: text,
        title: title,
      })
    );

    console.log("Saved");
  };
  const LoadData = async () => {
    console.log("Loading...");
    var AllKeys = await AsyncStorage.getAllKeys();
    var result = await AsyncStorage.multiGet(AllKeys);
    var item = await AsyncStorage.getItem(title);
    var data = JSON.parse(item);
    // var parsedResult = JSON.parse(result);

    console.log("ALL keys:", AllKeys);
    console.log("item:", item);
    console.log("DATA parced from ITEM:", data);
    console.log(" RESULT:", result.length);
    console.log("Loaded");
  };

  // const importData = async () => {
  //   try {
  //     const keys = await AsyncStorage.getAllKeys();
  //     const result = await AsyncStorage.multiGet(keys);

  //     return result.map((req) => JSON.parse(req)).forEach(console.log);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const fetchAllItems = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const items = await AsyncStorage.multiGet(keys);

      return items;
    } catch (error) {
      console.log(error, "problemo");
    }
  };

  useEffect(() => {
    console.log("Fetched");
    return () => {
      console.log("hi");
      fetchAllItems;
    };
  }, []);

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
      <Button title="Load data" onPress={LoadData} />
      <Button title="Clear All" onPress={ClearData} />

      <Text>items</Text>
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
