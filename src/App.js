import React, {useState, useEffect} from "react";
import {Routes, Route} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import PizzaPage from "./components/PizzaPage";
import DrinkPage from "./components/DrinkPage";
import SalatPage from "./components/SalatPage";
import DiscountPage from "./components/DiscountsPage";
import DetailPizza from "./components/DetailPizza";
import CheckoutPage from "./components/CheckoutPage";
import "./css/reset.scss";
import "./css/main.scss";

const App = () => {

  return (
    <div className="App">
        <Header />
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
    </div>
  );
}

export default App;