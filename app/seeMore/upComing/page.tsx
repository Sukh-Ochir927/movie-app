import { getUpComingMovies } from "@/app/lib/api";
import Footer from "@/app/ui/Footer";
import Header from "@/app/ui/Header";
import { MovieCard } from "@/app/ui/MovieCard";
import React from "react";

const page = async () => {
  const response = await getUpComingMovies();

  const movies = response.results;

  return (
    <div>
      <Header />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 p-20">
        {movies.map((movie) => (
          <div key={movie.id}>
            <MovieCard
              posterPath={movie.poster_path}
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
