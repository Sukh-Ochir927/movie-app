type MovieCardProps = {
  title: string;
  rating: number;
  desc: string;
};

export const MovieCard = ({ title, rating, desc }: MovieCardProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{rating}</p>
      <p>{desc}</p>
    </div>
  );
};
