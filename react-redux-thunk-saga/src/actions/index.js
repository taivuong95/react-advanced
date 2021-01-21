
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
// Action Creators
export const requestDog = () => {
    // will print error =>Actions must be plain objects. Use custom middleware for async actions.
    // const res = fetch('https://dog.ceo/api/breeds/image/random').then(res => res.json()).then(() => {
    //     return { type: 'REQUESTED_DOG', payload: res }
    // });

    //-----------FIX Option 1 using Redux alone--------------------
    return { type: 'REQUESTED_DOG' }
};

export const requestDogSuccess = (data) => {
    return { type: 'REQUESTED_DOG_SUCCEEDED', url: data.message }
};

export const requestDogError = () => {
    return { type: 'REQUESTED_DOG_FAILED' }
};

//-----------FIX Option 1 using Redux alone--------------------
// export const fetchDog = (dispatch) => {
//     dispatch(requestDog());
//     return fetch('https://dog.ceo/api/breeds/image/random')
//         .then(res => res.json())
//         .then(
//             data => dispatch(requestDogSuccess(data)),
//             err => dispatch(requestDogError())
//         );
// };
//-----------FIX Option 2 using Redux thunk--------------------
// export const fetchDog = () => {
//     return (dispatch) => {
//         dispatch(requestDog());
//         fetch('https://dog.ceo/api/breeds/image/random')
//             .then(res => res.json())
//             .then(
//                 data => dispatch(requestDogSuccess(data)),
//                 err => dispatch(requestDogError())
//             );
//     }
// };


//-----------FIX Option 3 using Redux Saga--------------------
export const fetchDog = () => {
    return { type: 'FETCHED_DOG' }
};
// Sagas
function* watchFetchDog() {
    yield takeEvery('FETCHED_DOG', fetchDogAsync);
}

function* fetchDogAsync() {
    try {
        yield put(requestDog());
        const data = yield call(() => {
            return fetch('https://dog.ceo/api/breeds/image/random')
                .then(res => res.json())
        }
        );
        yield put(requestDogSuccess(data));
    } catch (error) {
        yield put(requestDogError());
    }
}

export default watchFetchDog;