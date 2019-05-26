import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    USER_LOGGED_IN,
    USER_LOG_IN_FAILED,
    LOGIN_USER
} from '../actions/types';

const authReducerInitialState = {
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false
}

export default (state = authReducerInitialState, action) => {
    switch(action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case USER_LOGGED_IN:
            return { ...state, ...authReducerInitialState, user: action.payload };
        case USER_LOG_IN_FAILED:
            return { ...state, error: 'Authentication Failed.', password: '', loading: false };
        case LOGIN_USER:
            return { ...state, loading: true, error: '' }
        default:
            return state;
    };
};