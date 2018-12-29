import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Timers from './components/Timers';
import Login from './components/Login';
import PrivateRoute from '@src/components/PrivateRoute';

export default class App extends React.Component {

    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Home Page</Link></li>
                        <li><Link to="/login">Login Page</Link></li>
                        <li><Link to="/private">Protected Page</Link></li>
                    </ul>
                    <Route exact path="/" component={Timers} />
                    <PrivateRoute path="/private" component={Timers}/>
                    <Route path="/login" component={Login}/>
                </div>
            </Router>
        )
    }
}