import { getPopularMovies } from "@/app/lib/api";

import Footer from "@/app/ui/Footer";

import Header from "@/app/ui/Header";

import Image from "next/image";

const page = async () => {
  const response = await getPopularMovies();

  const movies = response.results;

  const baseUrlImg = "https://image.tmdb.org/t/p/w500";

  return (
    <div>
      <Header />

      <div className="grid grid-cols-3 gap-4 p-20">
        {movies.map((movie) => (
          <div
            className="relative w-full h-72 rounded-lg overflow-hidden"
            key={movie.id}
          >
            <Image
              src={`${baseUrlImg}${movie.poster_path}`}
              alt={movie.title}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default page;
