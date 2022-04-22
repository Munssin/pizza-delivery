import React from "react";
import Nav from "./Nav";
import ButtonComponet from './UI/button/ButtonComponet'
import Modal from './UI/modal/Modal'
import "./css/header.scss";

const Header = (props) => {
    let headerToglleClass = props.type;
    const headerNameClass = `header ${headerToglleClass}`
    return (
        <header className={headerNameClass}>
            <a href="" className="logo">
                <img src="../../887590c4.jpeg" alt="Logo"/>
            </a>
            <Nav/>
            <div className="header-tools">
                <a href="" className="header-link">
                    Акції
                </a>
                <ButtonComponet buttonName='Вхід'/>

                <Modal/>
            </div>
        </header>
    );
}

export default Header;
