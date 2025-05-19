import "./Ajutor.css";

export default function Ajutor() {
  return (
    <div id="ajutor">
      <div id="ajutor-txt">
        <h1>Pregătit să faci primul pas?</h1>
        <p>
          Să ceri ajutor este un semn de putere, nu de slăbiciune. Preia
          controlul asupra vieții tale astăzi.
        </p>
      </div>
      <form action="https://formspree.io/f/mvgaypkl" method="POST">
        <div className="form-input">
          <label>E-mail:</label>
          <input required className="form-txt" type="email" name="email" />
        </div>

        <div className="form-input">
          <label>Mesaj:</label>
          <textarea required className="form-txt" name="mesaj"></textarea>
        </div>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}
