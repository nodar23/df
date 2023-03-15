import React from "react";
import { Link, useNavigate }  from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfoSelector, resetUserInfo } from "../../redux/slices/userInfoSlice";
import { getCartProductsSelector, clearCart } from "../../redux/slices/cartSlice";
import { getFavoriteSelector, resetFavoriteInfo } from "../../redux/slices/favoriteSlice";
import Logo from "../../assets/img/logo.svg";
import SigninLogo from "../../assets/img/signin.svg";
import AuthUserLogo from "../../assets/img/authuser.svg";
import CartOnLogo from "../../assets/img/carton.svg";
import LikeOnLogo from "../../assets/img/likeon.svg";
import "./index.css";

export const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { token } = useSelector(getUserInfoSelector)
    const cart = useSelector(getCartProductsSelector)
    const favorite = useSelector(getFavoriteSelector)
    const cartLength = Object.keys(cart).length
    const favoriteLength = favorite.length

    const logoutHandler = () => {
      dispatch(resetUserInfo())
      dispatch(resetFavoriteInfo())
      dispatch(clearCart())
      navigate('/')
      }
      
      return <header className="header">
        <div className="header__columns">

            <div className="header__column-one">
               <Link to="./"><img className="header__column-one-logo" src={Logo} alt='logo'/></Link>
               <Link className="header__column-one-text" to="./">Сытый пёс</Link>
            </div>

            <div className="header__column-two">
               <Link to="./catalog"><button className="header__column-two-catalog-btn" type="button">Каталог</button></Link>
            </div>

            <nav className="header__column-three">
                <Link to="./favorites" className="header__menu-favorite">
                    <img className="header__column-four-menu-img" src={LikeOnLogo} alt="icon" />
                    {favoriteLength ? <span className="header__menu-favoriteLength">{favoriteLength}</span> : ''}
                    </Link>
                <Link to="./cart" className="header__menu-cart">
                    <img className="header__column-four-menu-img" src={CartOnLogo} alt="icon" />
                    {cartLength ? <span className="header__menu-cartLength">{cartLength}</span> : ''}
                </Link>
            </nav>
            
            <nav className="header__column-four-menu">
                {token ? <Link to="./profile"><img className="header__column-four-menu-img" src={AuthUserLogo} alt="AuthUser" /></Link> : <Link to="./signin"><img className="header__column-four-menu-img" src={SigninLogo} alt="SigninLogo" /></Link>}
                <Link className="header__column-four-menu-link" onClick={logoutHandler} to="./signin">{token ? 'Выйти' : ''}</Link>
            </nav>

        </div>
        </header>
}
