import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import Context from "../Context";
import { useNavigate } from "react-router-dom";

import Logo from "./img/logo.svg";
import SigninLogo from "./img/signin.svg";
import SignoutLogo from "./img/signout.svg";
import AuthUser from "./img/authuser.svg";

const Header = () => {

    const {user, setUser, setModalActive, PATH} = useContext(Context);
    const SignIn = (e) => {
        e.preventDefault();
        setModalActive(prev => !prev);
    }

    const navigate = useNavigate();

    const signOut = (e) => {
        e.preventDefault();
        localStorage.removeItem("user-9-gr");
        setUser("");
        navigate("");
    }


return <header className="header">
            <p className="header__text">Сайт разработан с ошибками и нарушениями дедлайнов, но зато без потери мотивации и интереса :D</p>
        <div className="header__columns">

            <div className="header__column-one">
               <Link to={PATH}><img className="header__column-one-logo" src={Logo} alt='logo'/></Link>
               <Link className="header__column-one-text" to={PATH}>Сытый пёс</Link>
            </div>

            <div className="header__column-two">
               <Link to="/catalog"><button className="header__column-two-catalog-btn" type="button">≡ Каталог</button></Link> 
            </div>

            <div className="header__column-three">
                <Search />
            </div>
            
            <nav className="header__column-four-menu">
                {user && user.name && <Link className="header__column-four-link" to={PATH + "profile"}>
                    <img className="header__column-four-authuser" src={AuthUser} alt="authuser" />
                </Link>}
                {!user && <span className="header__column-four-link" onClick={SignIn}>
                    <img className="header__column-four-signin" src={SigninLogo} alt="signin" />
                    </span>}
                {user && <span className="header__column-four-link" onClick={signOut}>
                    <img className="header__column-four-signout" src={SignoutLogo} alt="signout" />
                    </span>}
            </nav>

        </div>

        </header>
}
                

export default Header;
