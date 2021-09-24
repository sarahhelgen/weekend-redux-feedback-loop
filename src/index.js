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
const feelingToAdd = (state = defaultFeeling, action) => {
    if (action.type === 'SET_NEW_FEELING') {
        return action.payload;
    }
    return state;
}

//creating the store:
const reduxStore = createStore(
    combineReducers({
        //reducers go here  
    }),
    applyMiddleware(logger)
);


ReactDOM.render(<Provider store={reduxStore}>
    <App />
</Provider>,
    document.getElementById('root'));
registerServiceWorker();