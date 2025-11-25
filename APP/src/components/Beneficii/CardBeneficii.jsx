export default function CardBeneficii({
  image,
  title,
  text,
  expandedText,
  isExpanded,
  onClick,
}) {
  const Icon = image;

  return (
    <div
      onClick={onClick}
      className={`card-beneficii ${isExpanded ? "expanded" : ""}`}
    >
      <div className="card-img">
        <Icon className="card-icon" />
      </div>
      <h1>{title}</h1>
      <p>{text}</p>
      {isExpanded && <p>{expandedText}</p>}{" "}
    </div>
  );
}
