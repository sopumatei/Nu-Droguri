import "./Menu.css";

export default function Menu({ onNavigate, current, className, onMenu }) {
  return (
    <div id="menu" className={className}>
      <ul>
        <ul>
          <li
            className={current === "acasa" ? "active" : ""}
            onClick={() => {
              onNavigate("acasa");
              onMenu(0);
            }}
          >
            Acasă
          </li>
          <li
            className={current === "beneficii" ? "active" : ""}
            onClick={() => {
              onNavigate("beneficii");
              onMenu(0);
            }}
          >
            Beneficii
          </li>
          <li
            className={current === "marturii" ? "active" : ""}
            onClick={() => {
              onNavigate("marturii");
              onMenu(0);
            }}
          >
            Mărturii
          </li>
          <li
            className={current === "ajutor" ? "active" : ""}
            onClick={() => {
              onNavigate("ajutor");
              onMenu(0);
            }}
          >
            Ajutor
          </li>
        </ul>
      </ul>
    </div>
  );
}
