import React from 'react';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label='Name'
                        placeholder='Name'
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label='Phone'
                        placeholder='555-555-5555'
                    />
                </CardSection>
                <CardSection>
                    <Button>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    };
};

export default EmployeeCreate;