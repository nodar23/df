import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../Context";
import { useQuery } from "@tanstack/react-query";

const Profile = () => {
    const {user, setUser} = useContext(Context);
    const navigate = useNavigate();

    const logOut = (e) => {
        e.preventDefault();
        setUser(null);
        localStorage.removeItem("user-9-gr");
        navigate("");
    }

    return <>
     <div className="profile">
        <h1 className="profile__title">Личный кабинет</h1>
        <p className="profile__welcome-text">Добрый день, {user && user.name}!</p>
        <p className="profile__text">Электропочта: {user && user.email}</p>
        <p className="profile__text">Профессия/деятельность: {user && user.about}</p>
        <p className="profile__text">ID: {user && user._id}</p>
        <span className="profile__avatar"><img  src={user.avatar} alt="avatar" /></span>
        <p><button className="profile__btn" onClick={logOut}>Выйти из аккаунта</button></p>
     </div>
    </>
}


export default Profile;