import React from 'react'
import {Field, reduxForm} from 'redux-form'

let LoginForm = props => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="userNameOrEmail">User name Or Email</label>
                <Field name="userNameOrEmail" component="input" type="" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <Field name="password" component="input" type="password" />
            </div>
            <button type="submit">Sign me in!</button>
        </form>
    )
};

export default reduxForm({
    form: 'login'
})(LoginForm);