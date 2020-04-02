import React from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' })
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    render(){
        return (
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={ this.handleSubmit }>
                    <FormInput 
                        name='email' 
                        label="Email" 
                        type='email' 
                        handleChange={ this.handleChange } 
                        value={this.state.email} 
                        required />

                    <FormInput 
                        name='password' 
                        label="Password" 
                        type='password' 
                        value={ this.state.password }
                        handleChange={ this.handleChange } 
                        required />

                    <CustomButton type='submit' value="Sign In" />
                    <CustomButton onClick={ signInWithGoogle } value="Sign in with Google" />
                </form>

            </div>
        )
    }
}

export default SignIn;