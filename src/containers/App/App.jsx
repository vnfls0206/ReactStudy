import React from 'react';
import store ,{ persistor} from "./store";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import Menu from "../Components/Menu";
import Screen2 from "../Components/Screen2";
import CustomModal from "../Components/CustomModal";
import Login from "../Components/Login";
import Main from "../Components/Main";

import DynamicRoutes from "./DynamicRoutes";

import "../../scss/vendor.scss";
import Board from "../Components/Board";


const App = () => {
    const id = 11;

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <div>
                        <Routes>
                            <Route path="/" element={<Menu/>} >
                                <Route path="Main/" element={<Main/>}/>
                                <Route path="Post/" element={<Screen2/>}/>
                                <Route path="Menu/" element={<Menu/>}/>

                                <Route path="Board/" element={<Board/>} />
                                <Route path="Board/:id" element={<div>aaaa</div>} />

                                <Route path="Modal/" element={<CustomModal isVisible={true}/>}/>
                            </Route>
                            <Route path="Login/" element={<Login/>} />
                        </Routes>
                    </div>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
};

export default App;