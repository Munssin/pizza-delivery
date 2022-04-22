import React from "react";
import ButtonComponet from "./UI/button/ButtonComponet";

const ProductItem = (props) => {
    return (
        <div className="product-item">
            <a href="">
                <div className="product-item__photo">
                    <img src="" alt=""/>
                </div>
                <div className="product-item__info">
                    <h2 className="product-item__name">Salmone</h2>
                    <p className="product-item__text">
                        Вершки, моцарела, лосось, лимон, пармезан, рукола </p>
                    <div className="product-item__info-main">
                        <div className="product-item__properties">
                            <span className="product-item_properties__text">Розмір:30см; </span>
                            <span className="product-item__properties__text">Вага:350г; </span>
                        </div>
                        <div className="product-item__price" data-price="247">247 <span>грн</span></div>
                    </div>
                </div>
            </a>
            <div className="product-item__buy">
                <ButtonComponet buttonName='Додати в корзину'/>
            </div>
        </div>
    );
}

export default ProductItem;
