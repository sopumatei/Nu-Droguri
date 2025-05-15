import "./Beneficii.css";

import CardBeneficii from "./CardBeneficii";
import content from "./cardsData";

export default function Beneficii() {
  return (
    <div id="beneficii">
      <div id="beneficii-txt">
        <h1>Beneficiile unei vieți fără droguri</h1>
        <p>
          A trăi fără droguri îți permite să trăiești viața la potențialul ei
          maxim.
        </p>
      </div>

      <div id="beneficii-cards">
        {content.map((item) => (
          <CardBeneficii key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
}
