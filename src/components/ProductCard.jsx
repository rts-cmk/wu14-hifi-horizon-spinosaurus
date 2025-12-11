import SigmaButton from "./SigmaButton";
import { FaSliders } from "react-icons/fa6";

export default function ProductCard({ product, popular }) {
  if (!product) return null;

  const getStockStatus = (stock) => {
    if (stock === 0) return "Out of stock";
    if (stock >= 1 && stock <= 3) return "Few in stock";
    return "In stock";
  };

  const stockStatus = getStockStatus(product.stock);

  return (
    <figure className="productCard">
      <div className="productCard__img">
        <img src={product.image} alt={product.name} />
      </div>
      <figcaption className="productCard__content">
        <div>
          <p>{product.name}</p>
          <p>{`${product["short-des"]}`}</p>
        </div>
        <h4>{product.price}</h4>
        <div className="productCard__content__bottom">
          <SigmaButton text={popular ? "Read more" : "Add to cart"} />
          <p>
            {stockStatus}
            <span
              className={`stock__circle ${
                product.stock === 0 ? "red" : product.stock <= 3 ? "orange" : "green"
              }`}
            ></span>
          </p>
        </div>
      </figcaption>
      <button className="productCard__compare">
        Compare <FaSliders className="adjust__icon" size={18} />
      </button>
    </figure>
  );
}
