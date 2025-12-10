import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
  FaPhoneAlt,
  FaCcStripe,
  FaCcVisa,
  FaCcMastercard,
} from "react-icons/fa";
import { Link } from "react-router";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <ul className="footer__ul">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/products"}>Shop</Link>
          </li>
          <li>
            <Link to={"/about"}>About us</Link>
          </li>
        </ul>
        <ul className="footer__ul">
          <li>Returns & Refunds</li>
          <li>Delivery</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
        </ul>
        <ul className="footer__ul">
          <h3>Contact</h3>
          <li>2 Joppa Rd, Edinburgh, EH15 2EU</li>
          <li className="phone">
            <FaPhoneAlt style={{ width: "20px", height: "20px" }} />
            <span />
            0131 556 7901
          </li>
          <li>44 Cow Wynd, Falkirk, Central Region, FK1 1PU</li>
          <li className="phone">
            <FaPhoneAlt style={{ width: "20px", height: "20px" }} />
            <span />
            01324 629 011
          </li>
          <li>
            <FaFacebookSquare
              style={{
                color: "white",
                background: "black",
                width: "24px",
                height: "24px",
              }}
            />{" "}
            <FaTwitterSquare
              style={{
                color: "white",
                background: "black",
                width: "24px",
                height: "24px",
              }}
            />{" "}
            <FaInstagramSquare
              style={{
                color: "white",
                background: "black",
                width: "24px",
                height: "24px",
              }}
            />{" "}
            <FaYoutubeSquare
              style={{
                color: "white",
                background: "black",
                width: "24px",
                height: "24px",
              }}
            />
          </li>
        </ul>
      </div>
      <div className="footer__div">
        <ul className="footer__div__ul">
          <li>
            <FaCcStripe style={{ width: "42px", height: "33px" }} />
          </li>
          <li>
            <FaCcVisa style={{ width: "42px", height: "33px" }} />
          </li>
          <li>
            <FaCcMastercard style={{ width: "42px", height: "33px" }} />
          </li>
        </ul>
        <div className="footer__div__container">
          <p className="footer__div__container__p">
            HiFi Horizon (Edinburgh) Ltd is registered in Scotland. No:
            SC049298. Registered office: 2 Joppa Rd, Edinburgh EH15 2EU
          </p>
          <p className="footer__div__container__p">Designed by WU14 :)</p>
        </div>
      </div>
    </footer>
  );
}
