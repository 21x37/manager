import { combineReducers } from 'redux';
import authReducer from './authReducer';
import employeeFormReducer from './employeeFormReducer';
import employeesReducer from './employeesReducer';

export default combineReducers({
    auth: authReducer,
    employeeForm: employeeFormReducer,
    employees: employeesReducer
});