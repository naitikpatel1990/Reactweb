import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import "./sign-in-and-sign-up.styles.js";
import { SignInAndSignUpContainer } from './sign-in-and-sign-up.styles.js';

const SignInandSignUppage = () =>(

       <SignInAndSignUpContainer>


       <SignIn/>
       <SignUp/>

       </SignInAndSignUpContainer>


);

export default SignInandSignUppage;