import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import Context from "../Context";
import { useNavigate } from "react-router-dom";

import Logo from "./img/logo.svg";
import SigninLogo from "./img/signin.svg";
import SignoutLogo from "./img/signout.svg";

const Header = () => {

    const {user, setUser, setModalActive, PATH, favorites} = useContext(Context);
    const logIn = (el) => {
        el.preventDefault();
        setModalActive(prev => !prev);
    }

    const navigate = useNavigate();

    const logOut = (el) => {
        el.preventDefault();
        localStorage.removeItem("user-9-gr");
        setUser("");
        navigate("/");
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
                {!user && <a className="header__column-three-link" onClick={logIn}>
                    <img className="header__column-three-signin" src={SigninLogo} alt="signin" />
                    </a>}
                {user && <a className="header__column-three-link" onClick={logOut}>
                    <img className="header__column-three-signout" src={SignoutLogo} alt="signin" />
                    </a>}
            </nav>

        </div>

        <div className="header__bottom">
            <h1>Еда для собак</h1>
            <p className="header__bottom-tagline">Вкусно, быстро и полезно</p>
            <button className="header__catalog-btn" type="button" >Каталог</button>

            <p className="footer__text">Сайт разработан с ошибками и нарушениями дедлайнов, но зато без потери мотивации и интереса :D</p>
        </div>

        </header>
}
                

export default Header;
