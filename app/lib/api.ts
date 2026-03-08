import { Response, Details, CrewMember, CrewData } from "./types";

const baseUrl = "https://api.themoviedb.org/3";

const topRatedUrl = "/movie/top_rated?language=en-US&page=1";

const upComingUrl = "/movie/upcoming?language=en-US&page=1";

const popularUrl = "/movie/popular?language=en-US&page=1";

const nowPlayingUrl = "/movie/now_playing";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`,
  },
};

export const getTopRatedMovies = async (): Promise<Response> => {
  const response = await fetch(`${baseUrl}${topRatedUrl}`, options);

  const data = await response.json();

  return data;
};

export const getUpComingMovies = async (): Promise<Response> => {
  const response = await fetch(
    `${baseUrl}/movie/upcoming?language=en-US&page=1`,
    options,
  );

  const data = await response.json();

  return data;
};

export const getPopularMovies = async (): Promise<Response> => {
  const response = await fetch(`${baseUrl}${popularUrl}`, options);

  const data = await response.json();

  return data;
};

export const getMoviesByMovieIds = async (
  movieId: string,
): Promise<Details> => {
  const response = await fetch(
    `${baseUrl}/movie/${movieId}?language=en-US&append_to_response=release_dates`,
    options,
  );

  const data = await response.json();

  console.log("movieId aar avsan kinonii datanuud", data.release_dates);

  return data;
};

export const getMovieDirector = async (movieId: string): Promise<CrewData> => {
  const response = await fetch(`${baseUrl}/movie/${movieId}/credits`, options);

  const data = await response.json();
  const director = data.crew.find(
    (person: CrewMember) => person.job === "Director",
  );
  const writers = data.crew.filter(
    (person: CrewMember) =>
      person.job === "Screenplay" ||
      person.job === "Writer" ||
      person.job === "Story",
  );
  const stars = data.cast.slice(0, 3);

  return { director, writers, stars };
};

export const getSimilarMovies = async (movieId: string): Promise<Response> => {
  const response = await fetch(
    `${baseUrl}/movie/${movieId}/similar?language=en-US&page=1`,
    options,
  );
  const data = await response.json();
  return data;
};
