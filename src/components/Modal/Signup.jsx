import React, { useState, useContext } from "react";
import Context from "../../Context";

const Signup = ({change, close}) => {
    const [inp1, setInp1] = useState("");
    const [inp2, setInp2] = useState("");
    const [inp3, setInp3] = useState("");
    const [testPwd, setTestPwd] = useState(true);
    const {api, setToken, setUser} = useContext(Context);

    const checkPwd = (val, type = "main") => {
        type === "main" ? setInp2(val) : setInp3(val);
        if (val) {
            if (type === "main") {
                setTestPwd(val !== inp3);
            } else {
                setTestPwd(val !== inp2);
            }
        }
    }

    const sendForm = (e) => {
        e.preventDefault();
        const body = {
            email: inp1,
            password: inp2
        }
        console.log(body);
        api.signUp(body)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (!data.err) {
                    api.signIn(body)
                        .then(res => res.json())
                        .then(data => {
                            localStorage.setItem("user-9-gr", JSON.stringify(data.data));
                            localStorage.setItem("token-9-gr", data.token);
                            setToken(data.token);
                            setUser(data.data);
                        })
                    setInp1("");
                    setInp2("");
                    setInp3("");
                    close(false);
                } else {
                    alert(data.message);
                }
            })
    }

    return <form onSubmit={sendForm}>
        <input 
            type="email" 
            placeholder="Электропочта" 
            value={inp1} 
            required
            onChange={(e) => {setInp1(e.target.value)}}
        />
        <input 
            type="password" 
            placeholder="Пароль" 
            value={inp2} 
            onChange={(e) => {checkPwd(e.target.value)}}
        />
        <input 
            type="password" 
            placeholder="Еще пароль" 
            value={inp3} 
            onChange={(e) => {checkPwd(e.target.value, "check")}}
        />
        <button className="modal__form-btn" type="submit" disabled={testPwd}>Зарегистрироваться</button>
        <button className="modal__form-btn link" type="button" onClick={() => {change(prev => !prev)}}>Войти</button>
    </form>
}


export default Signup;