import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { Link } from "react-router";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <ul>
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
      <ul>
        <li>Returns & Refunds</li>
        <li>Delivery</li>
        <li>Privacy Policy</li>
        <li>Terms & Conditions</li>
      </ul>
      <ul>
        <h3>Contact</h3>
        <li>2 Joppa Rd, Edinburgh, EH15 2EU</li>
        <li>0131 556 7901</li>
        <li>44 Cow Wynd, Falkirk, Central Region, FK1 1PU</li>
        <li>01324 629 011</li>
        <li>
          <FaFacebookSquare color="black" /> <FaTwitterSquare /> <FaInstagramSquare />{" "}
          <FaYoutubeSquare />
        </li>
      </ul>
    </footer>
  );
}
