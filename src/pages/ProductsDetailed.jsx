import { useEffect, useState } from "react";
import Header from "../components/Header";
import { useParams } from "react-router";

export default function ProductsDetails() {
  const [products, setProducts] = useState([]);
    
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
        <figure>
            <img src={products.image} alt="" />
        </figure>
      </section>
    </div>
  );
}
