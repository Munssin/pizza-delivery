import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {useFormik} from "formik";
import * as Yup from 'yup'
import {ButtonComponent, InputComponent, BasketForm} from "./UI/index";

import "../css/checkout.scss";

const CheckoutPage = () => {
    const basketDataItems = useSelector(state => state.basket.basketData);

    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    const formik = useFormik({
        initialValues: {
            name: "",
            phone: "",
            email: ""
        },
        validationSchema: Yup.object({
            name: Yup.string().max(15, "повинно бути не більше 15 символів").required("Обов'язкове поле"),
            phone: Yup.number().required("Обов'язкове поле"),
            email: Yup.string().required("Обов'язкове поле"),
        }),
        onSubmit: (values) => {
            console.log(values)
        }
    });

    let initialCount = 0;
    let sum = basketDataItems.reduce(
        (accumulator, currentValue) => accumulator + currentValue.price,
        initialCount
    );
    return (
        <div className="checkout">
            <div className="checkout-info">
                <div onClick={goBack} className="link-home">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                            d="M13.625 7.40625H4.48281L9.95469 2.65625C10.0422 2.57969 9.98906 2.4375 9.87344 2.4375H8.49062C8.42969 2.4375 8.37187 2.45937 8.32656 2.49844L2.42187 7.62187C2.36779 7.66875 2.32442 7.72671 2.2947 7.79181C2.26497 7.85692 2.24959 7.92765 2.24959 7.99922C2.24959 8.07079 2.26497 8.14152 2.2947 8.20663C2.32442 8.27173 2.36779 8.32968 2.42187 8.37656L8.36094 13.5312C8.38437 13.5516 8.4125 13.5625 8.44219 13.5625H9.87187C9.9875 13.5625 10.0406 13.4187 9.95312 13.3438L4.48281 8.59375H13.625C13.6937 8.59375 13.75 8.5375 13.75 8.46875V7.53125C13.75 7.4625 13.6937 7.40625 13.625 7.40625Z"
                            fill="#241C15">
                        </path>
                    </svg>
                    Назад
                </div>
                <form className="checkout-form" onSubmit={formik.handleSubmit}>
                    <h1 className="checkout-form__title">
                        Контактна інформація
                    </h1>
                    <div className="form-sub-group">
                        <div className="form-group">
                            <label htmlFor="name" className="label">I'мя <span>*</span></label>
                            <InputComponent
                                inputType='text'
                                inputName='name'
                                onChange={formik.handleChange}
                                value={formik.values.name}
                            />
                            {formik.errors.name ? <p className="error-mess">{formik.errors.name}</p> : null}

                        </div>
                        <div className="form-group">
                            <label htmlFor="phone" className="label">Телефон <span>*</span></label>
                            <InputComponent
                                inputType='number'
                                inputName='phone'
                                onChange={formik.handleChange}
                                value={formik.values.phone}
                            />

                            {formik.errors.phone ? <p className="error-mess">{formik.errors.phone}</p> : null}
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="login" className="label">Електронна пошта <span>*</span></label>
                        <InputComponent
                            inputType='email'
                            inputName='email'
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />

                        {formik.errors.email ? <p className="error-mess">{formik.errors.email}</p> : null}
                    </div>
                    <div className="form-group">
                        <label className="label">Коментар до замовлення</label>
                        <textarea className="input textarea"></textarea>
                    </div>
                    {
                        sum !== 0
                            ? <ButtonComponent buttonType='submit' buttonName='Замовити'/>
                            : <span>Корзина порожня, додайте вкусняху до корзини    <Link to="/" className="link-home">Обрати</Link> </span>
                    }
                </form>
            </div>
            <div className="checkout-basket">
                <BasketForm />
                {
                    sum !== 0
                        ? null
                        : <p>Корзина порожня</p>
                }
            </div>
        </div>
    );
}

export default CheckoutPage;