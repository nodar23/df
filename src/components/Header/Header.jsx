import React from "react";
import { Link }  from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfoSelector, resetUserInfo } from "../../redux/slices/userInfoSlice";
import Logo from "../../assets/img/logo.svg";
import SigninLogo from "../../assets/img/signin.svg";
import AuthUserLogo from "../../assets/img/authuser.svg";
import "./index.css";

export const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { token } = useSelector(getUserInfoSelector)

    const logoutHandler = () => {
        dispatch(resetUserInfo())
        navigate('/')
      }
      
      return <header className="header">
        {/* <p className="header__text">Сайт разработан с ошибками и нарушениями дедлайнов, но зато без потери мотивации и интереса :D</p> */}
        <div className="header__columns">

            <div className="header__column-one">
               <Link to="./"><img className="header__column-one-logo" src={Logo} alt='logo'/></Link>
               <Link className="header__column-one-text" to="./">Сытый пёс</Link>
            </div>

            <div className="header__column-two">
               <Link to="./catalog"><button className="header__column-two-catalog-btn" type="button">≡ Каталог</button></Link>
            </div>
            
            <nav className="header__column-four-menu">
                {token ? <Link to="./profile"><img className="header__column-four-menu-img" src={AuthUserLogo} alt="AuthUser" /></Link> : <Link to="./signin"><img className="header__column-four-menu-img" src={SigninLogo} alt="SigninLogo" /></Link>}
                <Link className="header__column-four-menu-link" onClick={logoutHandler} to="./signin">{token ? 'Выйти' : ''}</Link>
            </nav>

        </div>

        </header>
}
