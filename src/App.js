import "./App.css";
import Search from "./Components/Search";
import Header from "./Components/Header";
import MealsSlider from "./Components/MealsSlider";
import { useState } from "react";
import classNames from "classnames";

function App() {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className={classNames("App min-h-screen bg-gray-light")}>
      <div className="absolute w-full z-20">
        <Header showNav={showNav} setShowNav={setShowNav} />
      </div>

      <Search />

      <MealsSlider />
    </div>
  );
}

export default App;
