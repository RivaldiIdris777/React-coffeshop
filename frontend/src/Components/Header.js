/* eslint-disable */ 
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import brandIcon from '../assets/images/coffeebrand.svg'
import profile from '../assets/images/profile.jpg'
import unknownUser from '../assets/images/unknownuser.png'
import jwt_decode from "jwt-decode";
import axios from 'axios';

export default function Header(props) {

    const [username, setUsername] = useState('');    
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [users, setUsers] = useState('');    

    let navigate = useNavigate();

    useEffect(() => {
        refreshToken();
    }, []);
 
    const refreshToken = async () => {
        try {
            const response = await axios.get('http://localhost:5000/token');
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setUsername(decoded.username);            
            setExpire(decoded.exp);
        } catch (error) {
            navigate('/loginpage')
        }
    }    

    if(props.isAlreadyLogin) 
    return (
        <header className="spacing-sm">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light mt-2">
                    <Link to="/#" className="brandLinkNavbar">
                        <div className="brandNavbar ml-auto">
                            <img className="d-inline-block" src={brandIcon} width="20" height="20" alt="coffeIcon"/>
                            Coffe Shop                    
                        </div>
                    </Link>                    
                    <ul className="navbar-nav ml-auto right-bar">                                            
                        {/* <li className="nav-item">
                            <Link to="/loginpage" className="nav-link btn btn-warning">Login</Link>
                        </li> */}
                        <div className="dropdown">
                            <button 
                                className="btn" 
                                type="button" 
                                id="dropdownMenuButton" 
                                data-toggle="dropdown" 
                                aria-haspopup="true" 
                                aria-expanded="false"                                
                            >
                                <div className="row">
                                    <img src={unknownUser} alt="image" style={{"width":"40px", "height":"40px"}}/>
                                    <p className="mt-2 ml-2">{username}</p>
                                </div>
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                    </ul>                
                </nav>            
            </div>
        </header>
    )

    if(props.isPageLogin) 
    return (
        <header className="spacing-sm">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light mt-2">
                    <Link to="/#" className="brandLinkNavbar">
                        <div className="brandNavbar ml-auto">
                            <img className="d-inline-block" src={brandIcon} width="20" height="20" alt="coffeIcon"/>
                            Coffe Shop                    
                        </div>
                    </Link>                    
                    <ul className="navbar-nav ml-auto right-bar">                                            
                         <li className="nav-item">
                            <Link to="/registerpage" className="nav-link btn btn-warning">Sign Up</Link>
                        </li> 
                    </ul>                
                </nav>            
            </div>
        </header>
    )

    if(props.isLoginPage) 
    return (
        <header className="spacing-sm">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light mt-2">
                    <Link to="/" className="brandLinkNavbar">
                        <div className="brandNavbar ml-auto">
                            <img className="d-inline-block" src={brandIcon} width="20" height="20" alt="coffeIcon"/>
                            Coffe Shop                    
                        </div>
                    </Link>                    
                    <ul className="navbar-nav ml-auto right-bar">                    
                        <li className="nav-item">
                            <Link className="nav-link login" to="loginpage">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link btn btn-warning" to="registerpage">Sign Up</Link>
                        </li>                    
                    </ul>                
                </nav>            
            </div>
        </header>
    )

    return (
        <header className="spacing-sm">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light mt-2">
                    <Link to="/" className="brandLinkNavbar">
                        <div className="brandNavbar ml-auto">
                            <img className="d-inline-block" src={brandIcon} width="20" height="20" alt="coffeIcon"/>
                            Coffe Shop                    
                        </div>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>                        
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Product</Link>
                            </li>                
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Your Cart</Link>
                            </li>                
                            <li className="nav-item">
                                <Link to="/" className="nav-link">History</Link>
                            </li>                
                        </ul>                    
                    </div>                
                    <ul className="navbar-nav mr-auto right-bar">
                            <li className="nav-item">
                                <Link className="nav-link login" to="loginpage">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link btn btn-warning" to="registerpage">Sign Up</Link>
                            </li>
                    </ul>                
                </nav>            
            </div>
        </header>
    )
}
