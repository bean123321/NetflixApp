import React, { useEffect, useState } from "react";
import { Text, View, SafeAreaView, ActivityIndicator } from "react-native";

const MovieDetailScreen = ({ route }) => {
  const { slug } = route.params; // Get the slug from route params
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to fetch movie details based on the slug
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`https://ophim1.com/phim/${slug}`);
        const data = await response.json();

        // Assuming the content is available in the data structure
        setMovie(data.movie);
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
      <View>
        {/* Display the movie content */}
        <Text className="text-white mt-6">{movie.content}</Text>
        <Text className="text-white mt-6">{movie.origin_name}</Text>
        <Text className="text-white mt-6">{movie.slug}</Text>
      </View>
    </SafeAreaView>
  );
};

export default MovieDetailScreen;
