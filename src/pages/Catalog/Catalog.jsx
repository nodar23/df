import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Search } from "../../components/Search/Search";
import { getUserInfoSelector } from "../../redux/slices/userInfoSlice";
import { ProductsPage } from "../../components/ProductsPage/ProductsPage";
import { Filters } from "../../components/Filters/Filters";
import "./index.css";

export const Catalog = () => {
  const { token } = useSelector(getUserInfoSelector);

  if (token) {
    return (
      <>
      <div className="catalog">
        <div className="catalog__title">
          <h2>Каталог товаров</h2>
          <Search />
        </div>
        <div>
          <Filters />
        </div>
        <div className="catalog__products">
          <ProductsPage />
        </div>
      </div>
      </>
    )
  }

  if (!token)
    return (
        <>
        <div className="catalog">
          <h2 className="catalog__title">Каталог товаров</h2>
          <div className="catalog__no-auth">
            <p className="catalog__no-auth-text">увы, но нет доступа к каталогу без авторизации</p>
            <p className="catalog__no-auth-text-emo">╮( ˘ ､ ˘ )╭</p> 
            <Link className="catalog__btn" to="/signin">Войти</Link>
          </div>
        </div>
        </>
    )
}