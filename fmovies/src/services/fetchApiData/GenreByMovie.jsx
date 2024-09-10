// // useApiData.js
// import { useState } from "react";
// import { getMovieDetails } from "../home/EndPoints"; // Import your API fetching function here

// function Genres() {
//   const [genresByMovie, setGenresByMovie] = useState([]); // [genres, setGenres]

//   const getGenresByMovie = async (id) => {
//     try {
//       const response = await getMovieDetails(id); // Call your API fetching function

//       setGenresByMovie(response.genres);
//       console.log("genre");
//       console.log(response.genres.name);
//     } catch (error) {
//       // Handle error here
//       console.error(error);
//     }
//   };

//   getGenresByMovie();

//   return { genresByMovie };
// }

// export default Genres;
