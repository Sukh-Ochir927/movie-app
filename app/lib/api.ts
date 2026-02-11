import { Response, Movie } from "./types";

const baseUrl = "https://api.themoviedb.org/3";

const topRatedUrl = "/movie/top_rated?language=en-US&page=1";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
  },
};

export const getTopRatedMovies = async (): Promise<Response> => {
  const response = await fetch(`${baseUrl}${topRatedUrl}`, options);

  const data = await response.json();
  console.log(data);

  return data;
};
