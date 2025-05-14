import "./Footer.css";

export default function Footer() {
  let date = new Date();
  let currentYear = date.getFullYear();
  return (
    <p id="footer-txt">
      © {currentYear}. Toate drepturile sunt rezervate lui Șopu Matei.
    </p>
  );
}
