import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import SigmaButton from "../components/SigmaButton";
import "./home.scss";
import { Link } from "react-router";
export default function Home() {
  const [popularProducts, setPopularProducts] = useState([]);

  // Popular products
  useEffect(() => {
    fetch("http://localhost:6767/products")
      .then((res) => res.json())
      .then((data) => setPopularProducts(data.products.slice(0, 4)));
  }, []);

  return (
    <div className="homepage__wrapper">
      <Header />
      <section className="hero">
        <video
          className="hero__video"
          src="/videos/hero.mp4"
          muted
          autoPlay
          loop
        />
      </section>

      <section className="popularProducts">
        <div className="popularProducts__top">
          <h2>Popular products</h2>
          <Link to="/shop">
            <SigmaButton text={"See all products"} />
          </Link>
        </div>
        <div className="popularProducts__grid">
          {popularProducts.map((product) => (
            <ProductCard popular={true} key={product.id} product={product} />
          ))}
        </div>
      </section>
      <section className="whatWeDo">
        <div className="whatWeDo__left">
          <h2>What we do</h2>
          <p>We look forward to customising a system to meet your needs.</p>
          <p>
            We don’t favour one manufacturer over another – the only thing we do
            favour is making sure our customers get the right product that suits
            their needs and listening preferences. We will ask many questions in
            order to ensure that what you buy from us is tailored to you and you
            alone.
          </p>
          <p>
            If you are looking for a product not found in our demonstration
            showrooms or our online site, don’t fret as we have access to
            hundreds of brands.
          </p>
          <p>
            One of our biggest pleasures of working in this industry is to see
            the smile on our customers’ faces when they finally hear and see the
            system of their dreams.
          </p>
        </div>
        <div className="whatWeDo__right">
          <h2>Opening hours</h2>
          <ul className="whatWeDo__right__ul">
            <li>
              <strong>Edinburgh</strong>
            </li>
            <li>2 Joppa Rd,Edinburg, EH15 2EU</li>
            <li>Monday to Friday: 10:00am - 5:30pm</li>
            <li>Saturday: 10:00am - 5:30pm</li>
            <li>Sunday: Closed</li>
          </ul>
          <ul>
            <li>
              <strong>Falkirk</strong>
            </li>
            <li>44 Cow Wynd, Falkirk, Central Region, FK1 1PU</li>
            <li>Monday to Friday: 10:00am - 5:30pm</li>
            <li>Saturday - By appointment only</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
      </section>
      <section className="homepage__newsletter">
        <div className="homepage__newsletter__container">
          <h2 className="homepage__newsletter__container__title">
            Sign up for our newsletter
          </h2>
          <p className="homepage__newsletter__container__text">
            Subscribing to our newsletter secures you up to date information
            about HiFi Horizons latest updates and offers.
          </p>
          <form className="homepage__newsletter__container__form" action="">
            <input
              className="homepage__newsletter__container__form__input"
              type="text"
              name="signUp"
              id="signUp"
            />
            <button
              type="submit"
              className="homepage__newsletter__container__form__button"
              text={"Sign up"}
              onClick={(e) => {
                if (signUp.value === "") {
                  e.preventDefault();
                  alert("Please enter a valid email address");
                  return;
                }
                alert("Thank you for signing up!");
                e.preventDefault();
              }}
            >
              Sign up
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
