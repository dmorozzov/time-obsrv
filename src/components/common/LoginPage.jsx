import React from 'react';
import {bindActionCreators} from 'redux';
import {Link, Redirect} from 'react-router-dom';
import {signIn} from './actions';
import {connect} from 'react-redux';
import LoginForm from "./LoginForm";

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false
        }
    }

    login = credentials => {
        this.props.signIn(credentials)
    };

    render() {

        const { from } = this.props.location.state || { from: undefined };
        const { isAuthenticated } = this.props;

        if (isAuthenticated === true && from) {
            return <Redirect to={from} />
        }
        return (
            <div>
                <LoginForm onSubmit={this.login}/>
                <Link to="/sign-up">SignUp</Link>
            </div>
        )
    }
}

export default connect((state) => ({
        isAuthenticated: state.common.get('isAuthenticated')
    }),
    dispatch => (bindActionCreators({signIn}, dispatch)))(LoginPage);
