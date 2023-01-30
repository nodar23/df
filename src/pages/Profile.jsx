import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../Context";

const Profile = () => {
    const {user, setUser} = useContext(Context);
    const navigate = useNavigate();

    const logOut = (el) => {
        el.preventDefault();
        setUser(null);
        localStorage.removeItem("user-9-gr");
        navigate("/");
    }

    return <>
     <div className="profile">
        <h1 className="profile__title">Личный кабинет</h1>
        <p className="profile__welcome-text">Добрый день, {user && user.name}!</p>
        <button className="profile__btn" onClick={logOut}>Выйти из аккаунта</button>
     </div>
    </>
}


export default Profile;