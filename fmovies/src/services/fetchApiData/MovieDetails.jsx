import { useEffect, useState } from "react";
import { getMovieDetails } from "../home/EndPoints"; // Import your API fetching function here

function MovieDetails(id) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const movieId = id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMovieDetails(movieId); // Call your API fetching function
        console.log("asdfg000", response);
        setData(response);
        console.log("asdfg111", data);
        setLoading(false);
      } catch (error) {
        // Handle error here
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading };
}

export default MovieDetails;
