import React from "react";
import Nav from "./Nav";
import {Link} from "react-router-dom";
import ButtonComponet from './UI/button/ButtonComponet'
// import Modal from './UI/modal/Modal'
import "./css/header.scss";
import Logo from "./img/logo.png"

const Header = (props) => {
    let headerToglleClass = props.type;
    const headerNameClass = `header ${headerToglleClass}`
    return (
        <header className={headerNameClass}>
            <Link to="/" className="logo">
                <img src={Logo} alt="Logo"/>
            </Link>
            <Nav/>
            <div className="header-tools">
                <Link to="/discount-page" className="header-link">
                    Акції
                </Link>
                <ButtonComponet buttonName='Вхід'/>

                {/*<Modal/>*/}
            </div>
        </header>
    );
}

export default Header;
