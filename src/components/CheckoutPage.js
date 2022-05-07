import React, {useState} from "react";
import {useParams} from "react-router-dom";

import {useDispatch, useSelector} from "react-redux";

import PizzaIMG from "../img/887590c4.jpeg"
import ButtonComponet from "./UI/button/ButtonComponet";

import "../css/checkout.scss";
import InputComponent from "./UI/input/inputComponent";
import SmallCard from "./UI/modal/SmallCard";


const CheckoutPage = (props) => {

    return (
        <div className="checkout">
            <div className="checkout-info">
                <form className="checkout-form">
                    <h1 className="checkout-form__title">
                        Контактна інформація
                    </h1>
                    <div className="form-sub-group">
                        <div className="form-group">
                            <label htmlFor="name" className="label">I'мя <span>*</span></label>
                            <InputComponent inputType='text' inputName='name'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone" className="label">Телефон <span>*</span></label>
                            <InputComponent inputType='number' inputName='phone'/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="login" className="label">Електронна пошта <span>*</span></label>
                        <InputComponent inputType='email' inputName='login'/>
                    </div>
                    <div className="form-group">
                        <label className="label">Коментар до замовлення</label>
                        <textarea className="input textarea"></textarea>
                    </div>

                    <ButtonComponet buttonType='submit' buttonName='Замовити'/>
                </form>
            </div>
            <div className="checkout-basket">
                <div className="basket-form">
                    <SmallCard />
                    <SmallCard />
                    <SmallCard />
                </div>
            </div>
        </div>
    );
}

export default CheckoutPage;
