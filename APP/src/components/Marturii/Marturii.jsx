import "./Marturii.css";

import CardMarturii from "./CardMarturii";
import Content from "./cardsData";

export default function Marturii() {
  return (
    <div id="marturii">
      <div id="marturii-txt">
        <h1>Mărturii</h1>

        <p>Cu toții putem trece peste aceste dificultăți.</p>
      </div>

      <div id="marturii-cards">
        {Content.map((item) => (
          <CardMarturii key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
}
