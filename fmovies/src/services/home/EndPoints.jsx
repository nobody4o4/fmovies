import http from "../MovieAPI";

const myApiKey = "f14341e76a5fa178c0929d5684e22208";

export const getSuggestions = () => {
  const data = http.get(
    `/now_playing?api_key=${myApiKey}&language=en-US&page=1`
  );
  return data;
};

export const getGenres = async () => {
  const { data } = await http.get(`/genres`, {
    params: {
      api_key: myApiKey,
    },
  });
  return data;
};

export const getMovieDetails = async (id) => {
  const { data } = await http.get(`/${id}?api_key=${myApiKey}`);

  return data;
};

export const getPopular = async () => {
  const { data } = await http.get(
    `/popular?api_key=${myApiKey}&language=en-US&page=1`
  );

  return data;
};

export const getTopRated = async () => {
  const { data } = await http.get(
    `/top_rated?api_key=${myApiKey}&language=en-US&page=1`
  );
  return data;
};
