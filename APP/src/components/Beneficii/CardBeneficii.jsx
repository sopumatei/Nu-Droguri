export default function CardBeneficii({ image, title, text }) {
  const Icon = image;

  return (
    <div onClick={() => console.log("click", title)} className="card-beneficii">
      <div className="card-img">
        <Icon className="card-icon" />
      </div>

      <h1>{title}</h1>

      <p>{text}</p>
    </div>
  );
}
