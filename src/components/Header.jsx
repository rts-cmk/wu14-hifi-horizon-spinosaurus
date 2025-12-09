import { NavLink } from "react-router";
import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";
import { useState } from "react";
import "./Header.scss";

export default function Header() {
  const [shopMenu, setShopMenu] = useState(false);
  return (
    <div className="header">
      <ul className="header__links">
        <li>
          <NavLink to={"/"}>
            <img src="/logo_hifi.svg" alt="hifi_logo" />
          </NavLink>
        </li>
        <li
          onMouseEnter={() => setShopMenu(true)}
          onMouseLeave={() => setShopMenu(false)}
          className="header__shop"
        >
          <NavLink to={"/"}>Shop</NavLink>
          {shopMenu && (
            <div className="header__shopMenu">
                <h2>Browse Categories</h2>
                <ul>
                    <li>CD Players</li>
                    <li>DVD Players</li>
                    <li>Preamps</li>
                    <li>Speakers</li>
                    <li>Turntables</li>
                    <li>Integrated Amplifiers</li>
                    <li>Power Amplifiers</li>
                    <li>Tube Amplifiers</li>
                </ul>
            </div>
        )}
        </li>
        <li>
          <NavLink to={"/"}>About us</NavLink>
        </li>
        <li>
          <NavLink to={"/"}>Contact us</NavLink>
        </li>
      </ul>
      <ul className="header__tools">
        {/*input component????????*/}
        <li className="header__tools__input">
          <input type="text" placeholder="Search product..." />
          <button>
            <FaSearch size={20} />
          </button>
        </li>
        <li>
          <FaUser color="white" size={25} />
        </li>
        <li>
          <FaShoppingCart color="white" size={25} />
        </li>
      </ul>
    </div>
  );
}
