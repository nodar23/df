import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import Context from "../Context";

import Logo from "./img/logo.svg";

const Header = () => {

    const {user, setUser, setModalActive, PATH, favorites} = useContext(Context);
    const logIn = (el) => {
        el.preventDefault();
        setModalActive(prev => !prev);
    }
    const logOut = (el) => {
        el.preventDefault();
        localStorage.removeItem("user-9-gr");
        setUser("");
    }

return <header className="header">
        <div className="header__columns">

            <div className="header__column-one">
                <img className="header__column-one-logo" src={Logo} alt='logo' />
                <p className="header__column-one-text" to={PATH}>Сытый пёс</p>
            </div>

            <div className="header__column-two">
                <Search />
                {/* <input type="search" placeholder="Поиск..." className="search"/> */}
            </div>
            
            <nav className="header__column-three-menu">
                {/* true && true */}
                {user && user.name && <Link className="header__column-three-link" to={PATH + "profile"}>{user.name}</Link>}
                {!user && <a className="header__column-three-link" onClick={logIn}>Войти</a>}
                {user && <a className="header__column-three-link" onClick={logOut}>Выйти</a>}
            </nav>

        </div>

        <div className="header__bottom">
            <h1>Еда для собак</h1>
            <p className="header__bottom-tagline">Вкусно, быстро и полезно</p>
            <button className="header__catalog-btn" type="button" >Каталог</button>
        </div>
        
        </header>
}
                

export default Header;
