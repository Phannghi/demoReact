import { useState } from 'react';
import './Login.scss'
const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = () => {

    }
    return (
        <div className='login-container'>
            <div className="header">
                <span>Don't have an account yet?</span>
                <div>
                    <button className='btn btn-dark'>Sign up</button>
                </div>
            </div>
            <div className="title col-3 mx-auto text-center">
                Admin Site
            </div>
            <div className="welcome col-3 mx-auto text-center">
                Hello, Who is this?
            </div>
            <div className="content-form col-3 mx-auto">
                <div className="form-group">
                    <label htmlFor="email" className='form-label'>Email</label>
                    <input type="email" id='email'
                        placeholder='bruce@wayne.com'
                        className='form-control'
                        email={email}
                        onChange={(event) => setEmail(event.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="password" className='form-label'>Password</label>
                    <input type="password" id='password'
                        placeholder='At least 8 characters'
                        className='form-control'
                        password={password}
                        onChange={(event) => setPassword(event.target.value)} />
                </div>
                <span className='form-text-forgot'>Forgot password ?</span>
                <div className="mt-2">
                    <button
                        className='btn btn-dark w-100 fs-5'
                        onClick={() => handleLogin()}>Login</button>
                </div>
            </div>
        </div>
    )
}
export default Login;