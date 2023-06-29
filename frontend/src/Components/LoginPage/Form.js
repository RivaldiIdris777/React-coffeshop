import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import googleLogo from '../../assets/images/googleLogo.png'


export default function Form() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');

    let navigate = useNavigate();

    const Auth = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/login', {
                email: email,
                password: password
            });
            navigate('/productmenu')
        } catch (error) {
            if(error.response) { 
                setMsg(error.response.data.msg)
            }
        }
    }

    return (
        <>
            <div className="row justify-content-center">
                <p className="mt-5">Login</p>                                
            </div>
            <br/>
            <form onSubmit={Auth}>
                <p>{msg}</p>
                <div className="form-group col-lg-8 mx-auto">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input 
                        type="username" 
                        className="form-control" 
                        placeholder="Enter your Username/Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                
                <div className="form-group col-lg-8 mx-auto">
                    <label htmlFor="exampleInputEmail1">Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                
                <div className="buttonLogin col-lg-8 mx-auto">
                    <button type="button col-lg-8" className="btn btn-lg btn-block">Login</button>                            
                </div>
                <br/>
                <div className="buttonGoogle col-lg-8 mx-auto">
                    <button type="submit" className="btn btn-primary btn-lg btn-block">
                    <img src={googleLogo} alt="googleLogo" className="mr-2" style={{ "width":"26px", "height":"26px" }}/>
                    Login With Google
                    </button>
                </div>   
            </form>
        </>
    )   
}
