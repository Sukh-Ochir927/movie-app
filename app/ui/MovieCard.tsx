import Image from "next/image";

type MovieCardProps = {
  title: string;
  rating: number;
  desc: string;
  posterPath: string;
};

export const MovieCard = ({ title, rating, posterPath }: MovieCardProps) => {
  const baseUrlImg = "https://image.tmdb.org/t/p/w500";

  return (
    <div>
      <img src={`${baseUrlImg}${posterPath}`} alt={title} />
      <h1>{title}</h1>
      <p>{rating}</p>
    </div>
  );
};
