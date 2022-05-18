import React, {useState} from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import Nav from "./Nav";
import {ButtonComponent, ModalComponent, ModalBasket} from "./UI/index";
import useScrollHandler from "../helpers/hooks/useScrollHandler";
import "../css/header.scss";
import Logo from "../images/logo.png";
import basket from "../images/bas.png";
import {openBasketModalStatus} from "../redux/actions/basketAction";
import {useActions} from "../helpers/hooks/useActions";

const Header = () => {
    const headerNameClass = `header ${useScrollHandler()}`;
    const basketDataItems = useSelector(state => state.basket.basketData);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }
    const closeModal = () => {
        setIsModalOpen(false);
    }

    const openBasketModal = useActions(openBasketModalStatus);

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
                    <ButtonComponent onClick={openModal} buttonName='Вхід'/>
                    <div onClick={openBasketModal} className="header-basket">
                        <img src={basket} alt=""/>
                        <span className="header-basket__calck">{basketDataItems.length}</span>
                        КОШИК
                    </div>
                </div>
            </header>
            <ModalComponent
                closeModal={closeModal}
                isOpen={isModalOpen}
            />

            <ModalBasket />
        </div>

    );
};

export default Header;