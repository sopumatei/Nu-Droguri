import "./Header.css";
import { HeartPulseIcon } from "lucide-react";
import { useState } from "react";

export default function Header({ onNavigate, current, onMenu, active }) {
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
            className={current === "beneficii" ? "active" : ""}
            onClick={() => onNavigate("beneficii")}
          >
            Beneficii
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

        <div
          className={active ? "active" : ""}
          onClick={() => {
            onMenu(!active);
          }}
          id="nav-btn"
        >
          <div className="btnLine"></div>
          <div className="btnLine"></div>
          <div className="btnLine"></div>
        </div>
      </div>
    </div>
  );
}
