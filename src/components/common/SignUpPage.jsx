import React from 'react';
import {bindActionCreators} from 'redux';
import {signUp} from './actions';
import {connect} from 'react-redux';
import SignUpForm from './SignUpForm';
import {Redirect} from "react-router-dom";

class SignUpPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToLogin: false
        }
    }

    signUp = (values) => {
        if (this.props.signUp(values)) {
            this.setState({redirectToLogin: true})
        }
    };

    render() {
        const { redirectToLogin } = this.state;

        if (redirectToLogin === true) {
            return <Redirect to='/login' />
        }
        return <SignUpForm onSubmit={this.signUp}/>
    }
}

export default connect(
    (state) => ({
        isAuthenticated: state.common.get('isAuthenticated')
    }),
    dispatch => (bindActionCreators({signUp}, dispatch)))
(SignUpPage);
