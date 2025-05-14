import { useState } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Acasa from "./components/Acasa/Acasa";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div id="main">
      <Header />
      <div id="content">
        <Acasa />
      </div>
      <Footer />
    </div>
  );
}

export default App;
