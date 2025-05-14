import "./Header.css";
import { HeartPulseIcon } from "lucide-react";

export default function Header({ onNavigate, current }) {
  return (
    <div id="header">
      <div id="header-content">
        <div id="header-title">
          <HeartPulseIcon id="header-icon" />
          <h1>Alege viața, nu drogurile</h1>
        </div>

        <ul>
          <li
            className={current === "acasa" ? "active" : ""}
            onClick={() => onNavigate("acasa")}
          >
            Acasă
          </li>
          <li
            className={current === "despre" ? "active" : ""}
            onClick={() => onNavigate("despre")}
          >
            Despre
          </li>
          <li
            className={current === "marturii" ? "active" : ""}
            onClick={() => onNavigate("marturii")}
          >
            Mărturii
          </li>
          <li
            className={current === "ajutor" ? "active" : ""}
            onClick={() => onNavigate("ajutor")}
          >
            Ajutor
          </li>
        </ul>

        <div id="nav-btn">
          <div className="btnLine"></div>
          <div className="btnLine"></div>
          <div className="btnLine"></div>
        </div>
      </div>
    </div>
  );
}
