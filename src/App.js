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
    <div>
      <div className="w-full z-20">
        <Header showNav={showNav} setShowNav={setShowNav} />
      </div>
      {/* Wrapped the Comps with routes hook in order to create the route for each page */}
      <Routes>
        <Route>
          <Route path="/" element={<HomePage />} />
          <Route path="instructions/:id" element={<Instructions />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
