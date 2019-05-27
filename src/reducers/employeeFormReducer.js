import { EMPLOYEE_UPDATE } from '../actions/types';

const employeeFormReducerDefaultState = {
    name: '',
    phone: '',
    shift: ''
}

export default (state = {}, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            return { ...state, [action.payload.prop] : action.payload.value }
        default:
            return state;
    }
}

