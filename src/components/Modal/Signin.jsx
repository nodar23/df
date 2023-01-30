import React, {useState, useContext} from "react";
import Context from "../../Context";

const Signin = ({change, close}) => {
        const [inp1, setInp1] = useState("");
        const [inp2, setInp2] = useState("");
    
        const {setToken, api} = useContext(Context);
    
        const sendForm = (el) => {
            el.preventDefault();
            const body = {
                email: inp1,
                password: inp2
            }
            api.signIn(body)
                .then(res => res.json())
                .then(data => {
                    // Не забыть отловить сообщение с ошибкой
                    console.log(data);
                    localStorage.setItem("user-9-gr", JSON.stringify(data.data));
                    localStorage.setItem("token-9-gr", data.token);
                    setToken(data.token);
                    setInp1("");
                    setInp2("");
                    close(false)
                })
        }
    
        return <form onSubmit={sendForm}>
            <input 
                type="email" 
                placeholder="Электропочта" 
                value={inp1} 
                required
                onChange={(el) => {setInp1(el.target.value)}}
            />
            <input 
                type="password" 
                placeholder="Пароль" 
                value={inp2} 
                onChange={(el) => {setInp2(el.target.value)}}
            />
            <button className="modal__form-btn" type="submit">Войти</button>
            <button className="modal__form-btn link" type="button" onClick={() => {change(prev => !prev)}}>Зарегистрироваться</button>
        </form>
}

export default Signin;