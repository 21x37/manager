import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers'
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends React.Component {
    constructor(props){
        super(props)
    }
    componentWillMount() {
        const firebaseConfig = {
            apiKey: "AIzaSyAxQNjl8SDw2c5yz1Qu9EI-XHOWFDKt6sk",
            authDomain: "manager-cfbae.firebaseapp.com",
            databaseURL: "https://manager-cfbae.firebaseio.com",
            projectId: "manager-cfbae",
            storageBucket: "manager-cfbae.appspot.com",
            messagingSenderId: "605838043703",
            appId: "1:605838043703:web:24c0a6e671929ef9"
          };
          firebase.initializeApp(firebaseConfig);
    }
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router/>
            </Provider>
        );
    };
};

export default App;