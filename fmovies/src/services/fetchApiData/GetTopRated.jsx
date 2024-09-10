// useApiData.js
import { useEffect, useState } from "react";
import { getTopRated } from "../home/EndPoints"; // Import your API fetching function here

function TopRated() {
  const [data, setData] = useState([]);
  // const [genresByMovie, setGenresByMovie] = useState([]); // [genres, setGenres]
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTopRated(); // Call your API fetching function
        console.log("asdfg", response);
        setData(response.results);
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

export default TopRated;
