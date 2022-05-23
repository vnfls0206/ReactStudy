import React, {useCallback, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, Outlet, useNavigate} from "react-router-dom";

import {setLanguage} from "../../redux/modules/language";
import {LANGUAGETYPE} from "../../language/languageType";
import {userLogout, setUserData} from "../../redux/modules/user";
import linkData from "../linkData.json";

const Menu = () => {

    const dispatch = useDispatch();
    const login = useSelector((state) => state.user.login);
    const navigate = useNavigate();

    const arr = ['메뉴', '게시판', 'Text', 'Name'];
    const link =
        [
            ["HOME", "Post", "Modal", "Main"],
            ["Board", "f", "g"],
            ["h", "i"],
            ["j", "k", "l"]
        ];


    const [indexNum, setIndexNum] = useState(null);

    const onLogin = () => {
        if(!login) {
            navigate('/Login');
        }
        else {
            dispatch(userLogout());
            dispatch(setUserData(null))
        }
    }


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
        <div className={"Menu"}>
            <div className={"main-index"}>
                <List array={arr} className={"content"}/>
                <button className={"login-button"} onClick={onLogin}>{login ? "Logout" : "Login"}</button>
            </div>
            <div className={"main-index-bottom"}>
                <div className={`index array${indexNum}`}>
                    {(indexNum !== null) &&
                    link[indexNum].map((value, index) =>
                        <Link to={linkData[`${value}`] || "/"} className={"slink"} key={index}>{value}</Link>)
                    }
                </div>
            </div>
            <Outlet/>

        </div>
    );
};
export default Menu;