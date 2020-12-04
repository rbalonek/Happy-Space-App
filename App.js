import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./src/screens/Home/Home";
import News from "./src/screens/News";
import DadJokes from "./src/screens/DadJokes";

import ToDo from "./src/screens/ToDo";
import StorageTwo from "./src/screens/StorageTwo";
import Storage from "./src/screens/Storage";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="News" component={News} />
        <Stack.Screen name="DadJokes" component={DadJokes} />
        <Stack.Screen name="ToDo" component={ToDo} />
        <Stack.Screen name="StorageTwo" component={StorageTwo} />
        <Stack.Screen name="Storage" component={Storage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
