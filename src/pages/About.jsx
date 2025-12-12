import Header from "../components/Header";
import Footer from "../components/Footer";
import "./about.scss";
export default function About() {
  return (
    <>
      <Header />
      <div className="aboutpage__wrapper">
        <h2>Our History</h2>
        <div className="about">
          <section>
            <figure className="about__sec">
              <img src="/img/aboutpage/about(4).jpg" alt="" />
              <figcaption className="about__sec__content">
                <h3>History</h3>
                <p>
                  Established in the late 1960s, our family owned business is
                  based in Edinburgh and Falkirk, but services customers across
                  the UK.{" "}
                </p>
                <p>
                  Our Edinburgh branch has the longest history as an audio
                  retailer in the UK. During recent renovations, receipts were
                  found from Nicolson’s Gramophone Saloon dating back to 1926.
                  In the 1950s WG Graham took over the shop and renamed it WG
                  Graham’s HiFi Corner. Upon his retirement, Graham Tiso bought
                  the business and modernized the name to HiFi Horizon.{" "}
                </p>
                <p>
                  Soon thereafter a young enthusiastic Colin MacKenzie (left),
                  who was recommended by Linn’s own Ivor Tiefenbrun, was
                  employed to manage the shop; with a knack for business and
                  years of experience in the hi-fi industry, Colin would later
                  become the owner of HiFi Horizon. Today, Struan MacKenzie
                  carries on the legacy as the company’s Managing Director.{" "}
                </p>
              </figcaption>
            </figure>
            <figure className="about__sec">
              <figcaption className="about__sec__content">
                <h3>History</h3>
                <p>
                  Established in the late 1960s, our family owned business is
                  based in Edinburgh and Falkirk, but services customers across
                  the UK.{" "}
                </p>
                <p>
                  Our Edinburgh branch has the longest history as an audio
                  retailer in the UK. During recent renovations, receipts were
                  found from Nicolson’s Gramophone Saloon dating back to 1926.
                  In the 1950s WG Graham took over the shop and renamed it WG
                  Graham’s HiFi Corner. Upon his retirement, Graham Tiso bought
                  the business and modernized the name to HiFi Horizon.{" "}
                </p>
                <p>
                  Soon thereafter a young enthusiastic Colin MacKenzie (left),
                  who was recommended by Linn’s own Ivor Tiefenbrun, was
                  employed to manage the shop; with a knack for business and
                  years of experience in the hi-fi industry, Colin would later
                  become the owner of HiFi Horizon. Today, Struan MacKenzie
                  carries on the legacy as the company’s Managing Director.{" "}
                </p>
              </figcaption>
              <img src="/img/aboutpage/about(4).jpg" alt="" />
            </figure>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
