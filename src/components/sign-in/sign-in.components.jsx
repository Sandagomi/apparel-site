import React,{useState} from 'react'
import './sign-in.styles.scss'

const SignIn = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = (event) => {
        console.log(event);
        event.preventDefault();
    }
    const handleChange = (e) => {
        setEmail(e.target.value);
        setPassword(e.target.value);
    }

    return(
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
            <input name="email" type="email" value={email} onChange={handleChange} required/>
            <label>Email</label>
            <input name="password" type="password" value={password} onChange={handleChange}  required/>
            <label>Password</label>

            <input type="submit" value="submit form"/>
            </form>
        </div>
    )
}
export default SignIn