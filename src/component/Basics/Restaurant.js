import React from 'react'
import "./style.css"
import Menu from './menuApi';
import { useState } from 'react';
import MenuCard from './MenuCard';
import Navbar from './NavBar';

const uniqueList = [
    ...new Set(
        Menu.map((currElem) => {
            return currElem.category;
        })
    ),
    "All",
];


const Restaurant = () => {
    const [MenuData, setMenuData] = useState(Menu);
    const [MenuList, setMenuList] = useState(uniqueList);

    const filterItem = (category) => {
        if (category === "All") {
            setMenuData(Menu);
        }
        else {
            const updatedItem = Menu.filter((currElem) => {
                return currElem.category === category;
            })
            setMenuData(updatedItem);
        }
    }

    return (
        <>
            <Navbar filterItem={filterItem} MenuList={MenuList} />
            <MenuCard MenuData={MenuData} />
        </>
    );
}

export default Restaurant;