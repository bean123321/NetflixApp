import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GetStartedScreen from "@/pages/GetStartedScreen";
import HomePageScreen from "@/pages/HomePageScreen";
import SearchPageScreen from "@/pages/SearchPageScreen";
import SearchDetailScreen from "@/pages/SearchDetailScreen";
import MovieDetailScreen from "@/pages/MovieDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="GetStarted">
        <Stack.Screen
          name="GetStarted"
          component={GetStartedScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomePageScreen"
          component={HomePageScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SearchPageScreen"
          component={SearchPageScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SearchDetailScreen"
          component={SearchDetailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MovieDetailScreen"
          component={MovieDetailScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
