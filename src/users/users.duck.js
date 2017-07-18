import { combineReducers } from 'redux';
// import { combineEpics } from 'redux-observable';
// import { Observable } from 'rxjs';

// Actions
const namespace = 'users/';

const LOAD_USERS_START = `${namespace}LOAD_USERS_START`;
const LOAD_USERS_SUCCESS = `${namespace}LOAD_USERS_SUCCESS`;
const LOAD_USERS_ERROR = `${namespace}LOAD_USERS_ERROR`;
const SELECT_USER = `${namespace}SELECT_USER`;
const CONFIRM_SELECTION = `${namespace}CONFIRM_SELECTION`;

// Action creators
export const loadUsersStart = () => ({ type: LOAD_USERS_START });
export const loadUsersSuccess = (users) => ({ type: LOAD_USERS_SUCCESS, payload: users });
export const loadUsersError = (error) => ({ type: LOAD_USERS_ERROR, payload: error });
export const selectUser = (id) => ({ type: SELECT_USER, payload: id });
export const confirmSelection = () => ({ type: CONFIRM_SELECTION });

// Reducers
export const listReducer = (state = [], action = {}) => {
    switch (action.type) {
        case LOAD_USERS_SUCCESS: {
            return action.payload;
        }
        case SELECT_USER: {
            const id = action.payload;
            return state.map((user) => {
                if (user.id === id) {
                    user.selected = !user.selected;
                }
                return user;
            });
        }
        default: {
            return state;
        }
    }
};

export const loadingReducer = (state = false, action = {}) => {
    switch (action.type) {
        case LOAD_USERS_START: {
            return true;
        }
        case LOAD_USERS_SUCCESS:
        case LOAD_USERS_ERROR: {
            return false;
        }
        default: {
            return state;
        }
    }
};

export const errorReducer = (state = null, action = {}) => {
    switch (action.type) {
        case LOAD_USERS_START:
        case LOAD_USERS_SUCCESS: {
            return null;
        }
        case LOAD_USERS_ERROR: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
};

export const showSelectedReducer = (state = false, action = {}) => {
    switch (action.type) {
        case CONFIRM_SELECTION: {
            return true;
        }
        default: {
            return state;
        }
    }
};

const reducer = combineReducers({
    list: listReducer,
    loading: loadingReducer,
    error: errorReducer,
    showSelected: showSelectedReducer,
});

export default reducer;

// Epics
