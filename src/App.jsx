import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Api } from "./api";
import Context from "./Context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";

import Header from "./components/Header";
import Main from "./pages/Main";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Profile from "./pages/Profile";
import Catalog from "./pages/Catalog";



const queryClient = new QueryClient();

const PATH = "";

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
    if (token) {
        api.getProducts()
            .then(res => res.json())
            .then(data => {
                setGoods(data.products);
                setVisibleGoods(goods)
            })
    }
}, [goods]) 


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

const contextValue = {
    user,
    token,
    api,
    modalActive,
    goods,
    visibleGoods,
    setUser,
    setToken,
    setApi,
    setModalActive,
    setGoods,
    setVisibleGoods,
    PATH: PATH
}

return (
    <QueryClientProvider client={queryClient}>
    <Context.Provider value={contextValue}>
        <div className="wrapper">
            <Header />
            <main>
                <Routes>
                        <Route path={PATH} element={<Main/>}/>
                        <Route path={PATH + "profile"} element={<Profile/>}/>
                        <Route path={PATH + "catalog"} element={<Catalog/>}/>
                    </Routes>
            </main>
            <Footer />
        </div>
        <Modal />
    </Context.Provider>
    </QueryClientProvider>
)
}


export default App;


