import { FaAngleDown } from "react-icons/fa6";
import { useEffect, useState, useMemo } from "react";
import ProductCard from "../components/ProductCard";
import "./shop.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function Shop() {
  const [sortBrand, setSortBrand] = useState(false);
  const [sortColor, setSortColor] = useState(false);
  const [sortPrice, setSortPrice] = useState();
  const [products, setProducts] = useState([]);

  // Get products
  useEffect(() => {
    fetch("http://localhost:6767/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  // Brands and Colors
  const brands = ["SteelSeries", "Logitech", "Apple"];

  const colors = ["Black", "White", "Gray"];

  return (
    <>
      <Header />
      <div className="shoppage__wrapper">
        <h2>Products:</h2>
        <section className="products">
          <div className="sort">
            <h3>Sort by</h3>
            <div className="sort__by">
              <div
                onClick={() => setSortBrand((prev) => !prev)}
                className="sort__by__type"
              >
                <p>Brand</p>
                <FaAngleDown className={sortBrand ? "rotated" : ""} />
              </div>
              <ul
                className={`sort__by__type__wrapper ${sortBrand ? "open" : ""}`}
              >
                {brands.map((brand) => (
                  <li key={brand}>
                    <label className="nigga" htmlFor={brand}>
                      {brand} <input id={brand} name={brand} type="checkbox" />
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sort__by">
              <div
                onClick={() => setSortColor((prev) => !prev)}
                className="sort__by__type"
              >
                <p>Colors</p>
                <FaAngleDown className={sortColor ? "rotated" : ""} />
              </div>
              <ul
                className={`sort__by__type__wrapper ${sortColor ? "open" : ""}`}
              >
                {colors.map((color) => (
                  <li key={color}>
                    <label htmlFor={color}>
                      {color}
                      <input name={color} id={color} type="checkbox" />
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            <div className="sort__by">
              <div
                onClick={() => setSortPrice((prev) => !prev)}
                className="sort__by__type"
              >
                <p>Price</p>
                <FaAngleDown className={sortPrice ? "rotated" : ""} />
              </div>
              <div
                className={`sort__by__type__wrapper ${sortPrice ? "open" : ""}`}
              >
                <div className="price">
                  <div className="price__box">
                    <input
                      className="price__input"
                      type="number"
                      min={50}
                      max={10000}
                    />
                    <span>kr</span>
                  </div>

                  <span className="price__dash">-</span>

                  <div className="price__box">
                    <input
                      className="price__input"
                      type="number"
                      min={50}
                      max={10000}
                    />
                    <span>kr</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="products__wrapper">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
