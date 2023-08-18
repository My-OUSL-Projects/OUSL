import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Brands from "./screens/Brands";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Group>
        <Stack.Screen name="Super Cars" component={Home} />
        <Stack.Screen name="Brands" component={Brands} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;
