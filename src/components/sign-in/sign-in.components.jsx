import React,{useState} from 'react'
import FormInput from "../form-input/form-input.components";
import './sign-in.styles.scss'

const SignIn = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    }
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);

    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    return(
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
            <FormInput name="email" type="email" value={email} handleChange={handleChangeEmail} label='email' required/>
            <FormInput name="password" type="password" value={password} handleChange={handleChangePassword} label='password'  required/>

            <input type="submit" value="submit form"/>
            </form>
        </div>
    )
}
export default SignIn;