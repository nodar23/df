import React from "react";


const Footer = () => {

    return <footer className="footer">

        <div className="footer__columns">

            <div className="footer__column-one">
            <span className="footer__column-one-year">© 2023 скоро тут будет красивый футер, а пока просто реализовал гриды</span>
            </div>

            <div className="footer__column-two">
            <span>какие-то еще ссылки</span>
            </div>

            <div className="footer__column-three">
            <span>какие-то контакты</span>
            </div>

            <div className="footer__column-four">
            <span className="footer__text">Сайт разработан с ошибками и нарушениями дедлайнов, но зато без потери мотивации и интереса :D</span>
            </div>

        </div>

    </footer>
}


export default Footer;