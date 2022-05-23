import {createAction, handleActions} from 'redux-actions';
import {call, put, takeLatest, all} from 'redux-saga/effects'

import * as Api from '../../shared/api/sampleAxiosApi';
import createRequestSaga from "../saga/createRequest/createRequestSaga";


// 액션 타입을 선언한
const GET_POST = 'post/GET_POST';
const GET_POST_SUCCESS = 'post/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'post/GET_POST_FAILURE';

const GET_USERS = 'post/GET_USERS';
const GET_USERS_SUCCESS = 'post/GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'post/GET_USERS_FAILURE';

export const getPost = createAction(GET_POST, id => id);
export const getUsers = createAction(GET_USERS);

const getPostSaga = createRequestSaga(GET_POST, Api.getPost);
const getUserSaga = createRequestSaga(GET_USERS, Api.getUsers);


export function* postSaga() {
    yield takeLatest(GET_POST, getPostSaga);    //따로 진행되는거 있으면 다취소하고
    yield takeLatest(GET_USERS, getUserSaga);
};

const initialState = {  //초기 상태에는 어떠한 데이터도 없기때문에 비워준다
    post: null,
    users: null
};

const post = handleActions(
    {
        [GET_POST_SUCCESS]: (state, action) => ({
            ...state,
            post: action.payload
        }),
        [GET_USERS_SUCCESS]: (state, action) => ({
            ...state,
            users: action.payload
        })
    },
    initialState
);

export default post;