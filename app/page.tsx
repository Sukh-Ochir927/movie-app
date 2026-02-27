import { PopularMovies } from "./home-page/Popular";

import { TopRatedMovies } from "./home-page/TopRated";

import { UpComingMoviesHome } from "./home-page/upcoming";

import Footer from "./ui/Footer";

import Header from "./ui/Header";
import { Hero } from "./ui/Carousal";
import { getUpComingMovies } from "./lib/api";

const Home = async () => {
  const { results } = await getUpComingMovies();

  return (
    <div>
      <Header />
      <Hero  movies={results}/>
      <div className="flex flex-col justify-center border-red-50 items-center">
        <UpComingMoviesHome />
        <PopularMovies />
        <TopRatedMovies />
      </div>
      <Footer />
    </div>
  );
};
export default Home;
