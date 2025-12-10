import SigmaButton from "./SigmaButton";

export default function ProductCard({ product }) {
  return (
    <figure className="productCard">
      <div className="productCard__img">
        <img src="https://placehold.co/400" alt="jj" />
      </div>
      <figcaption className="productCard__content">
        <p>Auralic Aries G2.1 Streamer</p>
        <p>{"(Digital Output)"}</p>
        <h3>£ 4,799.00</h3>
        <div>
          <SigmaButton text={"Read More"} />
        </div>
      </figcaption>
      <button className="productCard__compare">Compare</button>
    </figure>
  );
}
