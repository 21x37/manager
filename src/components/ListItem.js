import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class ListItem extends React.Component {
    constructor(props) {
        super(props);
        
        this.onRowPress = this.onRowPress.bind(this);
    }
    onRowPress() {
        Actions.employeeEdit({ employee: this.props.employee });
    }
    render() {
        return (
            <TouchableWithoutFeedback onPress={this.onRowPress}>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>
                            {this.props.employee.name}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>

        );
    };
};

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}

export default ListItem;