import React from "react";

export const SuccessMess = (props) => {
    const {type, id, img, title, description, size, weight, price, volume} = props;

    const addToBasket = () => {
        console.log(props.title);
        let productName = props.title;
        const showSuccessMess = () => {
            let successMessDiv = document.getElementsByClassName("success-mess")
            // successMessDiv.classList.add("active");
            console.log(successMessDiv);

        };
        showSuccessMess();
    }

    return (
        <div className={`success-mess`}>added to basket</div>
    );
};