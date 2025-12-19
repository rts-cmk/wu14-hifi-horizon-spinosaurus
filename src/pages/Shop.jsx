import { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import ProductCard from "../components/ProductCard";
import "./shop.scss";
export default function Shop() {
  const [sortPhone, setSortPhone] = useState(false);
  const [sortBrand, setSortBrand] = useState(false);
  const [sortColor, setSortColor] = useState(false);
  const [sortPrice, setSortPrice] = useState();
  const [products, setProducts] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // Get products
  useEffect(() => {
    fetch("http://localhost:6767/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  // Brands and Colors
  const brands = ["steelseries", "logitech", "apple"];

  const colors = ["silver", "grey", "black"];

  const handleBrandChange = (brand, checked) => {
    setSelectedBrands((prev) =>
      checked ? [...prev, brand] : prev.filter((b) => b !== brand),
    );
  };

  const handleColorChange = (color, checked) => {
    setSelectedColors((prev) =>
      checked ? [...prev, color] : prev.filter((c) => c !== color),
    );
  };

  const parsePrice = (priceStr) =>
    parseFloat(priceStr.replace("£ ", "").replace(",", "."));

  let filtered = products;
  if (selectedBrands.length > 0)
    filtered = filtered.filter((p) => selectedBrands.includes(p.brand));
  if (selectedColors.length > 0)
    filtered = filtered.filter((p) =>
      p.color.some((c) => selectedColors.includes(c)),
    );
  if (minPrice)
    filtered = filtered.filter(
      (p) => parsePrice(p.price) >= parseFloat(minPrice),
    );
  if (maxPrice)
    filtered = filtered.filter(
      (p) => parsePrice(p.price) <= parseFloat(maxPrice),
    );
  const filteredProducts = filtered;

  return (
    <div className="shoppage__wrapper">
      <h2>Products:</h2>
      <section className="products">
        <button
          type="button"
          onClick={() => setSortPhone((prev) => !prev)}
          className={`sort__phone__btn ${sortPhone ? "active" : ""}`}
        >
          <FaAngleDown />
        </button>
        <div className={`sort ${sortPhone ? "active" : ""}`}>
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
                  <label className="checkbox" htmlFor={brand}>
                    {brand.charAt(0).toUpperCase() + brand.slice(1)}{" "}
                    <input
                      id={brand}
                      name={brand}
                      type="checkbox"
                      checked={selectedBrands.includes(brand)}
                      onChange={(e) =>
                        handleBrandChange(brand, e.target.checked)
                      }
                    />
                    <span className="checkmark" />
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
                  <label className="checkbox" htmlFor={color}>
                    {color.charAt(0).toUpperCase() + color.slice(1)}
                    <input
                      name={color}
                      id={color}
                      type="checkbox"
                      checked={selectedColors.includes(color)}
                      onChange={(e) =>
                        handleColorChange(color, e.target.checked)
                      }
                    />
                    <span className="checkmark" />
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
                    placeholder="Min price"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    min={0}
                  />
                  <span>£</span>
                </div>

                <span className="price__dash">-</span>

                <div className="price__box">
                  <input
                    className="price__input"
                    type="number"
                    placeholder="Max price"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    min={0}
                  />
                  <span>£</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="products__wrapper">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
