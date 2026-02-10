const url =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

const token = process.env.token;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
};

export interface Response {
  page: Number;
  results: Movie[];
  total_pages: Number;
  total_results: Number;
}

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const getPopularMovies = async (): Promise<Response> => {
  const response = await fetch(url, options);

  const data = await response.json();

  console.log(data);
  return data;
};

const Home = async () => {
  const data = await getPopularMovies();

  return (
    <div>
      {data.results.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          rating={movie.vote_average}
          desc={movie.overview}
        />
      ))}
    </div>
  );
};

export default Home;

type MovieCardProps = {
  title: string;
  rating: number;
  desc: string;
};

const MovieCard = ({ title, rating, desc }: MovieCardProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{rating}</p>
      <p>{desc}</p>
    </div>
  );
};
