import React, { useState } from "react";
import "./Beneficii.css";
import CardBeneficii from "./CardBeneficii";
import content from "./cardsData";

export default function Beneficii() {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleCardClick = (title) => {
    setExpandedCard(expandedCard === title ? null : title);
  };

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
          <CardBeneficii
            key={item.title}
            {...item}
            isExpanded={expandedCard === item.title}
            onClick={() => handleCardClick(item.title)}
          />
        ))}
      </div>
    </div>
  );
}
