import React from "react";
import {Link} from "react-router-dom";

const Nav = (props) => {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item">
                    <Link to="/" className="nav__link">Піца</Link>
                </li>
                <li className="nav__item">
                    <Link to="drink-page" className="nav__link">Напої</Link>
                </li>
                <li className="nav__item">
                    <Link to="salat-page" className="nav__link">Салати</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
