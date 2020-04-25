import React from 'react'

import { SignInAndSignUpContainer } from './signin-and-signup.styles';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp  from '../../components/sign-up/sign-up.component';

const SignInAndSignUp = () => (
    <SignInAndSignUpContainer>
        <SignIn />
        <SignUp />
    </SignInAndSignUpContainer>
)

export default SignInAndSignUp;