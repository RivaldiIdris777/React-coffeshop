import React from 'react'
import Hazelnut from "../assets/images/hazelnut.jpg"
import Pinky from "../assets/images/pinkypromise.jpg"
import Chicken from "../assets/images/chickenwings.jpg"
import checklist from "../assets/icon/checklist.svg"

import { Link } from 'react-router-dom'

export default function FavoriteProduct() {
    return (
        <div className="productFavorite" style={{ marginTop:"100px" }}>
            <div className="row justify-content-center">                
                    <div className="col-lg-12" style={{ textAlign:"center" }}>
                        <h2>Here is People's Favorite</h2>
                        <p>Let’s choose and have a bit taste of poeple’s favorite. It might be yours too!</p>
                        <div className="container mt-5 d-flex">
                            <div className="col-lg-4">
                                <div className="card">
                                    <img className="mx-auto mt-5" src={Hazelnut} alt="hazelnut" style={{ width:"168px", height:"189", borderRadius:"100px" }}/>
                                    <div className="card-body">
                                        <h5 className="card-title">Hazelnut Latte</h5>                                        
                                        <ul>
                                            <li>
                                                <img src={checklist} className="float-left " alt="checklist"/>
                                                <p> Hazelnut Syrup </p>
                                            </li>
                                            <li>
                                                <img src={checklist} className="float-left" alt="checklist"/>
                                                <p> Vanilla Whiped Cream </p>
                                            </li>
                                            <li>
                                                <img src={checklist} className="float-left" alt="checklist"/>
                                                <p> Ice / Hot </p>
                                            </li>
                                            <li>
                                                <img src={checklist} className="float-left" alt="checklist"/>
                                                <p> Sliced Banana no Top </p>
                                            </li>
                                        </ul>
                                        <div className="productPrice">
                                            <h3>
                                                IDR 25.000
                                            </h3>
                                            <button>
                                                <Link to="/#" style={{ color:"#6A4029" }}>Order Now</Link>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>                                                
                            <div className="col-lg-4">
                                <div className="card">
                                    <img  className="mx-auto mt-5" src={Pinky} alt="pinky" style={{ width:"168px", height:"189", borderRadius:"100px" }}/>
                                    <div className="card-body">
                                        <h5 className="card-title">Hazelnut Latte</h5>                                        
                                        <ul>
                                            <li>
                                                <img src={checklist} className="float-left " alt="checklist"/>
                                                <p> 1 Shot of Coffe </p>
                                            </li>
                                            <li>
                                                <img src={checklist} className="float-left" alt="checklist"/>
                                                <p> Vanilla Whiped Cream </p>
                                            </li>
                                            <li>
                                                <img src={checklist} className="float-left" alt="checklist"/>
                                                <p> Chocolate Biscuits </p>
                                            </li>
                                            <li>
                                                <img src={checklist} className="float-left" alt="checklist"/>
                                                <p> Strawberry Syrup </p>
                                            </li>
                                        </ul>
                                        <div className="productPrice">
                                            <h3>
                                                IDR 30.000
                                            </h3>
                                            <button>
                                                <Link to="/#" style={{ color:"#6A4029" }}>Order Now</Link>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>                    
                            <div className="col-lg-4">
                                <div className="card">
                                    <img className="mx-auto mt-5" src={Chicken} alt="chicken" style={{ width:"168px", height:"189", borderRadius:"100px" }}/>
                                    <div className="card-body">
                                        <h5 className="card-title">Hazelnut Latte</h5>                                        
                                        <ul>
                                            <li>
                                                <img src={checklist} className="float-left " alt="checklist"/>
                                                <p> Wings </p>
                                            </li>
                                            <li>
                                                <img src={checklist} className="float-left" alt="checklist"/>
                                                <p> Drum Sticks </p>
                                            </li>
                                            <li>
                                                <img src={checklist} className="float-left" alt="checklist"/>
                                                <p> Mayonaise and Lemon </p>
                                            </li>
                                            <li>
                                                <img src={checklist} className="float-left" alt="checklist"/>
                                                <p> Hot Fried </p>
                                            </li>
                                        </ul>
                                        <div className="productPrice">
                                            <h3>
                                                IDR 40.000
                                            </h3>
                                            <button>
                                                <Link to="/#" style={{ color:"#6A4029" }}>Order Now</Link>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>                    
                        </div>
                    </div>                    
            </div>            
        </div>
    )
}
