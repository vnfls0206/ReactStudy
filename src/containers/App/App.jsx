import React from 'react';
import store, { persistor } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Screen1 from "../Components/Screen1";
import Screen2 from "../Components/Screen2";

import "../../scss/vendor.scss";


const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <div>
                        <Routes>
                            <Route path="home/" element={<Screen1/>}>
                                <Route path="aa/" element={<Screen2/>} />
                            </Route>
                        </Routes>
                    </div>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
};

export default App;