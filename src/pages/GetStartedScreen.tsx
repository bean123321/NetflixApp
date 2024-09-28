import React from "react";
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import Swiper from "react-native-swiper";
import { useNavigation } from "@react-navigation/native";
const NetflixLogo = require("../assets/images/NetflixLogo.png");

// Slide data
const slides = [
  {
    id: "1",
    title: "Unlimited movies, TV shows, and more.",
    subtitle: "Watch anywhere. Cancel anytime.",
    description: "Tap the link below to sign up.",
  },
  {
    id: "2",
    title: "Enjoy on all your devices.",
    subtitle: "Stream on phones, tablets, laptops, and TVs.",
    description: "Ready to watch? Click the button below.",
  },
  {
    id: "3",
    title: "Download your shows.",
    subtitle: "Watch offline anywhere.",
    description: "Click to learn more.",
  },
];

export default function GetStartedScreen() {
  const navigation = useNavigation(); // Sử dụng hook điều hướng

  return (
    <SafeAreaView className="flex-1 bg-black">
      <StatusBar barStyle="light-content" />

      {/* Logo và Privacy/Sign In */}
      <View className="flex-row justify-between px-4 pt-10">
        <View className="mt-3">
          <Image
            source={NetflixLogo}
            style={{ width: 86, height: 22 }}
            resizeMode="contain"
          />
        </View>
        <View className="flex-row">
          <Text className="text-white mr-4 mt-3">Privacy</Text>
          <Text className="text-white mt-3">Sign In</Text>
        </View>
      </View>

      {/* Swiper cho các slide */}
      <Swiper
        loop={false}
        dot={<View className="w-2 h-2 bg-gray-500 mx-1 rounded-full" />}
        activeDot={<View className="w-2 h-2 bg-red-600 mx-1 rounded-full" />}
        paginationStyle={{ bottom: 30 }}
      >
        {slides.map((slide) => (
          <View key={slide.id} className="flex-1 justify-center items-center">
            <Text className="text-white text-custom-xl font-medium text-center">
              {slide.title}
            </Text>
            <Text className="text-white text-lg mt-4 font-medium">
              {slide.subtitle}
            </Text>
            <Text className="text-white text-base mt-1 font-medium">
              {slide.description}
            </Text>
          </View>
        ))}
      </Swiper>

      {/* Nút Get Started */}
      <View className="items-center pb-8">
        <TouchableOpacity
          className="bg-red-600 w-[90%] py-3 rounded-lg"
          onPress={() => navigation.navigate("HomePageScreen")} // Điều hướng đến HomePage
        >
          <Text className="text-white text-lg text-center font-medium">
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
