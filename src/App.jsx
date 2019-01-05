import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import PrivateRoute from './components/common/PrivateRoute';
import Header from './components/common/Header';
import routes from './routes';
import './css/flipdown.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

function RouteResolver(route) {
    return (
        route.secure ?
            <PrivateRoute path={route.path} component={route.component} routes={route.routes}/>
            :
            <Route path={route.path}
                render={props => (
                    <route.component {...props} routes={route.routes} />
                )}
            />
    );
}

export default class App extends React.Component {

    render() {
        return (
            <Router>
                <div className='container'>
                    <Header/>
                    {routes.map((route, i) => (
                        <RouteResolver key={i} {...route} />
                    ))}
                </div>
            </Router>
        )
    }
}