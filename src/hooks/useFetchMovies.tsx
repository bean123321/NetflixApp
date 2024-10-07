import { useState, useEffect } from "react";
import axios from "axios";

const useFetchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: "https://ophim1.com/danh-sach/phim-moi-cap-nhat",
  };
  // Fetch movies from API
  const fetchMovies = async () => {
    setLoading(true);

    try {
      const response = await axios.request(options);
      setMovies(response.data.items);
    } catch (error) {
      setError(error);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return { movies, loading, error };
};

export default useFetchMovies;
