import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

//reducers go here
const defaultFeeling = '';
const feelingReducer = (state = defaultFeeling, action) => {
    if (action.type === 'SET_FEELING') {
        return action.payload;
    }
    return state;
}

const defaultUnderstanding = '';
const understandingReducer = (state = defaultUnderstanding, action) => {
    if (action.type === 'SET_UNDERSTANDING') {
        return action.payload;
    }
    return state;
}

const defaultSupport = '';
const supportReducer = (state = defaultSupport, action) => {
    if (action.type === 'SET_SUPPORT') {
        return action.payload;
    }
    return state;
}

const defaultComments = '';
const commentsReducer = (state = defaultComments, action) => {
    if (action.type === 'SET_COMMENTS') {
        return action.payload;
    }
    return state;
}



//creating the store:
const reduxStore = createStore(
    combineReducers({
        feelingReducer,
        understandingReducer,
        supportReducer,
        commentsReducer,
    }),
    applyMiddleware(logger)
);


ReactDOM.render(<Provider store={reduxStore}>
    <App />
</Provider>,
    document.getElementById('root'));
registerServiceWorker();