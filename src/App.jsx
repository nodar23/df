import React, {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Profile from "./pages/Profile";
import Catalog from "./pages/Catalog";

import { Api } from "./Api";
import Context from "./Context";

const PATH = "/";

const App = () => {
    let usr = localStorage.getItem("user-9-gr");
    if (usr) {
        usr = JSON.parse(usr);
    }
const [user, setUser] = useState(usr);
const [token, setToken] = useState(localStorage.getItem("token-9-gr"));
const [modalActive, setModalActive] = useState(false);
const [api, setApi] = useState(new Api(token));
const [goods, setGoods] = useState([]);
const [visibleGoods, setVisibleGoods] = useState(goods);


useEffect(() => {
    setApi(new Api(token));
    let usr = localStorage.getItem("user-9-gr");
    if (usr) {
        usr = JSON.parse(usr);
    }
    setUser(usr);
}, [token])

useEffect(() => {
    if (!user) {
        localStorage.removeItem("token-9-gr");
        setToken(null);
    }
}, [user])


return (
    <Context.Provider value={{
        user: user,
            token: token,
            api: api,
            modalActive: modalActive,
            goods: goods,
            visibleGoods: visibleGoods,
            setUser: setUser,
            setToken: setToken,
            setApi: setApi,
            setModalActive: setModalActive,
            setGoods: setGoods,
            setVisibleGoods: setVisibleGoods,
            setVisibleGoods,
            PATH: PATH
    }}>
        <div className="wrapper">
            <Header />
            <main className="py-4">
                <Routes>
                        <Route path={PATH + "profile"} element={<Profile/>}/>
                        <Route path={PATH + "catalog"} element={<Catalog/>}/>
                    </Routes>
            </main>
            <Footer />
        </div>
        {/* 
                isActive, setState - параметры, которые работают внутри компонента Modal
                modalActive, setModalActive - значения, которые сохраняются внутри параметров
            */}
        <Modal />
    </Context.Provider>
)
}
export default App;


