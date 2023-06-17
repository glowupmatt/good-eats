import "./App.css";
import Header from "./Components/Header";
import { useState } from "react";
import classNames from "classnames";
import Footer from "./Components/Footer";
import HomePage from "./Components/HomePage";

function App() {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className={classNames("App min-h-screen bg-gray-light")}>
      <div className="absolute w-full z-20">
        <Header showNav={showNav} setShowNav={setShowNav} />
      </div>
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
