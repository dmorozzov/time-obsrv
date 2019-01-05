import React from 'react';
import {bindActionCreators} from 'redux';
import {Redirect} from 'react-router-dom';
import {auth} from './actions';
import {connect} from 'react-redux';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false
        }
    }

    login = () => {
        const {isAuthenticated, auth} = this.props;
        auth(!isAuthenticated);
        this.setState(() => ({
            redirectToReferrer: true
        }));
    };

    render() {

        const { from } = this.props.location.state || { from: { pathname: '/' } };
        const { redirectToReferrer } = this.state;
        const {isAuthenticated} = this.props;

        if (redirectToReferrer === true) {
            return <Redirect to={from} />
        }
        return (
            <div>
                Login {isAuthenticated ? 'Yeah' : 'Nope'}
                <button onClick={this.login}>Login | Out</button>
            </div>
        )
    }
}

export default connect((state) => ({
        isAuthenticated: state.common.get('isAuthenticated')
    }),
    dispatch => (bindActionCreators({auth}, dispatch)))(Login);
