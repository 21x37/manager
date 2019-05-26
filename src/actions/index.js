import { EMAIL_CHANGED, PASSWORD_CHANGED, USER_LOGGED_IN, USER_LOG_IN_FAILED, LOGIN_USER } from './types';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const emailChanged = (text) => ({
    type: EMAIL_CHANGED,
    payload: text
});

export const passwordChanged = (text) => ({
    type: PASSWORD_CHANGED,
    payload: text
});

const userLoggedIn = (dispatch, user) => {
    dispatch({
        type: USER_LOGGED_IN,
        payload: user
    });
    Actions.main();
};

const userLogInFailed = (dispatch) => {
    dispatch({
        type: USER_LOG_IN_FAILED,
    });
};

// Uses userLoggedIn & userLoggedInFailed
export const startLoginUser = ({ email, password }) => {
    console.log(1)
    return (dispatch) => {
        dispatch({ type: LOGIN_USER })
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => userLoggedIn(dispatch, user))
            .catch((error) => {
                console.log(error);
                firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((user) => userLoggedIn(dispatch, user))
                .catch(() => {
                    userLogInFailed(dispatch);
                })
            });
        console.log(6)
    };
};

