import React, {useContext} from "react";
import Card from "../components/Card";
import {Link} from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import Context from "../Context";
import Pagination from "../components/Pagination/Pagination";
import UsePagination from "../hooks/usePagination";


const Catalog = () => {
    const {visibleGoods, user, PATH} = useContext(Context);
    const paginate = UsePagination(visibleGoods, 12);

    return <>
        {user && <>
            {visibleGoods.length > 0 
                ? <>
                    <h1 className="catalog__title">Каталог товаров</h1>
                    <Pagination hook={paginate}/>
                    <div className="catalog">
                        {paginate.setPageData().map((el, i) => <Link to={`/catalog/${el._id}`} key={el._id}>
                        <Card key={"card_" + i} {...el}/>
                        </Link>)}
                    </div>
                </>
                : <div className="catalog-empty">
                    <p>По вашему запросу товаров не найдено</p>
                    <Link to={PATH} className="catalog__btn">На главную</Link>
                </div>
            }
        </>}
        {!user && 
            <div className="catalog-empty">
                <p>Нет доступа к каталогу без авторизации</p>
                <Link to={PATH} className="catalog__btn">На главную</Link>
            </div>
        }
    </>
}


export default Catalog;