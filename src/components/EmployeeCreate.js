import React from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Card, CardSection, Input, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends React.Component {
    constructor(props) {
        super(props);

        this.onButtonPress = this.onButtonPress.bind(this);
    }
    onButtonPress() {
        const { name, phone , shift } = this.props;

        // If the user never selects a shift then the default selection is Monday. 🙈
        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' })
    }
    render() {
        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onButtonPress}>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    };
};



const mapStateToProps = (state) => ({
    name: state.employeeForm.name,
    phone: state.employeeForm.phone,
    shift: state.employeeForm.shift
})

export default connect(mapStateToProps, actions)(EmployeeCreate);