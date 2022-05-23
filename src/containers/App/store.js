//Root 리듀서와 Store의 역할을 한다
import {applyMiddleware, combineReducers, createStore} from "redux";

import {persistReducer, persistStore} from "redux-persist";
import storage from 'redux-persist/lib/storage'

import {all} from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga'
import {composeWithDevTools} from "redux-devtools-extension";

import language from '../../redux/modules/language';
import post, {postSaga} from "../../redux/modules/post";
import user, {userSaga} from "../../redux/modules/user";
import loading from "../../redux/modules/loading";
import board from "../../redux/modules/board";

const reducer = combineReducers({
    language: language,
    post: post,
    loading: loading,
    user: user,
    board: board

});

const persistConfig = {
    key: "root",
    storage,

    whitelist: [
        "language",
    ],
}

const persistedRootReducer = persistReducer(persistConfig, reducer);

function* rootSaga() {
    yield all([
        postSaga(),
        userSaga(),

    ]);
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(persistedRootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export {persistor};
export default store;
