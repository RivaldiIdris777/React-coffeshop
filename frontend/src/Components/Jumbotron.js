import React from 'react'
import { Link } from 'react-router-dom'
export default function Jumbotron() {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <div className="display-4 ml-auto">
                    <h1>Start Your Day With <br/> Coffe And Meals </h1>                    
                    <br/>
                    <p style={{ fontSize:"20px", marginTop:"-30px" }}>We provide high quality beans, good taste, and healthy <br/> meals made by love just for you. Start your day with us <br/> for a bigger smile!</p>
                    <Link to="/#" className="btn btn-warning justify-content-center" style={{ width:"180px", fontWeight:"bold"}}>
                        Get Started
                    </Link>
                </div>
            </div>            
        </div>
    )
}
