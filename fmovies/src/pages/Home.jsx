// import Hero from "../components/Hero";
import TrendingSlider from "../components/TrendingSlider";
import Recommended from "../components/Recommended";
import TopRated from "../components/TopRated";
import HeroSlide from "../components/HeroSlide";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div>
      <div>
        <NavBar />
        <HeroSlide />
        <TrendingSlider />
        <div className="flex relative">
          <div>
            <Recommended />
            <Recommended />
          </div>
          <TopRated />
        </div>
      </div>
    </div>
  );
}
