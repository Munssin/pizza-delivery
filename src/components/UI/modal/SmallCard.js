import React from "react";
import {Link} from "react-router-dom";

import "./modal.scss";

const SmallCard = (props) => {
    const {type, id, img, title, description, size, weight, price} = props;
    const dynamicPath = type === 'pizza' ? `/detail-pizza/${id}` : '';

    return (
        <div className="basket-item">
            <Link to="/">
                <img src={img} alt="Img"/>
            </Link>
            <div className="product-info">
                <div className="product-info__name">{title}</div>
                <div className="product-info__description">
                    {description}
                </div>
            </div>
            <div className="product-price-info">
                <div className="product-price">{price} грн</div>
                <div
                    className="remove-item"
                >
                    Видалити
                </div>
            </div>
        </div>
    );
}

export default SmallCard;

