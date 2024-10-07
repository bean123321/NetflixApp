import React from "react";
import { Text, View, SafeAreaView, ActivityIndicator } from "react-native";
import { WebView } from "react-native-webview";
import useFetchMovieDetails from "@/hooks/useFetchMovieDetails"; // Import the hook

const MovieDetailScreen = ({ route }) => {
  const { slug } = route.params; // Get the slug from route params
  const { movie, loading, embedLink, error } = useFetchMovieDetails(slug);

  if (loading) {
    return (
      <SafeAreaView className="flex-1 bg-black justify-center items-center">
        <ActivityIndicator size="large" color="#ffffff" />
      </SafeAreaView>
    );
  }
  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: "red" }}>Error: {error.message}</Text>
      </View>
    );
  }
  if (!movie) {
    return (
      <SafeAreaView className="flex-1 bg-black justify-center items-center">
        <Text className="text-white">Movie not found</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="flex-1 w-full h-full">
        {embedLink ? (
          <WebView source={{ uri: embedLink }} className="flex-1" />
        ) : (
          <Text className="text-white mt-8 ml-3">No link available</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default MovieDetailScreen;
