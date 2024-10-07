import { useState, useEffect } from "react";
import axios from "axios";

const useFetchMovieDetails = (slug) => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [embedLink, setEmbedLink] = useState("");
  const [error, setError] = useState(null);

  const fetchMovieDetails = async () => {
    setLoading(true);
    const options = {
      method: "GET",
      url: `https://ophim1.com/phim/${slug}`,
    };

    try {
      const response = await axios.request(options);
      const data = response.data;

      // Set the movie details
      setMovie(data.movie);

      // Assuming the first embed link is in episodes[0].server_data[0].link_embed
      if (
        data.episodes &&
        data.episodes[0].server_data &&
        data.episodes[0].server_data.length > 0
      ) {
        setEmbedLink(data.episodes[0].server_data[0].link_embed);
      }
    } catch (error) {
      setError(error);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (slug) {
      fetchMovieDetails();
    }
  }, [slug]);

  return { movie, loading, embedLink, error };
};

export default useFetchMovieDetails;
