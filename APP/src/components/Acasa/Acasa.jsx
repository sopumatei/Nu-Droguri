import "./Acasa.css";
import acasaImg from "../../assets/drugs_1.jpg";

export default function Acasa() {
  return (
    <div id="acasa">
      <div className="container">
        <div className="txt-container">
          <h1>Alege viața. Nu drogurile</h1>

          <p>
            Bine ai venit! Acest site este un spațiu sigur, dedicat celor care
            aleg să trăiască liberi, conștienți și sănătoși. Drogurile nu sunt o
            soluție — sunt o capcană. Noi suntem aici să te ascultăm, să te
            încurajăm și să îți arătăm că se poate trăi frumos fără ele.
          </p>
        </div>

        <div id="acasa-btns">
          <button>📚 Citește povești reale</button>
          <button>🧠 Află cum poți spune NU</button>
          <button>💬 Vorbește cu noi</button>
        </div>
      </div>

      <div className="container">
        <img src={acasaImg} alt="Droguri" />
      </div>
    </div>
  );
}
