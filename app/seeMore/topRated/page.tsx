import { getTopRatedMovies } from "@/app/lib/api";
import Footer from "@/app/ui/Footer";
import Header from "@/app/ui/Header";
import { MovieCard } from "@/app/ui/MovieCard";
import React from "react";

const page = async () => {
  const response = await getTopRatedMovies();

  const movies = response.results;

  console.log("Top Rated movies on clicks see more ", movies);

  const baseUrlImg = "https://image.tmdb.org/t/p/w500";

  return (
    <div>
      <Header />
      <div className=" grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 p-20">
        {movies.map((movie) => (
          <div key={movie.id}>
            <img src={`${baseUrlImg}${movie.poster_path}`} alt={movie.title} />
            <MovieCard
              key={movie.id}
              title={movie.title}
              rating={movie.vote_average}
              desc={movie.overview}
            />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default page;
