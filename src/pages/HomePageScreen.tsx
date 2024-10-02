import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  ActivityIndicator,
  Linking,
} from "react-native";
import axios from "axios";
import config from "config";
import NavigationItem from "@/components/NavigationItem";
const NetflixBigLogo = require("../assets/images/NetflixBigLogo.png");
const LogoTV = require("../assets/images/LogoTV.png");
const LogoSmile = require("../assets/images/LogoSmile.png");
const BannerImage = require("../assets/images/BannerImage.png");
const LogoPlus = require("../assets/images/LogoPlus.png");
const PlayIcon = require("../assets/images/PlayIcon.png");
const LogoInfo = require("../assets/images/LogoInfo.png");
const WhitePlayIcon = require("../assets/images/WhitePlayIcon.png");

const HomePageScreen = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  // Fetch movies from API
  useEffect(() => {
    const fetchMovies = async () => {
      const options = {
        method: "GET",
        url: "https://ophim1.com/danh-sach/phim-moi-cap-nhat",
      };

      try {
        const response = await axios.request(options);
        setMovies(response.data.items);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    );
  }
  return (
    <SafeAreaView className="flex-1 bg-black">
      {/* Banner Image */}
      <ImageBackground
        source={BannerImage}
        style={{ width: "100%", height: 538 }}
        resizeMode="cover"
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
              <TouchableOpacity className="mt-5 mr-4">
                <Image
                  source={LogoTV}
                  style={{ width: 20, height: 16 }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <TouchableOpacity className="mt-4">
                <Image
                  source={LogoSmile}
                  style={{ width: 24, height: 24 }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Navigation Section */}
          <View className="flex-row justify-evenly mt-5">
            <Text className="text-white text-base">TV Shows</Text>
            <Text className="text-white text-base">Movies</Text>
            <Text className="text-white text-base">Categories</Text>
          </View>

          {/* Tagline */}
          <View className="absolute bottom-[80px] left-0 right-0 flex-row justify-center space-x-2">
            <Text className="text-white">Exciting</Text>
            <Text className="text-white">•</Text>
            <Text className="text-white">Reality TV</Text>
            <Text className="text-white">•</Text>
            <Text className="text-white">Competition</Text>
          </View>

          {/* Buttons Section */}
          <View className="absolute bottom-[20px] left-0 right-0 flex-row justify-evenly space-x-2">
            <TouchableOpacity className="flex-col">
              <Image
                source={LogoPlus}
                style={{ width: 16.67, height: 16.67 }}
                resizeMode="contain"
                className="mb-[5px]"
              />
              <Text className="text-white text-xs">My List</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row justify-center bg-white h-[30px] w-[87px] rounded-sm">
              <Image
                source={PlayIcon}
                style={{ width: 10.5, height: 15 }}
                resizeMode="contain"
                className="mt-[8px]"
              />
              <Text className="text-black text-sm font-bold mt-[5px] ml-[10px]">
                Play
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-col">
              <Image
                source={LogoInfo}
                style={{ width: 16.67, height: 16.67 }}
                resizeMode="contain"
                className="mb-[5px]"
              />
              <Text className="text-white text-xs">Info</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ImageBackground>

      {/* Movies Section */}
      <SafeAreaView>
        <View className="ml-[9px] mb-[5px]">
          <Text className="text-white text-base font-semibold">
            Continue Watching for Ellie
          </Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
           <View className="flex-row space-x-3 ml-[9px]">
              {movies.slice(0, 20).map((movie, index) => (
                  <View className="relative" key={index}>
                    <Image
                      source={{ uri: `${config.URL_MOVIES_THUMB}${movie.thumb_url}` }}
                      className="w-[106px] h-[152px]"
                      resizeMode="cover"
                    />
                    <TouchableOpacity
                      className="absolute top-[50px] left-[30px] w-[54px] h-[54px] rounded-full bg-black bg-opacity-50 justify-center items-center"
                    >
                      <Image
                        source={WhitePlayIcon}
                        className="w-[18px] h-[18px]"
                        resizeMode="contain"
                      />
                    </TouchableOpacity>
                  </View>      
              ))}
            </View>
        </ScrollView>
        {/* Navigation Items */}
        <NavigationItem />
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default HomePageScreen;
