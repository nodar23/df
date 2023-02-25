import React, { useState, useEffect } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Context from "../Context";
import { changeSearchFilter } from "../reduxjs_toolkit/slices/searchSlice";


const Search = () => {




  


    return <div className="header__column-three-search">
    <input className="header__column-three-search-input" type="text" placeholder="Искать товары"/>
    <button className="header__column-three-search-btn">Найти</button>
</div>
}


export default Search;

