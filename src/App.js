import React from "react";
import "./App.css";
import Game from "./components/Game";
import Banner from "./components/Banner";
import Gamebox from "./components/Gamebox";
import Footer from "./components/navigation/Footer";

function App() {
  return (
    <div>
      <Game />
      <Banner />
      <Gamebox />
      <Footer />
    </div>
  );
}

export default App;
