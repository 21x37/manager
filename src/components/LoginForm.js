import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
import * as actions from '../actions';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onButtonPress = this.onButtonPress.bind(this);
    }
    onEmailChange(text) {
        this.props.emailChanged(text);
    }
    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }
    onButtonPress() {
        this.props.startLoginUser(this.props);
    }
    renderError() {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            )
        }
    }
    renderButton() {
        if (this.props.loading) {
            return <Spinner/>
        }

        return <Button onPress={this.onButtonPress}>Login</Button>;
    }
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label='Email'
                        placeholder='admin@app.com'
                        onChangeText={this.onEmailChange}
                        value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        label='Password'
                        placeholder='password'
                        onChangeText={this.onPasswordChange}
                        value={this.props.password}
                    />
                </CardSection>

                {this.renderError()}

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    };
};

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

const mapStateToProps = (state) => ({
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
});

export default connect(mapStateToProps, actions)(LoginForm);