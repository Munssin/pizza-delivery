import React from "react";
import Button from "@atlaskit/button";
import "./modal.scss";
import ButtonComponet from "../button/ButtonComponet";
import inputComponent from "../input/inputComponent";
import InputComponent from "../input/inputComponent";

const ModalComponet = ({isOpen, closeModal}) => {

    return (
        <div className={`modal ${isOpen ? 'modal-open':''}`}>
            <div onClick={closeModal} className="overlay"></div>
            <form action="" className="modal-form">
                <div onClick={closeModal} className="close-bnt"></div>
                <h3>Вхід</h3>
                <div className="register">У вас ще немає акаунту? <a href="">Зареєструйтесь</a></div>
                <div className="form-group">
                    <label htmlFor="login" className="label">Електронна пошта</label>
                    <InputComponent inputType='email' inputName='login'/>
                </div>
                <div className="form-group">
                    <label htmlFor="pass" className="label">Пароль</label>
                    <InputComponent inputType='password' inputName='pass'/>
                </div>

                <ButtonComponet buttonType='submit' buttonName='Вхід'/>

                <div className="form-login-bottom">
                    <a href="">Забули пароль</a>
                    <div className="save-data">
                        Залишатись в мережі
                        <label htmlFor="" className="checkbox-container">
                            <input type="checkbox"/>
                        </label>
                    </div>
                </div>
            </form>
        </div>

    );
}

export default ModalComponet;
