import React,{useState} from 'react'
import FormInput from "../form-input/form-input.components";
import CustomButton from "../../components/custom-button/custom-button.components";
import {auth,signInWithGoogle} from "../../firebase/firebase.utils";
import './sign-in.styles.scss'

const SignIn = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = async event => {
        event.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(email,password)
            setEmail('');
            setPassword('');

        }catch (e) {
            console.log(e)
        }
    }
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);

    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    return(
        <div className="sign-in">
            <h2 className='title'>I already have an account</h2>
            <span className='title'>sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
            <FormInput name="email" type="email" value={email} handleChange={handleChangeEmail} label='email' required/>
            <FormInput name="password" type="password" value={password} handleChange={handleChangePassword} label='password'  required/>
            <div className="buttons">
            <CustomButton type='submit'> Sign in </CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn > Sign in with Google </CustomButton>
            </div>
            </form>
        </div>
    )
}
export default SignIn;