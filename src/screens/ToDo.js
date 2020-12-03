import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import ToDoHeader from "../components/ToDoHeader";
import ToDoItem from "../components/ToDoItem";
import AppToDo from "../components/AppToDo";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
    width: "100%",
  },
});

const ToDo = ({ navigation }) => {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create app", key: "2" },
    { text: "Play videogames", key: "3" },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [{ text: text, key: Math.random().toString() }, ...prevTodos];
    });
  };

  return (
    <View style={styles.container}>
      <ToDoHeader />
      <ScrollView>
        <View style={styles.content}>
          <AppToDo submitHandler={submitHandler} />

          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <ToDoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ToDo;
