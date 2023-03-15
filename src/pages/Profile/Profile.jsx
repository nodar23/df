import { useSelector } from "react-redux";
import { getUserInfoSelector } from "../../redux/slices/userInfoSlice";
import "./index.css";


export const Profile = () => {
    const user = useSelector(getUserInfoSelector)

    return (
          <div className="profile">
            <h2 className="profile__title">Личный кабинет</h2>
            <p className="profile__welcome-text">Добрый день, {user.name}!</p>
            <p className="profile__text">Группа: {user.group}</p>
            <p className="profile__text">Электропочта: {user.email}</p>
            <p className="profile__text">Профессия/деятельность: {user.about}</p>
            <span className="profile__avatar"><img  src={user.avatar} alt="avatar" /></span>
          </div>
    )
  }