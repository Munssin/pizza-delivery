import React from "react";
import {Link} from "react-router-dom";
import {useActions} from "../../helpers/hooks/useActions";
import {closeBasketModalStatus} from "../../redux/actions/basketAction";

const Nav = () => {
    const closeBasketModal = useActions(closeBasketModalStatus);
    const tabs = [
        { name: "Піца", path: "/" },
        { name: "Напої", path: "drink-page" },
        { name: "Салати", path: "salat-page" },
    ];

    return (
        <nav className="nav">
            <ul className="nav__list">
                {
                    tabs.map(tab => (
                        <li className="nav__item" key={tab.name}>
                            <Link
                                to={tab.path}
                                className="nav__link"
                                onClick={closeBasketModal}
                            >
                                {tab.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
};

export default Nav;