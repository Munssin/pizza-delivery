import React, {useState} from "react";

const FilterDrink = ({drinksData, onSortDrink}) => {
    const [sort, setSort] = useState('');
    const [tabs, setTabs] = useState([
        {
            id: 1,
            name: "Усі",
            category: 'All',
            status: true
        },
        {
            id: 2,
            name: "Соки",
            category: 'Juice',
            status: false
        },
        {
            id: 3,
            name: "Води",
            category: 'Water',
            status: false
        },
    ]);

    const onFilterDrink = (category) => {
        const updatedContent = drinksData.filter(item => category === "All" ? item : item.category === category);

        const updatedTabs = tabs.map(item => {
            if (item.category === category){
                return {...item, status: true}
            } else {
                return {...item, status: false}
            }
        });
        setTabs(updatedTabs);
        onSortDrink(category);
    }

    return (
        <div className="filter-container">
            {
                tabs.map(tab => (
                    <li onClick={() => onFilterDrink(tab.category)} key={tab.id} className={`${tab.status ? 'active' : ''} filter-item`}>{tab.name}</li>
                ))
            }
        </div>
    );

}

export default FilterDrink;