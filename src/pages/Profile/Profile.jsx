import { useSelector } from "react-redux";
import { getUserInfoSelector } from "../../redux/slices/userInfoSlice";
import { Link } from "react-router-dom";
import "./index.css";

export const Profile = () => {
    const profile = useSelector(getUserInfoSelector)

    return (
          <div className="profile">
            <h2 className="profile__title">Личный кабинет</h2>
            <p className="profile__welcome-text">Добрый день, {profile.name}!</p>
            <p className="profile__text">Группа: {profile.group}</p>
            <p className="profile__text">Электропочта: {profile.email}</p>
            <p className="profile__text">Профессия/деятельность: {profile.about}</p>
            <div className="profile__avatar"><img  src={profile.avatar} alt="avatar" /></div>
            <p>
              <Link className="profile__btn" to="/add-new-product"><span>Добавить новый товар в каталог</span></Link>  
            </p>
          </div>
    )
  }