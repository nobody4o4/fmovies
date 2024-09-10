// useApiData.js
import { useEffect, useState } from "react";
import { getSuggestions } from "../home/EndPoints"; // Import your API fetching function here

function UseApiData() {
  const [data, setData] = useState([]);
  // const [genresByMovie, setGenresByMovie] = useState([]); // [genres, setGenres]
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getSuggestions(); // Call your API fetching function

        setData(response.data.results);
        setLoading(false);
      } catch (error) {
        // Handle error here
        console.error(error);
        setLoading(false);
      }
    };

    // const getGenresByMovie = async (id) => {
    //   try {
    //     const response = await getMovieDetails(id); // Call your API fetching function

    //     setGenresByMovie(response.genres);
    //     console.log("genre");
    //     console.log(response.genres[2].name);
    //     console.log(adata[2].id);

    //     setLoading(false);
    //   } catch (error) {
    //     // Handle error here
    //     console.error(error);
    //     setLoading(false);
    //   }
    // };

    fetchData();
  }, []);

  const adata = data.slice(0, 5);

  return { adata, loading };
}

export default UseApiData;
