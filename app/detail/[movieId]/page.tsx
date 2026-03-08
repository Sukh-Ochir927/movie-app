import {
  getMovieDirector,
  getMoviesByMovieIds,
  getSimilarMovies,
} from "@/app/lib/api";
import { Details, CrewData } from "@/app/lib/types";

type MovieDetailProps = {
  params: Promise<{ movieId: string }>;
};

export default async function MovieDetail({ params }: MovieDetailProps) {
  const { movieId } = await params;

  const movie: Details = await getMoviesByMovieIds(movieId);

  const { director, writers, stars }: CrewData =
    await getMovieDirector(movieId);

  const similarMovies = await getSimilarMovies(movieId);

  const usRelease = movie.release_dates?.results.find(
    (country) => country.iso_3166_1 === "US",
  );

  const ageRating = usRelease?.release_dates?.[0]?.certification || "NR";

  const baseUrlImg = "https://image.tmdb.org/t/p/w500";

  return (
    <div>
      <h1>{movie.title}</h1>
      <div>
        <p>{movie.release_date}</p>
        <p>{ageRating}</p>
        <p>{`${movie.runtime} min`}</p>
      </div>
      <div className="flex gap-2">
        <img src={`${baseUrlImg}${movie.poster_path}`} alt={movie.title} />
        <img src={`${baseUrlImg}${movie.backdrop_path}`} alt={movie.title} />
      </div>
      <div>{movie.genres.map((movie) => movie.name)}</div>
      <p>{movie.overview}</p>
      <div>
        <div>
          <h1>Director</h1>
          <p>{director.name}</p>
        </div>
        <div>
          <h1>Writers</h1>
          <p>{writers.map((writer) => writer.name).join(" ")}</p>
        </div>
        <div>
          <h1>Stars</h1>
          <p>{stars?.map((star) => star.name).join(" ")}</p>
        </div>
      </div>
      <div>
        <h1>More like this</h1>
        <div>
          {similarMovies.results.map((movie) => (
            <div key={movie.id}>
              <img
                src={`${baseUrlImg}${movie.poster_path}`}
                alt={movie.title}
              />
              <p>{movie.vote_average}</p>
              <p>{movie.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
