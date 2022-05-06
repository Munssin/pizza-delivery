import React from "react";
import Button from "@atlaskit/button";
import "./modal.scss";
import ButtonComponet from "../button/ButtonComponet";
import InputComponent from "../input/inputComponent";
import {useState} from "react";

const ModalComponet = ({isOpen, closeModal, inShowLogin, inShowRegister, inShowReset}) => {
    // const [formLogin, setFormLogin] = useState('active');
    // const [formRegister, setFormRegister] = useState('');
    // const [formReset, setFormReset] = useState('');

    // const showRegister = () => {
    //     if (formRegister === '' && formLogin === 'active'){
    //         setFormLogin('');
    //         setFormRegister('active');
    //     } else {
    //         setFormLogin('active');
    //         setFormRegister('');
    //     }
    // }
    // const showReset = () => {
    //     if (formReset === '' && formLogin === 'active'){
    //         setFormLogin('');
    //         setFormReset('active');
    //     } else {
    //         setFormLogin('active');
    //         setFormReset('');
    //     }
    // }


    // const showLogin = () => {
    //     if (inShowLogin === false && (inShowRegister === true || inShowReset === true)){
    //         inShowLogin = true;
    //         inShowRegister = false;
    //         inShowReset = false;
    //     }
    // }
    const showLogin = () => {
        if (isOpen === true){
            inShowLogin = true;
            inShowRegister = false;
            inShowReset = false;
        } else {
            inShowLogin = false;
            inShowRegister = false;
            inShowReset = false;
        }
    }
    const showRegister = () => {
        if (inShowRegister === false && inShowLogin === true){
            inShowLogin = false;
            inShowRegister = true;
            console.log('showRegister IF ' + inShowRegister);

        } else {
            inShowLogin = true;
            inShowRegister = false;
            console.log('showRegister Else ' + inShowRegister);

        }
    }
    const showReset = () => {
        if (inShowReset === false && inShowLogin === true){
            inShowLogin = false;
            inShowReset = true;
            console.log('showReset IF ' + inShowReset);
        } else {
            inShowLogin = true;
            inShowReset = false;
            console.log('showReset Else ' + inShowReset);
        }
    }


    return (
        <div className={`modal ${isOpen ? 'modal-open':''}`}>
            <div onClick={closeModal} className="overlay"></div>
            <form action="" id="modal-login" className={`modal-form ${inShowLogin ? 'active' : ''}`}>
                <div onClick={closeModal} className="close-btn"></div>
                <h3>Вхід</h3>
                <div className="register">У вас ще немає акаунту? <span onClick={showRegister} className='link'>Зареєструйтесь</span></div>
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
                    <span onClick={showReset}>Забули пароль</span>
                    <div className="save-data">
                        Залишатись в мережі
                        <label htmlFor="" className="checkbox-container">
                            <input type="checkbox"/>
                        </label>
                    </div>
                </div>
            </form>
            <form action="" id="modal-register" className={`modal-form ${inShowRegister ? 'active':''}`}>
                <div onClick={closeModal} className="close-btn"></div>
                <h3>Реєстрація</h3>
                <div className="register">У вас вже є акаунту? <span onClick={showLogin} className="link">Увійти</span></div>
                <div className="form-group">
                    <label htmlFor="name" className="label">Ваше ім'я</label>
                    <InputComponent inputType='text' inputName='name'/>
                </div>
                <div className="form-group">
                    <label htmlFor="login" className="label">Електронна пошта</label>
                    <InputComponent inputType='email' inputName='login'/>
                </div>
                <div className="form-group">
                    <label htmlFor="phone" className="label">Телефон</label>
                    <InputComponent inputType='number' inputName='phone'/>
                </div>
                <div className="form-group">
                    <label htmlFor="phone" className="label">Дата народження</label>
                    <InputComponent inputType='date' inputName='birthday'/>
                </div>
                <div className="form-group">
                    <label htmlFor="pass" className="label">Пароль</label>
                    <InputComponent inputType='password' inputName='pass'/>
                </div>

                <ButtonComponet buttonType='submit' buttonName='Зареєструватись'/>

            </form>
            <form action="" id="modal-reset" className={`modal-form ${inShowReset ? 'active':''}`}>
                <div onClick={closeModal} className="close-btn"></div>
                <h3>Відновлення паролю</h3>
                <div className="register">Згадали пароль? <span onClick={showLogin} className="link">Увійти</span></div>
                <div className="form-group">
                    <label htmlFor="login" className="label">Електронна пошта</label>
                    <InputComponent inputType='email' inputName='login'/>
                </div>

                <ButtonComponet buttonType='submit' buttonName='Відновити'/>

            </form>
        </div>

    );
}

export default ModalComponet;
