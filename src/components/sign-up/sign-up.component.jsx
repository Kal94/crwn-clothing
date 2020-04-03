import React from 'react';

import './sign-up.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignUp extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword:''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '', displayName: '', confirmPassword: '' })
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    render() {
        return(
            <div className="sign-up">
            <h2 className="title">I do not have an account</h2>
            <span>Sign up with your email and password</span>

            <form onSubmit= { this.handleSubmit }>

            <FormInput
                name="displayName"
                label="Display Name"
                type="text"
                handleChange={ this.handleChange }
                value={ this.state.displayName }
                required
            />
            <FormInput
                name="email"
                label="Email"
                type="email"
                handleChange={ this.handleChange }
                value={ this.state.email}
                required
            />
            <FormInput
                name="password"
                label="Password"
                type="password"
                handleChange={ this.handleChange }
                value={ this.state.password }
                required
            />
            <FormInput
                name="confirmPassword"
                label="Confirm Password"
                type="text"
                handleChange={ this.handleChange }
                value={ this.state.confirmPassword }
                required
            />

            </form>

            <div className="buttons">
                <CustomButton type="submit">Sign Up</CustomButton>
            </div>

        </div>
        )
    }
}

export default SignUp;