import axios from "axios";
import React, { useEffect, useState } from "react";
import { Text, View, SafeAreaView, ActivityIndicator } from "react-native";
import { WebView } from "react-native-webview";

const MovieDetailScreen = ({ route }) => {
  const { slug } = route.params; // Get the slug from route params
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [embedLink, setEmbedLink] = useState(""); // State to store the first embed link

  useEffect(() => {
    // Function to fetch movie details based on the slug
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`https://ophim1.com/phim/${slug}`);
        const data = response.data;

        // Set the movie details
        setMovie(data.movie);

        // Assuming the first embed link is in episodes[0].server_data[0].link_embed
        if (
          data.episodes &&
          data.episodes[0].server_data &&
          data.episodes[0].server_data.length > 0
        ) {
          setEmbedLink(data?.episodes[0]?.server_data[0].link_embed); // Get the first embed link
        }
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [slug]); // Fetch movie details when slug changes

  if (loading) {
    return (
      <SafeAreaView className="flex-1 bg-black justify-center items-center">
        <ActivityIndicator size="large" color="#ffffff" />
      </SafeAreaView>
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
