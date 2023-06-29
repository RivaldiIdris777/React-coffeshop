import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

import { Link } from 'react-router-dom'
import googleLogo from '../../assets/images/googleLogo.png'

export default function Form() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [msg, setMsg] = useState('');

    let navigate = useNavigate();

    const Register = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/register', {
                username: username,
                email: email,
                phone: phone,
                password: password,
                confPassword: confPassword
            })
            navigate('/loginpage')
        } catch (error) {
            if(error.response) { 
                setMsg(error.response.data.msg)
            }
        }
    }

    return (
        <>
            <div className="row justify-content-center">
                <p className="mt-3">Register</p>                                
            </div>
            <br/>
            <form onSubmit={Register} encType='multipart/form-data'>    
                <p>{msg}</p>
                <div className="form-group col-lg-8 mx-auto">
                        <label htmlFor="username_field">Username</label>
                        <input 
                            type="text"
                            id="username_field"
                            className="form-control" 
                            placeholder="Enter your Email Address"
                            name='username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                </div>
            
                <div className="form-group col-lg-8 mx-auto">
                        <label htmlFor="email_field">Email address</label>
                        <input 
                            type="text" 
                            id="email_field"
                            className="form-control" 
                            placeholder="Enter your Email Address"
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                </div>

                <div className="form-group col-lg-8 mx-auto">
                        <label htmlFor="phone_field">Phone Number</label>
                        <input 
                            type="number" 
                            id="phone_field"
                            className="form-control" 
                            placeholder="Enter Phone Number"
                            name='phone'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                </div>
                
                <div className="form-group col-lg-8 mx-auto">
                        <label htmlFor="password_field">Password</label>
                        <input 
                            type="password" 
                            id="password_field"
                            className="form-control" 
                            placeholder="Enter Password"
                            name='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                </div>

                <div className="form-group col-lg-8 mx-auto">
                        <label htmlFor="confirm_field">Confirm Password</label>
                        <input 
                            type="password" 
                            id="confirm_field"
                            className="form-control" 
                            placeholder="Enter Password"
                            name='confPassword'
                            value={confPassword}
                            onChange={(e) => setConfPassword(e.target.value)}
                        />
                </div>                                        
                
                <div className="buttonLogin col-lg-8 mx-auto">

                    <button 
                        id="register_button" 
                        type="submit" 
                        className="btn btn-lg btn-block"                        
                        >
                            Register Now
                    </button>
                </div>
            </form>                             
            <br/>
            <div className="buttonGoogle col-lg-8 mx-auto">
                <button type="button col-lg-8" class="btn btn-primary btn-lg btn-block">
                <img src={googleLogo} alt="googleLogo" className="mr-2" style={{ "width":"26px", "height":"26px" }}/>
                Sign Up With Google
                </button>
            </div>   
            <br/>            
            <div className="buttonLogin2 col-lg-8 mx-auto">
                <p className="already" >Already Have Account ?</p>
                <Link to="loginpage">
                    <button type="button col-lg-8" class="btn btn-lg btn-block">Login Here</button>
                </Link>
            </div>
        </>
    )   
}
