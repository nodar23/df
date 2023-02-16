import React, {useState, useContext} from "react";
import {useNavigate} from "react-router-dom";
import Context from "../Context";

const Search = () => {
    return <div className="header__column-three-search">
    <input className="header__column-three-search-input" type="text" placeholder="Искать товары" />
    <button className="header__column-three-search-btn" >Найти</button>
</div>
}


export default Search;

