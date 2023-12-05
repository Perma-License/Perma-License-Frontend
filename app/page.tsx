import { Stats } from "fs";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import FilterSection from "./components/Collection/CollectionSection";
import Categories from "./components/Catagories";

export default function Home() {
  return (
    <div className="mx-32 mt-16">
      <HeroSection />
      <StatsSection />
      <FilterSection />
      <Categories />
    </div>
  )
}
