import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { SignUpContainer, SignUpTitle } from './sign-up.styles';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';



class SignUp extends React.Component{



  constructor(props) {
    super(props);

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.error(error);
    }
  };
  

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

    
    render(){

      const { displayName, email, password, confirmPassword } = this.state;

        return (
            <SignUpContainer>
        <SignUpTitle>I do not have a account</SignUpTitle>
                
                <span>Sign up with your email and password</span>

                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                <FormInput
            type='text'
            name='displayName'
            onChange={this.handleChange}
            label='Display Name'
            value={displayName}

            required
          />
          <FormInput
            type='email'
            name='email'
            onChange={this.handleChange}
            label='Email'
            value={email}

            required
          />
          <FormInput
            type='password'
            name='password'
            onChange={this.handleChange}
            label='Password'
            value={password}

            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            onChange={this.handleChange}
            value={confirmPassword}

            label='Confirm Password'
            required
          />
                    <CustomButton type='submit'>SIGN UP</CustomButton>

                </form>   
            
                </SignUpContainer>
        )
    }
}

export default SignUp;