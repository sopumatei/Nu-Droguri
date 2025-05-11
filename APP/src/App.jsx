import { useState } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Acasa from "./components/Acasa/Acasa";

function App() {
  return (
    <div id="main">
      <Header />
      <div id="content">
        <Acasa />
      </div>
    </div>
  );
}

export default App;
