import React, { useState, useContext } from "react";
import "./style.css";
import Context from "../../Context";

import Signup from "./Signup";
import Signin from "./Signin";

const Modal = () => {
    const [auth, setAuth] = useState(true);
    const {modalActive, setModalActive} = useContext(Context);

    let style = {
        display: modalActive && "flex",
    }
    return <div className="modal" style={style}>
        <div className="modal__form">
            <div className="modal__form-close" onClick={() => setModalActive(false)}/>
            <h2>{auth ? "Войти" : "Зарегистрироваться"}</h2>
            {auth 
                ? 
                <Signin change={setAuth} close={setModalActive}/> 
                : 
                <Signup change={setAuth} close={setModalActive}/>
            }
        </div>
    </div>
}

export default Modal;