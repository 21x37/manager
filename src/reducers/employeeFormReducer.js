import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE } from '../actions/types';

const employeeFormReducerDefaultState = {
    name: '',
    phone: '',
    shift: ''
}

export default (state = employeeFormReducerDefaultState, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            return { ...state, [action.payload.prop] : action.payload.value };
        case EMPLOYEE_CREATE:
            return employeeFormReducerDefaultState;
        default:
            return state;
    }
}

