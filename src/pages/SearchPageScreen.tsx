import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Linking,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import axios from "axios";
import { useNavigation } from "expo-router";
import InputText from "@/components/InputText";
import NavigationItem from "@/components/NavigationItem";
const SearchLogo = require("../assets/images/SearchLogo.png");
const PlayButton = require("../assets/images/PlayButton.png");
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
        <InputText onPress={() => navigation.navigate("SearchDetailScreen")} />
      </View>
      <View className="ml-[9px] my-4">
        <Text className="text-white text-base font-semibold">Movies & TV</Text>
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
                {movie.title?.length > 35
                  ? `${movie.title.slice(0, 35)}...`
                  : movie.title}
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
      {/* Navigation Items */}
      <NavigationItem />
    </SafeAreaView>
  );
};

export default SearchPageScreen;
