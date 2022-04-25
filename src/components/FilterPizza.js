import React, {useState} from "react";
// import ButtonComponet from "./UI/button/ButtonComponet";

const FilterPizza = (props) => {
    const [sort, setSort] = useState('');
    const sortButtons = document.querySelectorAll('.filter-item');


    const sortPizza = () => {
        // if (sort === 'no-fix'){
        //     setSort('fix-header');
        // } else {
        //     // setSorts('no-fix');
        // }
        // sortButtons.classList.remove("active");
        Array.from(document.querySelectorAll('.filter-item.active')).forEach((el) => el.classList.remove('active'));
       this.classList.add("active");
        console.log(sortButtons.classList)
    }

    return (
        <div className="filter-container">
            <li onClick={sortPizza} className="filter-item active">Усі</li>
            <li className="filter-item btn">Вегетаріанська</li>
            <li className="filter-item btn">Гостра</li>
            <li className="filter-item btn">М'ясна</li>
        </div>
    );
    sortButtons.addEventListener('click', sortPizza);

}

export default FilterPizza;
