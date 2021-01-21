import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from './reducers';
import watchFetchDog from './actions';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(thunk, sagaMiddleware))
sagaMiddleware.run(watchFetchDog);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
