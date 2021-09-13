import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';




class SignIn extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            email: "",
            password:""
          };

          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit = async event => {
        event.preventDefault();
    
        const { email, password } = this.state;
    
        try {
          await auth.signInWithEmailAndPassword(email, password);
          this.setState({ email: '', password: '' });
        } catch (error) {
          console.log(error);
        }
      };


    handleChange = event => {
        const { value, name } = event.target;
    
        this.setState({ [name]: value });
      };

    render(){

        return (
            <div className='sign-in'>

                <h2>
                    I already have an account
                </h2>
                <span>sign in with your email and password</span>

               
            <form onSubmit={this.handleSubmit}>  

                <FormInput type="email" 
                label="Email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                required />

                <FormInput type="password" 
                label="Password" 
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                required />

            <div className="buttons">
                <CustomButton type="submit">Sign In </CustomButton>


                <CustomButton onClick={signInWithGoogle}>
                Sign in with Google
                </CustomButton>
             </div>
              
            </form>
            </div>
        )
    }
}

export default SignIn;