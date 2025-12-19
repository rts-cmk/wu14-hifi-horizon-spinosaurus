import { FaMinus, FaPlus } from "react-icons/fa";
import CheckoutStepper from "../components/CheckoutStepper";
import Footer from "../components/Footer";
import Header from "../components/Header";

import "./cartpage.scss";
import { useState } from "react";

export default function CartPage() {
  const cartItems = JSON.parse(localStorage.getItem("cart"));

  const [addToCart, setAddToCart] = useState(1);
  console.log(addToCart);

  const getStockStatus = (stock) => {
    if (stock === 0) return "Out of stock";
    if (stock >= 1 && stock <= 3) return "Few in stock";
    return "In stock";
  };

  const stockStatus = getStockStatus(cartItems.stock);

  return (
    <>
      <Header />
      <main className="cartPage">
        <CheckoutStepper currentStep="cart" />
        <h1>Cart</h1>
        <ul className="cartPage__list">
          {cartItems.map((item, index) => {
            return (
              <li key={index}>
                <img src={item.image[0]} alt={item.name} />
                <div className="cartPage__list__stockInfo">
                  <h3>{item.name}</h3>
                  <div>
                    <p className="productsDetails__section__info__pricing__stock">
                      {item.stock}
                      &nbsp;
                      {stockStatus}
                      <span
                        className={`stock__circle ${
                          item.stock === 0
                            ? "red"
                            : item.stock <= 3
                            ? "orange"
                            : "green"
                        }`}
                      ></span>
                    </p>
                  </div>
                </div>
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
              </li>
            );
          })}
        </ul>
      </main>
      <Footer />
    </>
  );
}
