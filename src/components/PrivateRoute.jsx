import {Redirect, Route, withRouter} from 'react-router-dom';
import React from 'react';
import {connect} from 'react-redux';

class PrivateRoute extends React.Component {
    render() {
        const { component: Component, isAuthenticated, ...rest } = this.props;
        return (
            <Route {...rest} render={(props) => (
                isAuthenticated
                    ? <Component {...props} />
                    : <Redirect to='/login' />
            )}/>
        )
    }
}

export default withRouter(connect(state => {
    return {isAuthenticated: state.common.get('isAuthenticated')}
})(PrivateRoute));