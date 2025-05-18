export default function CardMarturii({ image, title, text }) {
  return (
    <div className="card-marturii">
      <img src={image} alt={title} />

      <h1>{title}</h1>

      <p>{text}</p>
    </div>
  );
}
