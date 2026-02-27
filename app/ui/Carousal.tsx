import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Movie } from "../lib/types";

type HeroProps = {
  movies: Movie[];
};

export const Hero = ({ movies }: HeroProps) => {
  return (
    <Carousel className="mx-2">
      <CarouselContent>
        {movies.map((movie) => (
          <CarouselItem key={movie.id} className="h-150  ">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt={movie.title}
              className="w-full h-full object-cover rounded-sm"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="translate-x-20" />
      <CarouselNext className="-translate-x-20" />
    </Carousel>
  );
};
