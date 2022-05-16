import React, { useState } from "react";

const FilterPizza = ({ onSortPizza }) => {
    const [tabs, setTabs] = useState([
        {
            id: 1,
            name: "Усі",
            category: 'All',
            status: true,
        },
        {
            id: 2,
            name: "Вегетаріанська",
            category: 'vegetarian',
            status: false,
        },
        {
            id: 3,
            name: "Рибна",
            category: 'fish',
            status: false,
        },
        {
            id: 4,
            name: "М'ясна",
            category: 'meat',
            status: false,
        },
    ]);

    const onFilterPizza = category => {
        const updatedTabs = tabs.map(item => {
            if (item.category === category){
                return {...item, status: true}
            } else {
                return {...item, status: false}
            }
        });

        setTabs(updatedTabs);
        onSortPizza(category);
    };

    return (
        <div className="filter-container">
            {
                tabs.map(tab => (
                    <li onClick={() => onFilterPizza(tab.category)} key={tab.id} className={`${tab.status ? 'active' : ''} filter-item`}>{tab.name}</li>
                ))
            }
        </div>
    );

}

export default FilterPizza;