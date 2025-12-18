import { Link, NavLink } from "react-router";
import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";
import { useState } from "react";
import Search from "./search";
import "./Header.scss";

export default function Header({ setSearchQuery }) {
  const [shopMenu, setShopMenu] = useState(false);
  const [burgerMenu, setburgerMenu] = useState(false);
  return (
    <>
      <header className="header">
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
            <NavLink to={"/shop"}>Shop</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About us</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact us</NavLink>
          </li>
        </ul>
        <ul className="header__tools">
          <li className="header__tools__input">
            <Search onSearch={setSearchQuery} />
          </li>
          <li>
            <FaUser color="white" size={25} />
          </li>
          <li>
            <FaShoppingCart color="white" size={25} />
          </li>
        </ul>
        {shopMenu && (
          <div
            onMouseEnter={() => setShopMenu(true)}
            onMouseLeave={() => setShopMenu(false)}
            className="header__shopMenu"
          >
            <div className="header__shopMenu__content">
              <ul>
                <li>
                  <NavLink to="/shop">
                    <h2>Browse Categories</h2>
                  </NavLink>
                </li>
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
          </div>
        )}
      </header>
      {/* NavBarPhone*/}
      <div className="navBar">
        <ul>
          <li>
            <button>
              <FaSearch color="white" size={22} />
            </button>
          </li>
          <li>
            <button>
              <FaUser color="white" size={22} />
            </button>
          </li>
          <li>
            <button>
              <FaShoppingCart color="white" size={22} />
            </button>
          </li>
          <li className="burger">
            <button
              onClick={() => setburgerMenu((prev) => !prev)}
              className={`burger__btn ${burgerMenu ? "open" : ""}`}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </li>
        </ul>
      </div>
      <div className={`burgerOpen ${burgerMenu ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/">
              <img src="/logo_hifi.svg" alt="" />
            </Link>
          </li>
          <li>
            <NavLink to={"/shop"}>Shop</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About us</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact us</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
