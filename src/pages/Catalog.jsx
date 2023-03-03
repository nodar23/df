import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Products from "./Products";
import Search from "../components/Search";
import { getUserInfoSelector } from "../reduxjs_toolkit/slices/userInfoSlice";
// import Pagination from "../components/Pagination/Pagination";
// import UsePagination from "../hooks/usePagination";
import { Pagination } from "@mui/material";
// import { getSearchSelector } from "../reduxjs_toolkit/slices/filterSlice";
// import { useEffect, useState } from "react";
// import { useNavigate, useSearchParams } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";



const Catalog = () => {
 
    const { token } = useSelector(getUserInfoSelector);

  if (token) {

    return (
      <>
      <div className="catalog">

        <div className="catalog__title">

        <h2>Каталог товаров</h2>
        <Search />
        </div>

        <div className="catalog__pagination">
        <Pagination count={10} showFirstButton showLastButton />
        </div>

        <div className="catalog__products">
          <Products />
        </div>

        <div className="catalog__pagination">

        </div>

      </div>
      </>
    )
  }

  else {

    return (
        <>
        <div className="catalog">
        <h2 className="catalog__title">Каталог товаров</h2>
        <div className="catalog__no-auth">
        <p className="catalog__no-auth-text">Нет доступа к каталогу без авторизации</p> 
        <Link className="catalog__btn" to="/signin">Войти</Link>
        </div>
        </div>
        </>
    )
  }
}


export default Catalog;