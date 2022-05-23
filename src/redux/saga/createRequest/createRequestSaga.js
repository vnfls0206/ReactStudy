import {call, put} from 'redux-saga/effects';
import {startLoading, endLoading} from "../../modules/loading";

export default function createRequestSaga(type, request) {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;

    return function* (action) {
        yield put(startLoading(type));   //loading 시작 액션을 dispatch 한다
        try {
            const response = yield call(request, action.payload);
            yield  put({
                type: SUCCESS,
                payload: response.data
            });
        } catch (e) {
            yield put({
                type: FAILURE,
                payload: e,
                error: true
            });
        }
        yield put(endLoading(type));    //loading 이 끝났다는 액션을 dispatch 한다
    };
}