import React, { useEffect, useState } from "react";
import { Text, View, SafeAreaView, ActivityIndicator, Dimensions } from "react-native";
import { WebView } from "react-native-webview";
import useFetchMovieDetails from "@/hooks/useFetchMovieDetails"; // Import the hook
import * as ScreenOrientation from "expo-screen-orientation";

const MovieDetailScreen = ({ route }) => {
  const { slug } = route.params; // Get the slug from route params
  const { movie, loading, embedLink, error } = useFetchMovieDetails(slug);

  const [isLandscape, setIsLandscape] = useState(false);

  // Function to check the orientation
  const checkOrientation = () => {
    const { width, height } = Dimensions.get("window");
    setIsLandscape(width > height); // If width is greater than height, it's landscape
  };

  useEffect(() => {
    const screenMode = async () => {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.ALL);
      checkOrientation(); // Call the function to check orientation right when entering the screen
    };

    screenMode();

    // Subscribe to dimension change events
    const subscription = Dimensions.addEventListener("change", checkOrientation);

    // Reset orientation when leaving the screen
    return () => {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
      subscription?.remove(); // Unsubscribe from the event
    };
  }, []);

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
      <View
        className="w-full"
        style={{
          height: isLandscape ? '100%' : 500, // Full height in landscape, 500px in portrait
          width: '100%',
        }}
      >
        {embedLink ? (
          <WebView source={{ uri: embedLink }} style={{ flex: 1 }} />
        ) : (
          <Text className="text-white mt-8 ml-3">No link available</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default MovieDetailScreen;
