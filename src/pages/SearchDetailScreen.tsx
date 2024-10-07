import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import InputText from "@/components/InputText";
import { useNavigation } from "expo-router";
import config from "config";
import NavigationItem from "@/components/NavigationItem";
import useFetchMovies from "@/hooks/useFetchMovies";

const SearchLogo = require("../assets/images/SearchLogo.png");

const SearchDetailScreen = () => {
  const { movies, loading, error } = useFetchMovies();
  const [searchQuery, setSearchQuery] = useState("");
  const navigation = useNavigation();

  // Function to chunk movies into groups of 5
  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  // Filter movies based on the search query
  const filteredMovies = movies.filter(
    (movie) =>
      movie.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      movie.origin_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const movieChunks = chunkArray(filteredMovies.slice(0, 200), 5);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: "red" }}>Error: {error.message}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="mx-2 mt-[50px] bg-gray-800 rounded flex-row justify-center items-center px-4">
        <Image
          source={SearchLogo}
          style={{ width: 13.27, height: 13.26 }}
          resizeMode="contain"
          className="mr-2"
        />
        <InputText value={searchQuery} onChangeText={setSearchQuery} />
      </View>
      <View className="ml-[9px] my-4">
        <Text className="text-white text-base font-semibold">Movies & TV</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {movieChunks.map((chunk, chunkIndex) => (
          <ScrollView
            key={chunkIndex}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <View className="flex-row space-x-3 ml-[9px]">
              {chunk.map((movie, index) => (
                <View className="pr-[8px] pt-[8px]" key={index}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("MovieDetailScreen", {
                        slug: movie.slug,
                      });
                    }}
                  >
                    <Image
                      source={{
                        uri: `${config.URL_MOVIES_THUMB}${movie.thumb_url}`,
                      }}
                      className="w-[106px] h-[152px]"
                      resizeMode="cover"
                    />
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </ScrollView>
        ))}
      </ScrollView>
      <NavigationItem />
    </SafeAreaView>
  );
};

export default SearchDetailScreen;
