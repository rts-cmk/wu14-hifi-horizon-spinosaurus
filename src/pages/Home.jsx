import Header from "../components/Header";
import "./home.scss";
export default function Home() {
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
      <section className="whatWeDo">
        <div>
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
        <div>
          <h2>Opening hours</h2>
          <ul>
            <li>Edinburgh</li>
            <li>2 Joppa Rd,Edinburg, EH15 2EU</li>
            <li>Monday to Friday: 10:00am - 5:30pm</li>
            <li>Saturday: 10:00am - 5:30pm</li>
            <li>Sunday: Closed</li>
          </ul>
          <ul>
            <li>Falkirk</li>
            <li>44 Cow Wynd, Falkirk, Central Region, FK1 1PU</li>
            <li>Monday to Friday: 10:00am - 5:30pm</li>
            <li>Saturday - By appointment only</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
