import { MovieCard } from "./ui/MovieCard";

import Header from "./ui/Header";
import { getTopRatedMovies } from "./lib/api";

const Home = async () => {
  const imgBaseUrl = "https://image.tmdb.org/t/p/w500";
  const data = await getTopRatedMovies();

  return (
    <div>
      <Header />
      <div>
        {data.results.map((movie) => (
          <div key={movie.id}>
            <img src={`${imgBaseUrl}${movie.poster_path}`} alt="poster" />
            <MovieCard
              key={movie.id}
              title={movie.title}
              rating={movie.vote_average}
              desc={movie.overview}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
