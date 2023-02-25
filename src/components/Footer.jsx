import React from "react";

import Logo from "./img/logo.svg";
import Telegram from "./img/telegram.svg"


const Footer = () => {

    return <footer className="footer">

        <div className="footer__columns">

            <div className="footer__column-one">
                    <div>
                        <img className="footer__column-one-logo" src={Logo} alt='logo' />
                    </div>
                    <div>
                        <p className="footer__column-one-text">© 2023 Интернет-магазин "Сытый пёс"</p>
                    </div>
            </div>

            <div className="footer__column-two">
                <ul className="footer__column-two-list">
                    <li >
                        <a href="">Каталог</a>
                    </li>
                    <li>
                        <a href="">Акции</a>
                    </li>
                    <li>
                        <a href="">Новости</a>
                    </li>
                    <li>
                        <a href="">Отзывы</a>
                    </li>
                </ul>
            </div>

            <div className="footer__column-three">
            <ul className="footer__column-three-list">
                    <li>
                        <a href="">Оплата и доставка</a>
                    </li>
                    <li>
                        <a href="">Часто спрашивают</a>
                    </li>
                    <li>
                        <a href="">Обратная связь</a>
                    </li>
                    <li>
                        <a href="">Контакты</a>
                    </li>
                </ul>
            </div>

            <div className="footer__column-four">
                <div className="footer__column-four-title">Мы на связи:</div>
                <div className="footer__column-four-phone"> <a href="">8(999)***-**-**</a></div>
                <div><span className="footer__column-four-mail">sitiy**pes@yandex.ru</span></div>
                <div><img className="footer__column-four-telegram" src={Telegram} alt="telegram"/></div>
            </div>

        </div>

    </footer>
}


export default Footer;