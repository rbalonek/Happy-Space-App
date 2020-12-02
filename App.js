import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LandingScreen from "./src/screens/Landing/Landing";
import HomeScreen from "./src/screens/Home/Home";
import News from "./src/screens/News";
import DadJokes from "./src/screens/DadJokes";

const RootStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Landing" component={LandingScreen} />
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="News" component={News} />
        <RootStack.Screen name="DadJokes" component={DadJokes} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
