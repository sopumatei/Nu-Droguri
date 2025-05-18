export default function CardBeneficii({ image, title, text }) {
  const Icon = image;

  return (
    <div class="card-beneficii">
      <div class="card-img">
        <Icon className="card-icon" />
      </div>

      <h1>{title}</h1>

      <p>{text}</p>
    </div>
  );
}
