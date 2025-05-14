import "./Header.css";
import { HeartPulseIcon } from "lucide-react";

export default function Header() {
  return (
    <div id="header">
      <div id="header-content">
        <div id="header-title">
          <HeartPulseIcon id="header-icon" />
          <h1>Alege viața, nu drogurile</h1>
        </div>

        <ul>
          <li>Acasă</li>
          <li>Despre</li>
          <li>Mărturii</li>
          <li>Ajutor</li>
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
