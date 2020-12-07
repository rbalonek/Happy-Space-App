import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./src/screens/Home/Home";
import News from "./src/screens/News";
import DadJokes from "./src/screens/DadJokes";
import Bored from "./src/screens/Bored";
import ThisDayHistory from "./src/screens/ThisDayHistory";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      // screenOptions={{
      //   headerShown: false,
      // }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="News"
          component={News}
          options={{
            headerStyle: {
              backgroundColor: "black",
            },
            headerTitleStyle: {
              color: "white",
            },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen name="DadJokes" component={DadJokes} />
        <Stack.Screen
          name="Bored"
          component={Bored}
          options={{
            headerTitle: "",
            headerStyle: {
              backgroundColor: "green",
            },
            headerTitleStyle: {
              color: "white",
            },
            headerBackTitleStyle: {
              color: "white",
            },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="This Day in History"
          component={ThisDayHistory}
          options={{
            headerStyle: {
              backgroundColor: "#4b357a",
            },
            headerTitleStyle: {
              color: "white",
            },
            headerTintColor: "white",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
