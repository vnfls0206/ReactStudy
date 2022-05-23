import {createAction, handleActions} from "redux-actions";
import {LANGUAGETYPE} from "../../language/languageType";

const SET_LANGUAGE = "language/SET_LANGUAGE";

export const setLanguage = createAction(SET_LANGUAGE);

const initialState = {
    language: LANGUAGETYPE.KOREAN,
}


const language = handleActions({
        [SET_LANGUAGE]: (state, {payload: lang}) => ({
            ...state,
            language: lang  //payload
        }),
    },
    initialState
);


export default language;