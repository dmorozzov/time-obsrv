import {Redirect, Route, withRouter} from 'react-router-dom';
import React from 'react';
import {connect} from 'react-redux';

class PrivateRoute extends React.Component {
    render() {
        const { component: Component, isAuthenticated, routes, ...rest } = this.props;
        return (
            <Route exact {...rest} render={(props) => (
                isAuthenticated
                    ? <Component routes={routes} {...props} />
                    : <Redirect to={{pathname: '/login', state: { from: props.location }}}/>
            )}/>
        )
    }
}

export default withRouter(connect(state => {
    return {isAuthenticated: state.common.get('isAuthenticated')}
})(PrivateRoute));