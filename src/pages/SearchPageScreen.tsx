import React, { useEffect, useState } from "react";
import { Text, View, SafeAreaView, TextInput, Image, TouchableOpacity, Linking, ActivityIndicator, ScrollView } from "react-native";
import axios from "axios";
const SearchLogo = require("../assets/images/SearchLogo.png");
const PlayButton = require("../assets/images/PlayButton.png");
const HomeButtonLogo = require("../assets/images/HomeButtonLogo.png");
const NewHotButtonLogo = require("../assets/images/NewHotButtonLogo.png");
const LaughButtonLogo = require("../assets/images/LaughButtonLogo.png");
const SearchButtonLogo = require("../assets/images/SearchButtonLogo.png");
const DownloadButtonLogo = require("../assets/images/DownloadButtonLogo.png");

import { useNavigation } from "expo-router";
const SearchPageScreen = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  // Gọi API khi component được mount
  useEffect(() => {
    const fetchMovies = async () => {
      const options = {
        method: "GET",
        url: "https://66fb766d8583ac93b40bd808.mockapi.io/api/movies/movies",
      };

      try {
        const response = await axios.request(options);
        setMovies(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const handlePress = (imdbLink) => {
    Linking.openURL(imdbLink); // Mở liên kết IMDb
  };
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    );
  }
  const navigationItems = [
    {
      id: 1,
      logo: HomeButtonLogo,
      label: "Home",
      width: 18.74,
      height: 19.02,
      onPress: () => navigation.navigate("HomePageScreen"),
    },
    {
      id: 2,
      logo: NewHotButtonLogo,
      label: "New & Hot",
      width: 18.74,
      height: 19.02,
      onPress: () => {},
    },
    {
      id: 3,
      logo: LaughButtonLogo,
      label: "Fast Laughs",
      width: 21,
      height: 21,
      onPress: () => {},
    },
    {
      id: 4,
      logo: SearchButtonLogo,
      label: "Search",
      width: 19.9,
      height: 19.9,
      onPress: () => navigation.navigate("SearchPageScreen"),
    },
    {
      id: 5,
      logo: DownloadButtonLogo,
      label: "Download",
      width: 20,
      height: 20,
      onPress: () => {},
    },
  ];
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
        <TextInput
          placeholder="Search"
          placeholderTextColor="#737373"
          className="text-white text-sm flex-1 py-2"
          onPress={() => navigation.navigate("SearchDetailScreen")}
          style={{ textAlign: "center" }} // Optional: keep this if you want the text to be centered
        />
      </View>
      <View className="ml-[9px] my-4">
          <Text className="text-white text-base font-semibold">
            Movies & TV
          </Text>
      </View>
      <ScrollView>
        {movies.slice(0, 20).map((movie) => (
          <TouchableOpacity
            key={movie.id}
            className="flex-row justify-between my-2"
            onPress={() => handlePress(movie.imdb_link)} 
          >
            <View className="flex-row items-center">
              <Image
                source={{ uri: movie.thumbnail }} 
                style={{ width: 96, height: 54.05 }}
                resizeMode="contain"
              />
              <Text className="text-gray-400 text-xs font-bold">
                {movie.title?.length > 35 ? `${movie.title.slice(0, 35)}...` : movie.title}
              </Text>
            </View>
            <Image
              source={PlayButton} 
              style={{ width: 32, height: 32 }}
              resizeMode="contain"
              className="mr-4 mt-2"
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View className="flex-row justify-evenly space-x-2 fixed bottom-0 left-0 right-0 bg-black z-50 mt-2 pt-2">
          {navigationItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              className="flex-col items-center"
              onPress={item.onPress}
            >
              <Image
                source={item.logo}
                style={{ width: item.width, height: item.height }}
                resizeMode="contain"
                className="mb-[5px]"
              />
              <Text className="text-white text-xs">{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
    </SafeAreaView>
  );
};

export default SearchPageScreen;
