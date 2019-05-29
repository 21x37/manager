import React from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { CardSection, Input } from './common';

class EmployeeForm extends React.Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }
    onChange(prop, value) {
        this.props.employeeUpdate({ prop, value })
    }
    render() {
        return (
            <View>
                <CardSection>
                    <Input
                        label='Name'
                        placeholder='Name'
                        value={this.props.name}
                        onChangeText={(text) => this.onChange('name', text)}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label='Phone'
                        placeholder='555-555-5555'
                        value={this.props.phone}
                        onChangeText={(text) => this.onChange('phone', text)}
                    />
                </CardSection>
                <CardSection style={{ flexDirection: 'column' }}>
                    <Text style={styles.pickerTextStyle}>Shift</Text>
                    <Picker
                        style={{  }}
                        selectedValue={this.props.shift}
                        onValueChange={(value) => this.onChange('shift', value)}
                    >
                        <Picker.Item label='Monday' value='Monday'/>
                        <Picker.Item label='Tuesday' value='Tuesday'/>
                        <Picker.Item label='Wednesday' value='Wednesday'/>
                        <Picker.Item label='Thursday' value='Thursday'/>
                        <Picker.Item label='Friday' value='Friday'/>
                        <Picker.Item label='Saturday' value='Saturday'/>
                        <Picker.Item label='Sunday' value='Sunday'/>
                    </Picker>
                </CardSection>
            </View>
        )
    };
};

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
}

const mapStateToProps = (state) => ({
    name: state.employeeForm.name,
    phone: state.employeeForm.phone,
    shift: state.employeeForm.shift
})

export default connect(mapStateToProps, actions)(EmployeeForm);