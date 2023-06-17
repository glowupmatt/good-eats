import "./App.css";
import Search from "./Components/Search";
import Header from "./Components/Header";
import MealsSlider from "./Components/MealsSlider";
import { useState } from "react";
import classNames from "classnames";
import DietGrid from "./Components/DietGrid";
import VideoSlider from "./Components/VideoSlider";
import Footer from "./Components/Footer";

function App() {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className={classNames("App min-h-screen bg-gray-light")}>
      <div className="absolute w-full z-20">
        <Header showNav={showNav} setShowNav={setShowNav} />
      </div>
      <Search />
      <MealsSlider />

      <DietGrid />

      <VideoSlider />
      <Footer />
    </div>
  );
}

export default App;
