import { useState } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Acasa from "./components/Acasa/Acasa";
import Footer from "./components/Footer/Footer";
import Beneficii from "./components/Beneficii/Beneficii";
import Marturii from "./components/Marturii/Marturii";
import Ajutor from "./components/Ajutor/Ajutor";
import FadeTransition from "./FadeTransition";

function App() {
  const [section, setSection] = useState("acasa");

  const renderSection = () => {
    switch (section) {
      case "beneficii":
        return <Beneficii />;
      case "marturii":
        return <Marturii />;
      case "ajutor":
        return <Ajutor />;
      case "acasa":
      default:
        return <Acasa onNavigate={setSection} current={section} />;
    }
  };

  return (
    <div id="main">
      <Header onNavigate={setSection} current={section} />
      <div id="content">
        <FadeTransition triggerKey={section}>{renderSection()}</FadeTransition>
      </div>
      <Footer />
    </div>
  );
}

export default App;
