import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import * as actions from '../actions';
import { Card, CardSection, Button } from './common';

class EmployeeEdit extends React.Component {
    constructor(props) {
        super(props);

        this.onButtonPress = this.onButtonPress.bind(this);
    }
    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        });
    }
    onButtonPress() {
        console.log(this.props.name, this.props.phone, this.props.shift);
    }
    render() {
        return (
            <Card>
                <EmployeeForm/>
                <CardSection>
                    <Button onPress={this.onButtonPress}>
                        Save Changes
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

export default connect(mapStateToProps, actions)(EmployeeEdit);