import React, {useCallback, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import {setLanguage} from "../../redux/modules/language";
import {LANGUAGETYPE} from "../../language/languageType";

const Screen1 = () => {

    const dispatch = useDispatch();
    const lang = useSelector((state) => state.language.language);

    const arr = ['Show', 'Hello', 'Text', 'Name'];
    const arrSmall = ['one', 'two', 'three'];

    const [indexNum, setIndexNum] = useState(null);


    const List = useCallback(({array, className}) => {

        const temp = array.map((value, index) => <div className={className} onMouseOver={
            () => {
                setIndexNum(index);
            }
        } key={index}>{value}
        </div>)

        return (temp);
    }, [indexNum]);


    return (
        <div className={"Screen1"}>
            <div className={"main-index"}>
                <List array={arr} className={"content"}/>
            </div>
            <div className={"main-index-bottom"}>
                <div className={`index array${indexNum}`}>
                    null
                </div>
            </div>
            <button onClick={
                () =>{
                    console.log(lang);
                }
            }></button>
            <Outlet />

        </div>
    );
};

export default Screen1;