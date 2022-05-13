import React from "react";
import {Link} from "react-router-dom";
import {useActions} from "../helpers/hooks/useActions";
import {closeBasketModalStatus} from "../redux/actions/basketAction";

const Nav = () => {
    const closeFuncBasketModalStatus = useActions(closeBasketModalStatus);
    const tabs = [
        { name: "Піца", path: "/" },
        { name: "Напої", path: "drink-page" },
        { name: "Салати", path: "salat-page" },
    ];

    return (
        <nav className="nav">
            <ul className="nav__list">
                {/*<li className="nav__item">*/}
                {/*    <Link*/}
                {/*        to="/"*/}
                {/*        className="nav__link"*/}
                {/*        onClick={changeBasketModalStatus}*/}
                {/*    >*/}
                {/*        Піца*/}
                {/*    </Link>*/}
                {/*</li>*/}
                {/*<li className="nav__item">*/}
                {/*    <Link to="drink-page" className="nav__link">Напої</Link>*/}
                {/*</li>*/}
                {/*<li className="nav__item">*/}
                {/*    <Link to="salat-page" className="nav__link">Салати</Link>*/}
                {/*</li>*/}
                {
                    tabs.map(tab => (
                        <li className="nav__item" key={tab.name}>
                            <Link
                                to={tab.path}
                                className="nav__link"
                                onClick={closeFuncBasketModalStatus}
                            >
                                {tab.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
}

export default Nav;
