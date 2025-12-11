import { FaAngleDown } from "react-icons/fa6";
import { useEffect, useState, useMemo } from "react";
import ProductCard from "../components/ProductCard";
import "./shop.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function Shop() {
  const [sortBrand, setSortBrand] = useState(false);
  const [sortCategory, setSortCategory] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [products, setProducts] = useState([]);

  // Get products
  useEffect(() => {
    fetch("http://localhost:6767/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  // Get unique brands and categories
  const brands = useMemo(() => {
    return [...new Set(products.map((p) => p.name.split(" ")[0]))].sort();
  }, [products]);

  const categories = useMemo(() => {
    return [...new Set(products.map((p) => p.category))].sort();
  }, [products]);

  // Filter products based on selections
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const brand = product.name.split(" ")[0];
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(brand);
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
      return matchesBrand && matchesCategory;
    });
  }, [products, selectedBrands, selectedCategories]);

  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

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
              <ul className={`sort__by__type__wrapper ${sortBrand ? "open" : ""}`}>
                {brands.map((brand) => (
                  <li key={brand}>
                    {brand}
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(brand)}
                      onChange={() => handleBrandChange(brand)}
                    />
                  </li>
                ))}
              </ul>
            </div>

            <div className="sort__by">
              <div
                onClick={() => setSortCategory((prev) => !prev)}
                className="sort__by__type"
              >
                <p>Category</p>
                <FaAngleDown className={sortCategory ? "rotated" : ""} />
              </div>
              <ul className={`sort__by__type__wrapper ${sortCategory ? "open" : ""}`}>
                {categories.map((category) => (
                  <li key={category}>
                    {category}
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category)}
                      onChange={() => handleCategoryChange(category)}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="products__wrapper">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
