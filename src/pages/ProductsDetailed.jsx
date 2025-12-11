import { useEffect, useState } from "react";
import Header from "../components/Header";
import { useParams } from "react-router";

export default function ProductsDetails() {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);
  const [addToCart, setAddToCart] = useState(1);

  console.log(cart);

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
          <button
            onClick={() => {
              if (addToCart <= 1) {
                return;
              }
              setAddToCart(addToCart - 1);
            }}
          >
            minus
          </button>
          <p>{addToCart}</p>
          <button onClick={() => setAddToCart(addToCart + 1)}>plus</button>
          <br />
          <button
            onClick={() => {
              if (!products || !products.id) {
                return alert("produktet kan ikke tilføjes til kurven");
              }

              if (addToCart <= 0 || products.stock < addToCart) {
                return alert(
                  "du kan ikke tilføje 0 til kurven eller overskride lagerbeholdningen"
                );
              }

              setCart((prevCart) => {
                if (!Array.isArray(prevCart)) return [];

                const existing = prevCart.find(
                  (item) => item.id === products.id
                );
                if (existing) {
                  if (existing.quantity + addToCart > products.stock) {
                    return alert("du kan ikke overskride lagerbeholdningen");
                  }
                  return prevCart.map((item) =>
                    item.id === products.id
                      ? { ...item, quantity: item.quantity + addToCart }
                      : item
                  );
                }
                return [...prevCart, { ...products, quantity: addToCart }];
              });
            }}
            className="productsDetails__section__info__cartButton"
          >
            Add to cart
          </button>
        </div>
      </section>
    </div>
  );
}
