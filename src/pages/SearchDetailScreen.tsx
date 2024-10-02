import React, { useEffect, useState } from "react";
import { View, SafeAreaView, Image } from "react-native";
import axios from "axios";
import InputText from "@/components/InputText";
import { useNavigation } from "expo-router";
const SearchLogo = require("../assets/images/SearchLogo.png");
const SearchDetailScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="mx-2 mt-[50px] bg-gray-800 rounded flex-row justify-center items-center px-4">
        {/* Icon tìm kiếm */}
        <Image
          source={SearchLogo}
          style={{ width: 13.27, height: 13.26 }}
          resizeMode="contain"
          className="mr-2"
        />
        {/* TextInput */}
        <InputText onPress={() => navigation.navigate("HomePageScreen")} />
      </View>
    </SafeAreaView>
  );
};

export default SearchDetailScreen;
