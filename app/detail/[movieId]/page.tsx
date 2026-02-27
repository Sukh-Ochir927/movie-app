import { getMoviesByMovieIds } from "@/app/lib/api";

type MovieDetailProps = {
  params: Promise<{ movieId: string }>;
};

export default async function MovieDetail({ params }: MovieDetailProps) {
  const { movieId } = await params;

  const data = await getMoviesByMovieIds(movieId);

  console.log(data);

  return <div>{movieId}</div>;
}
