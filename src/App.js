import "./App.css";
import Header from "./Components/Header";
import { useState } from "react";
import classNames from "classnames";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Instructions from "./Components/Instructions";

function App() {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className=" lg:flex lg:flex-col lg:items-center lg:justify-center lg:w-full">
      <div className="w-full z-20">
        <Header showNav={showNav} setShowNav={setShowNav} />
      </div>
      <div className="lg:max-w-full">
        <div className="relative md:top-[2rem] lg:top-[2rem] p-[.5rem]">
          {/* Wrapped the Comps with routes hook in order to create the route for each page */}
          <Routes>
            <Route>
              <Route path="/" element={<HomePage />} />
              <Route path="instructions/:id" element={<Instructions />} />
            </Route>
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
