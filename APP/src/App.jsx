import { use, useState } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Acasa from "./components/Acasa/Acasa";
import Footer from "./components/Footer/Footer";

function Despre() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Despre</h2>
      <p>Informații importante...</p>
    </div>
  );
}
function Marturii() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Mărturii</h2>
      <p>Povești reale...</p>
    </div>
  );
}
function Ajutor() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Ajutor</h2>
      <p>Contacte și resurse...</p>
    </div>
  );
}

function App() {
  const [section, setSection] = useState("acasa");

  const renderSection = () => {
    switch (section) {
      case "despre":
        return <Despre />;
      case "marturii":
        return <Marturii />;
      case "ajutor":
        return <Ajutor />;
      case "acasa":
      default:
        return <Acasa />;
    }
  };

  return (
    <div id="main">
      <Header onNavigate={setSection} current={section} />
      <div id="content">{renderSection()}</div>
      <Footer />
    </div>
  );
}

export default App;
