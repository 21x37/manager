import {
    FETCH_EMPLOYEES
} from '../actions/types';

const employeesReducerDefaultState = {};

export default (state = employeesReducerDefaultState, action) => {
    switch(action.type) {
        case FETCH_EMPLOYEES: 
            return action.payload;
        default:
            return state;
    }
}