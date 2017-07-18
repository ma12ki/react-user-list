import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
// import { createEpicMiddleware } from 'redux-observable';

import { rootReducer } from './rootReducer';
// import { rootEpic } from './rootEpic';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const epicMiddleware = createEpicMiddleware(rootEpic);
// const middlewares = applyMiddleware(epicMiddleware);

const defaultState = {
    users: {
        list: [
            { id: 1, name: 'Lol Mao', email: 'lol@mao.com', selected: false },
            { id: 2, name: 'Omg XD', email: 'omg@xd.com', selected: false },
        ]
    }
};

// export const store = createStore(rootReducer, composeEnhancers(middlewares));
export const store = createStore(rootReducer, defaultState);
