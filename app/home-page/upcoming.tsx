"use client";

import { useEffect, useState } from "react";
import { Movie } from "../lib/types";
import { getUpComingMovies } from "../lib/api";
import { MovieCard } from "../ui/MovieCard";
import Link from "next/link";

export const UpComingMoviesHome = () => {
  const [upComingMovies, setUpComingMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const response = async () => {
      const data = await getUpComingMovies();

      setUpComingMovies(data.results);
    };
    response();
  }, []);

  return (
    <div className="px-20">
      <div className="titles flex justify-between items-center">
        <h2 className="text-[24px] font-semibold py-8 ">Upcoming</h2>
        <a href="/seeMore/upComing">see more</a>
      </div>
      <div className="container grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
        {upComingMovies &&
          upComingMovies.slice(10).map((movie) => (
            <Link key={movie.id} href={`/detail/${movie.id}`}>
              <div>
                <MovieCard
                  posterPath={movie.poster_path}
                  key={movie.id}
                  title={movie.title}
                  rating={movie.vote_average}
                  desc={movie.overview}
                />
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};
