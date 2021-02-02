import React,{useState} from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.components';
import CustomButton from '../custom-button/custom-button.components';
import {auth,createUserProfileDocument} from "../../firebase/firebase.utils";


const SignUp = () => {

    const [details,setDetails] = useState({
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''
    })
    console.log(details)

    const handleSubmit = async event => {
        event.preventDefault();

        if(details.password !== details.confirmPassword) {
            alert("password don't match!");
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(details.email,details.password);

            await createUserProfileDocument(user,details.displayName);

            setDetails({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            })

        }catch(e) {
            console.log(e);
        }


    }

    const handleChange = event => {
        const {name,value} = event.target;


        setDetails({
            ...details,
            [name]: value
        });

    }

    return(
        <div className="sign-up">
            <h2 className="title">i do not have an account</h2>
            <span>sign up with your email and password</span>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput type="text" name="displayName"
                           value={details.displayName}
                           onChange={handleChange}
                           label="Display Name"
                           required>

                </FormInput>
                <FormInput type="email" name="email"
                           value={details.email}
                           onChange={handleChange}
                           label="Email"
                           required>

                </FormInput>
                <FormInput type="password" name="password"
                           value={details.password}
                           onChange={handleChange}
                           label="Password"
                           required>

                </FormInput>
                <FormInput type="password" name="confirmPassword"
                           value={details.confirmPassword}
                           onChange={handleChange}
                           label="Confirm Password"
                           required>

                </FormInput>
                <CustomButton type="submit">SIGN UP</CustomButton>
            </form>
        </div>
    )
}
export default SignUp;
