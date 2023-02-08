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
    const SignIn = (el) => {
        el.preventDefault();
        setModalActive(prev => !prev);
    }

    const navigate = useNavigate();

    const signOut = (el) => {
        el.preventDefault();
        localStorage.removeItem("user-9-gr");
        setUser("");
        navigate("/");
    }


return <header className="header">
        <div className="header__columns">

            <div className="header__column-one">
               <Link to={PATH}><img className="header__column-one-logo" src={Logo} alt='logo'/></Link>
               <Link className="header__column-one-text" to={PATH}>Сытый пёс</Link>
            </div>

            <div className="header__column-two">
                <button className="header__column-two-catalog-btn" type="button">≡ Каталог</button>
            </div>

            <div className="header__column-three">
                <Search />
                {/* <input type="search" placeholder="Поиск..." className="search"/> */}
            </div>
            
            <nav className="header__column-four-menu">
                {/* true && true */}
                {user && user.name && <Link className="header__column-four-link" to={PATH + "profile"}>{user.name}</Link>}
                {!user && <a className="header__column-four-link" onClick={SignIn}>
                    <img className="header__column-four-signin" src={SigninLogo} alt="signin" />
                    </a>}
                {user && <a className="header__column-four-link" onClick={signOut}>
                    <img className="header__column-four-signout" src={SignoutLogo} alt="signin" />
                    </a>}
            </nav>

        </div>

            <p className="footer__text">Сайт разработан с ошибками и нарушениями дедлайнов, но зато без потери мотивации и интереса :D</p>

        </header>
}
                

export default Header;
