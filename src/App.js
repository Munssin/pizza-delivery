import React, {useState} from "react";
import Header from "./components/Header";
import ProductItem from "./components/ProductItem";
import "./components/css/reset.scss";
import "./components/css/main.scss";

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
        <button onClick={ChangeHeaderClass}>Change header Class</button>
        <div className='catalog'>
            <div className="catalog-container">
                <ProductItem  />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </div>
        </div>
        {/*<button onClick={changeObg}>Change Object</button>*/}
        {/*<div>{obj.name}</div>*/}
        {/*<div>{obj.surname}</div>*/}
    </div>
  );
}

export default App;
