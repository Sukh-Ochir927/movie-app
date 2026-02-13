import { PopularMovies } from "./home-page/Popular";
import { TopRatedMovies } from "./home-page/TopRated";
import { UpComingMoviesHome } from "./home-page/upcoming";
import { getUpComingMovies } from "./lib/api";

import Header from "./ui/Header";

const Home = async () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center border-red-50 items-center">
        <TopRatedMovies />
        <PopularMovies />
        <UpComingMoviesHome />
      </div>
    </div>
  );
};
export default Home;
