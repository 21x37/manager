import React from 'react';
import _ from 'lodash';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import ListItem from './ListItem';

class EmployeeList extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.props.fetchEmployees();

        this.createDataSource(this.props);
    }
    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }
    createDataSource({ employees }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(employees);
    }
    renderRow(employee) {
        return <ListItem employee={employee} />
    }
    render() {
        console.log(this.props.employees);
        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    };
};

const mapStateToProps = (state) => ({
    employees: _.map(state.employees, (val, uid) => {
        return { ...val, uid };
    })
});

export default connect(mapStateToProps, actions)(EmployeeList);