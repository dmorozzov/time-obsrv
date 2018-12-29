import React from 'react';
import {bindActionCreators} from 'redux';
import {auth} from '@src/components/common/actions';
import {connect} from 'react-redux';

class Login extends React.Component {
    render() {
        const {isAuthenticated, auth} = this.props;
        return (
            <div>
                Login {isAuthenticated ? 'Yeah' : 'Nope'}
                <button onClick={() => auth(!isAuthenticated)}>Login | Out</button>
            </div>
        )
    }
}

export default connect((state) => ({
        isAuthenticated: state.common.get('isAuthenticated')
    }),
    dispatch => (bindActionCreators({auth}, dispatch)))(Login);
