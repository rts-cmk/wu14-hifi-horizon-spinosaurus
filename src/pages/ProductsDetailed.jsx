import { useEffect, useState } from "react";
import Header from "../components/Header";
import { useLoaderData } from "react-router";
import { FaPlus, FaMinus } from "react-icons/fa";
import { FaSliders } from "react-icons/fa6";

import "./productsDetailed.scss";

export default function ProductsDetails() {
  const [cart, setCart] = useState([]);
  const [addToCart, setAddToCart] = useState(1);

  const [selected, setSelected] = useState("");

  const [localCart, setLocalCart] = useState();
  const { product: products } = useLoaderData();
  const getStockStatus = (stock) => {
    if (stock === 0) return "Out of stock";
    if (stock >= 1 && stock <= 3) return "Few in stock";
    return "In stock";
  };

  console.log(cart);

  const stockStatus = getStockStatus(products.stock);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setLocalCart(JSON.parse(storedCart));
    }
  }, []);

  return (
    <>
      <Header />
      <div className="productsDetails">
        <h1 className="productsDetails__title">product</h1>
        <section className="productsDetails__section">
          <figure className="productsDetails__section__figure">
            <img src={products.image} alt="" />
          </figure>
          <div className="productsDetails__section__info">
            <button className="productCard__compare">
              Compare &nbsp; <FaSliders className="adjust__icon" size={18} />
            </button>
            <h2 className="productsDetails__section__info__name">
              {products.name}
            </h2>
            <p className="productsDetails__section__info__description">
              {products.description}
            </p>
            <div className="productsDetails__section__info__color">
              {products.color.map((color, index) => {
                return (
                  <button
                    onClick={() => {
                      setSelected(color);
                    }}
                    className="productsDetails__section__info__color__button"
                  >
                    <span
                      key={index}
                      className="productsDetails__section__info__color__button__circle"
                      style={{
                        backgroundColor: color,
                        border: selected == color ? "2px solid white" : "none",
                        outline: selected == color ? `solid black 2px` : "none",
                      }}
                    ></span>
                    {color}
                  </button>
                );
              })}
            </div>
            <div className="productsDetails__section__info__pricing">
              <p className="productsDetails__section__info__pricing__price">
                {products.price}
              </p>
              <p className="productsDetails__section__info__pricing__stock">
                {stockStatus}
                <span
                  className={`stock__circle ${
                    products.stock === 0
                      ? "red"
                      : products.stock <= 3
                      ? "orange"
                      : "green"
                  }`}
                ></span>
              </p>
            </div>
            <div className="productsDetails__section__info__cart">
              <button
                onClick={() => {
                  if (addToCart <= 1) {
                    return;
                  }
                  setAddToCart(addToCart - 1);
                }}
              >
                <FaMinus />
              </button>
              <p>{addToCart}</p>
              <button onClick={() => setAddToCart(addToCart + 1)}>
                <FaPlus />
              </button>
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
                        alert("du kan ikke overskride lagerbeholdningen");
                        return prevCart;
                      }
                      return prevCart.map((item) =>
                        item.id === products.id
                          ? {
                              ...item,
                              quantity: item.quantity + addToCart,
                              selectedColor: selected,
                            }
                          : item
                      );
                    }
                    return [
                      ...prevCart,
                      {
                        ...products,
                        quantity: addToCart,
                        selectedColor: selected,
                      },
                    ];
                  });
                }}
                className="productsDetails__section__info__cart__cartButton"
              >
                Add to cart
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
