import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
const NetflixBigLogo = require("../assets/images/NetflixBigLogo.png");
const LogoTV = require("../assets/images/LogoTV.png");
const LogoSmile = require("../assets/images/LogoSmile.png");
const BannerImage = require("../assets/images/BannerImage.png");

export default function HomePageScreen() {
  return (
    <SafeAreaView className="flex-1">
      <ImageBackground
        source={BannerImage}
        style={{ width: "100%", height: 538 }}
      >
        <SafeAreaView className="flex-1">
          {/* Header Section */}
          <View className="flex-row justify-between px-4 pt-10">
            <View className="mt-3">
              <Image
                source={NetflixBigLogo}
                style={{ width: 18, height: 32 }}
                resizeMode="contain"
              />
            </View>
            <View className="flex-row">
              <Image
                className="mt-5 mr-4"
                source={LogoTV}
                style={{ width: 20, height: 16 }}
                resizeMode="contain"
              />
              <Image
                className="mt-4"
                source={LogoSmile}
                style={{ width: 24, height: 24 }}
                resizeMode="contain"
              />
            </View>
          </View>
          {/* Navigation Section */}
          <View className="flex-row justify-evenly mt-6">
            <Text className="text-white text-base">TV Shows</Text>
            <Text className="text-white text-base">Movies</Text>
            <Text className="text-white text-base">Categories</Text>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </SafeAreaView>
  );
}
