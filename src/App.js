import React, {useEffect, useState} from "react";
import {Routes, Route} from "react-router-dom";

import Header from "./components/main-elements/Header";
import Footer from "./components/main-elements/Footer";
import PizzaPage from "./pages/PizzaPage";
import DrinkPage from "./pages/DrinkPage";
import SalatPage from "./pages/SalatPage";
import DiscountPage from "./pages/DiscountsPage";
import DetailPizza from "./pages/DetailPizza";
import CheckoutPage from "./pages/CheckoutPage";

import "./css/reset.scss";
import "./css/main.scss";
import {useSelector} from "react-redux";
import {Alert} from "./components/UI";

const App = () => {
    const alertData = useSelector(state => state.alerts.data);
    const renderSuccessAlert = () => (
        alertData.map(item => {
            return  <Alert
            id={item.key}
            key={item.key}
            variant={item.type}
            message={item.message}
            />
        })
    );

    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path='/' element={<PizzaPage/>}/>
                <Route path='/drink-page' element={<DrinkPage/>}/>
                <Route path='/salat-page' element={<SalatPage/>}/>
                <Route path='/discount-page' element={<DiscountPage/>}/>
                <Route path='/detail-pizza/:id' element={<DetailPizza/>}/>
                <Route path='/checkout' element={<CheckoutPage/>}/>
                <Route path='*' element={<PizzaPage/>}/>
            </Routes>
            <Footer/>
            <div className="alerts-container">
                {renderSuccessAlert()}
            </div>
        </div>
    );
};

export default App;