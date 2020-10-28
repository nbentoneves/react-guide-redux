import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'

import thunk from 'redux-thunk'

import reducer from './store/reducers/reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = store => {
    return next => {
        //This is a middleware (between the action and reducer)
        //This can be used to logging and see the current store (redux devtools)
        return action => {
            console.log("[Middleware] dispatching", action)
            const result = next(action)
            console.log("[Middleware] next state", store.getState())
            return result
        }
    }
}


const store = createStore(reducer, composeEnhancers(applyMiddleware(logger, thunk)))

ReactDOM.render(<Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));
registerServiceWorker();
