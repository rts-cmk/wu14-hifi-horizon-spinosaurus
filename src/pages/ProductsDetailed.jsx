import { useEffect, useState } from "react";
import Header from "../components/Header";
import { useParams } from "react-router";

export default function ProductsDetails() {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState(1);
    
  const { id } = useParams();

  const URL = `http://localhost:6767/product/${id}`;

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="productsDetails">
        <Header />
      <h1 className="productsDetails__title">product</h1>
      <section className="productsDetails__section">
        <figure className="productsDetails__section__figure">
            <img src={products.image} alt="" />
        </figure>
        <div className="productsDetails__section__info">
            <h2>{products.name}</h2>
            <p>{products.description}</p>
            <button>{products.color}</button>
            <div className="productsDetails__section__info__pricing">
              <p>{products.price}</p>
              <p>{products.stock}</p>
              <div className="productsDetails__section__info__pricing__stockValue"></div>
            </div>
          <button onClick={() => {
            if (cart <= 1) {
              return;
            }
            setCart(cart - 1);
          }} >minus</button>
          <p>{cart}</p>
          <button onClick={() => setCart(cart + 1)}>plus</button>
          <button onClick={() => {
            
          }} className="productsDetails__section__info__cartButton">Add to cart</button>
        </div>
      </section>
    </div>
  );
}
