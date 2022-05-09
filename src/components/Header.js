import React, {useState} from "react";
import Nav from "./Nav";
import {Link} from "react-router-dom";
import ButtonComponet from './UI/button/ButtonComponet';
import ModalComponent from './UI/modal/ModalComponent';
import ModalBasket from './UI/modal/ModalBasket';
import useScrollHandler from "../helpers/hooks/useScrollHandler";
import "../css/header.scss";
import Logo from "../img/logo.png";
import basket from "../img/bas.png";

const Header = (props) => {
    const headerNameClass = `header ${useScrollHandler()}`;

    const [isModalOpen, setIsModalOpen] = useState(false);


    const openModal = () => {
        setIsModalOpen(true);
    }
    const closeModal = () => {
        setIsModalOpen(false);
    }

    const [isBasketOpen, setIsBasketOpen] = useState(false);
    const openBasket = () => {
        setIsBasketOpen(true);
    }
    const closeBasket = () => {
        setIsBasketOpen(false);
    }
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
                    <ButtonComponet onClick={openModal} buttonName='Вхід'/>
                    <div onClick={openBasket} className="header-basket">
                        <img src={basket} alt=""/>
                        <span className="header-basket__calck">1</span>
                        КОШИК
                    </div>
                </div>
            </header>
            <ModalComponent
                closeModal={closeModal}
                isOpen={isModalOpen}
            />

            <ModalBasket
                closeBasket={closeBasket}
                isBasketOpen={isBasketOpen}
            />
        </div>

    );
}

export default Header;
