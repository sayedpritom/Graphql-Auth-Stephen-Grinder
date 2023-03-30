import React, { Component } from 'react';
import AuthForm from './AuthForm';
import mutation from '../mutations/Login';
import { graphql } from 'react-apollo';


class LoginFrom extends Component {

    onSubmit({ email, password }) {
        this.props.mutate({
            variables: { email, password }
        })
    }

    render() {
        return (
            <div>
                <h3>Login</h3>
                <AuthForm onSubmit={this.onSubmit.bind(this)}></AuthForm>
            </div>
        )
    }
}

export default graphql(mutation)(LoginFrom);