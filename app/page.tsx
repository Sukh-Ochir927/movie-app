import { TopRatedMovies } from "./home-page/TopRated";
import { UpComingMoviesHome } from "./home-page/upcoming";
import { getUpComingMovies } from "./lib/api";

import Header from "./ui/Header";

const Home = async () => {
  return (
    <div>
      <Header />
      <TopRatedMovies />
      <UpComingMoviesHome />
    </div>
  );
};
export default Home;
