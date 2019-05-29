import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { 
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    FETCH_EMPLOYEES
} from './types';

export const employeeUpdate = ({ prop, value }) => ({
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
});

export const employeeCreate = ({ name, phone, shift }) => {
    return (dispatch) => {
        const { currentUser } = firebase.auth();

        firebase.database().ref(`users/${currentUser.uid}/employees`)
            .push({ name, phone, shift })
            .then(() => {
                Actions.pop();

                dispatch({ type: EMPLOYEE_CREATE })
            });
    }
};

export const fetchEmployees = () => {
    return (dispatch) => {
        const { currentUser } = firebase.auth();

        firebase.database().ref(`users/${currentUser.uid}/employees`)
            .on('value', (snapshot) => {
                dispatch({ type: FETCH_EMPLOYEES, payload: snapshot.val() })
            });
    };
};