import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import PizzaPage from "./components/PizzaPage";
import "./components/css/reset.scss";
import "./components/css/main.scss";
import DiscountPage from "./components/DiscountsPage";

const App = () => {
  const [headerClass, setHeaderClass] = useState('no-fix');
  // const [obj, setObj] = useState({
  //     name: 'name',
  //     surname: 'name 2'
  // });

    const ChangeHeaderClass = () => {
        if (headerClass === 'no-fix'){
            setHeaderClass('fix-header');
        } else {
            setHeaderClass('no-fix');
        }
    }

    // const changeObg = () => {
    //     setObj((state) => {
    //         return {
    //             ...state, name: 'new name'
    //         }
    //     })
    // }
  return (
    <div className="App">
        <Header type={headerClass} />
        {/*<button onClick={ChangeHeaderClass}>Change header Class</button>*/}
            <Routes>
                <Route path='/' element={<PizzaPage/>}/>
                <Route path='/discount-page' element={<DiscountPage/>}/>
                <Route path='*' element={<PizzaPage/>}/>
            </Routes>
        <Footer/>
    </div>
  );
}

export default App;
