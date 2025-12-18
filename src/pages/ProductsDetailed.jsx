import { useEffect, useState, useRef } from "react";
import { useLoaderData } from "react-router";
import { FaPlus, FaMinus, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { FaSliders } from "react-icons/fa6";

import "./productsDetailed.scss";

export default function ProductsDetails() {
  const [cart, setCart] = useState(
    localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  );
  const [addToCart, setAddToCart] = useState(1);
  const [selected, setSelected] = useState("");

  const { product: products } = useLoaderData();

  const getStockStatus = (stock) => {
    if (stock === 0) return "Out of stock";
    if (stock >= 1 && stock <= 3) return "Few in stock";
    return "In stock";
  };

  const stockStatus = getStockStatus(products.stock);

  console.log(cart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef(null);
  const totalSlides = products.image.length;

  const updateSlide = (index) => {
    slidesRef.current.style.transform = `translateX(-${index * 100}%)`;
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % totalSlides;
    setCurrentIndex(newIndex);
    updateSlide(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    setCurrentIndex(newIndex);
    updateSlide(newIndex);
  };

  return (
    <>
      <main className="productsDetails">
        <h2 className="page__title">product</h2>
        <section className="productsDetails__section">
          <figure className="productsDetails__section__figure slider">
            <button id="prevBtn" onClick={prevSlide}>
              <FaAngleLeft />
            </button>
            <div className="slider_container">
              <div className="slides" ref={slidesRef}>
                {products.image.map((img, index) => {
                  return (
                    <div className="slide">
                      <img key={index} src={img} />
                    </div>
                  );
                })}
              </div>
            </div>
            <button id="nextBtn" onClick={nextSlide}>
              <FaAngleRight />
            </button>
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
                  if (!selected) {
                    return alert("Vælg en farve først");
                  }

                  setCart((prevCart) => {
                    if (!Array.isArray(prevCart)) return [];

                    const existing = prevCart.find(
                      (item) =>
                        item.id === products.id &&
                        item.selected_color === selected
                    );

                    if (existing) {
                      if (existing.quantity + addToCart > products.stock) {
                        alert("du kan ikke overskride lagerbeholdningen");
                        return prevCart;
                      }

                      return prevCart.map((item) =>
                        item.id === products.id &&
                        item.selected_color === selected
                          ? {
                              ...item,
                              quantity: item.quantity + addToCart,
                            }
                          : item
                      );
                    }

                    return [
                      ...prevCart,
                      {
                        ...products,
                        quantity: addToCart,
                        selected_color: selected,
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
                <div className="border" />
        <section className="specs">
          <h2>Product Specificatons</h2>
          <ul className="specs__ul">
            <li>
              <span>HOLA</span>
              <span>HOLA</span>
            </li>
            <li>
              <span>HOLA</span>
              <span>HOLA</span>
            </li>
            <li>
              <span>HOLA</span>
              <span>HOLA</span>
            </li>
            <li>
              <span>HOLA</span>
              <span>HOLA</span>
            </li>
            <li>
              <span>HOLA</span>
              <span>HOLA</span>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
