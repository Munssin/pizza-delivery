import React, {useState} from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import Nav from "./Nav";
import {ButtonComponent, ModalComponent, ModalBasket} from "./UI/index";
import useScrollHandler from "../helpers/hooks/useScrollHandler";

import Logo from "../images/logo.png";
import basket from "../img/bas.png";
import {openBasketModalStatus} from "../redux/actions/basketAction";
import {useActions} from "../helpers/hooks/useActions";
import "../css/header.scss";

const Header = () => {
    const [isBasketOpen, setIsBasketOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const basketDataItems = useSelector(state => state.basket.basketData);

    const headerNameClass = `header ${useScrollHandler()}`;

    return (
        <div>
            <header  className={headerNameClass}>
                <Link to="/" className="logo">
                    <img src={Logo} alt="Logo"/>
                </Link>
                <Nav/>
                <div className="header-tools">
                    <Link to="/discount-page" className="header-link">
                        Акції
                    </Link>
                    <ButtonComponent onClick={() => setIsModalOpen(true)} buttonName='Вхід'/>
                    <div onClick={() => setIsBasketOpen(true)} className="header-basket">
                        <img src={basket} alt=""/>
                        <span className="header-basket__calck">{basketDataItems.length}</span>
                        КОШИК
                    </div>
                </div>
            </header>
            <ModalComponent
                closeModal={() => setIsModalOpen(false)}
                isOpen={isModalOpen}
            />
            <ModalBasket
                closeBasket={() => setIsBasketOpen(false)}
                isBasketOpen={isBasketOpen}
            />
        </div>
    );
};

export default Header;