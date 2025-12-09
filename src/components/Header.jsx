import { NavLink } from "react-router";
import { FaUser, FaShoppingCart, FaSearch} from "react-icons/fa";
import './Header.scss'

export default function Header(){
    return (
        <div className="header">
            <ul className="header__links">
                <li><NavLink to={"/"}><img src="/logo_hifi.svg" alt="hifi_logo" /></NavLink></li>
                <li><NavLink to={"/"}>Shop</NavLink></li>
                <li><NavLink to={"/"}>About us</NavLink></li>
                <li><NavLink to={"/"}>Contact us</NavLink></li>
            </ul>
            <ul className="header__tools">
                {/*input component????????*/}
                <li className="header__tools__input"><input type="text" placeholder="Search product..." /><button><FaSearch size={20} /></button></li>
                <li><FaUser color="white" size={25} /></li>
                <li><FaShoppingCart color="white" size={25} /></li>
            </ul>
        </div>
    )
}