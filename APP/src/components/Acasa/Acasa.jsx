import "./Acasa.css";
import acasaImg from "../../assets/drugs_1.jpg";

export default function Acasa({ onNavigate, current }) {
  return (
    <div id="acasa">
      <div id="acasa-txt">
        <div className="txt-container">
          <h1>Alege viața. Nu drogurile</h1>

          <p>
            Bine ai venit! Acest site este dedicat celor care aleg să trăiască
            liberi. Drogurile nu sunt o soluție — sunt o capcană. Noi suntem
            aici să te ascultăm, să te încurajăm și să îți arătăm că se poate
            trăi frumos fără ele.
          </p>
        </div>

        <div id="acasa-btns">
          <button onClick={() => onNavigate("marturii")}>
            📚 Citește povești reale
          </button>
          <button onClick={() => onNavigate("beneficii")}>
            🧠 Beneficiile unei vieți libere
          </button>
          <button onClick={() => onNavigate("ajutor")}>💬 Cere ajutor</button>
        </div>
      </div>

      <div id="acasa-img">
        <img src={acasaImg} alt="Droguri" />
      </div>
    </div>
  );
}
