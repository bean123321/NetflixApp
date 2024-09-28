import React from "react";
import { SafeAreaView, Text, View } from "react-native";

export default function HomePageScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", color: "#333" }}>
          Welcome to Home Page!
        </Text>
      </View>
    </SafeAreaView>
  );
}
