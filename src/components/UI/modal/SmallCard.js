import React from "react";
import {Link} from "react-router-dom";
import {useActions} from "../../../helpers/hooks/useActions";
import {closeBasketModalStatus, deleteProductFromBasket} from "../../../redux/actions/basketAction";
import "./modal.scss";

export const SmallCard = (props) => {
    const {type, id, img, title, description, size, weight, price} = props;
    const dynamicPath = type === 'pizza' ? `/detail-pizza/${id}` : '';

    const removeProductFromBasket = useActions(deleteProductFromBasket);

    const deleteFromBasket = () => {
        removeProductFromBasket(props);
    }

    // const closeFuncBasketModalStatus = useActions(closeBasketModalStatus);


    return (
        <div className="basket-item">
            <Link
                onClick={(e) => type !== 'pizza' && e.preventDefault()}
                  to={dynamicPath}
            >
                {/*<img src={require(`../../../images/${img}`)} alt="Img"/>*/}
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
                    onClick={ () => deleteFromBasket(props) }
                >
                    Видалити
                </div>
            </div>
        </div>
    );
};