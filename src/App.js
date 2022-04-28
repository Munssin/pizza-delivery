import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Swiper from "./components/UI/carousel/Swiper";
// import ModalBasket from "./components/UI/modal/ModalBasket";
import PizzaPage from "./components/PizzaPage";
import DrinkPage from "./components/DrinkPage";
import SalatPage from "./components/SalatPage";
import "./components/css/reset.scss";
import "./components/css/main.scss";
import DiscountPage from "./components/DiscountsPage";

const App = () => {
  const [headerClass, setHeaderClass] = useState('no-fix');

   const ChangeHeaderClass = () => {
        if (headerClass === 'no-fix'){
            setHeaderClass('fix-header');
        } else {
            setHeaderClass('no-fix');
        }
    }

  return (
    <div className="App">
        <Header type={headerClass} />
            <Routes>
                <Route path='/' element={<PizzaPage/>}/>
                <Route path='/drink-page' element={<DrinkPage/>}/>
                <Route path='/salat-page' element={<SalatPage/>}/>
                <Route path='/discount-page' element={<DiscountPage/>}/>
                <Route path='*' element={<PizzaPage/>}/>
            </Routes>
        <Footer/>
    </div>
  );
}

export default App;
