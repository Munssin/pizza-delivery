import React from "react";
import {Link} from "react-router-dom";
import "../css/footer.scss";
import Logo from "../img/logo.png"

const Footer = () => {

    return (
        <footer className="footer">
            <a href="" className="logo">
                <img src={Logo} alt="Logo"/>
            </a>
            <div className="footer-nav">
                <Link to="/discount-page" className="footer-link">
                    Акції
                </Link>
                <Link to="/discount-page" className="footer-link">
                    Про нас
                </Link>
                <Link to="/discount-page" className="footer-link">
                    Умови доставки
                </Link>
                <Link to="/discount-page" className="footer-link">
                    Політика конфеденційності
                </Link>
            </div>
            <ul className="footer-contact">
                <li><span>Телефон:</span> 38 (093) 112 92 38</li>
                <li><span>Адреса:</span>м. Львів, вул. Чорновола 12</li>
            </ul>
        </footer>
    );
}

export default Footer;