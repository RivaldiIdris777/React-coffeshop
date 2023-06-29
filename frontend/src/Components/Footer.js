import React from 'react'
import { Link } from 'react-router-dom'
import brandIcon from '../assets/images/coffeebrand.svg'
import facebook from "../assets/images/facebook.png"
import twitter from "../assets/images/twitter.png"
import instagram from "../assets/images/instagram.png"

export default function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mr-auto leftDesc">
                        <div className="brand">
                            <img className="d-inline-block mr-2" src={brandIcon} alt="brandIcon"/>
                            Coffe Shop
                        </div>
                        <br/>
                        <p>Coffee Shop is a store that sells some good <br/> meals, and especially coffee. We provide <br/> high quality beans</p>
                        <div className="linkSocialMedia">
                            <img src={facebook} alt="facebook" />
                            <img src={twitter} alt="twitter"/>
                            <img src={instagram} alt="instagram"/>
                        </div>
                        <br/>
                        <span>©2020CoffeeStore</span>
                    </div>
                    <div className="col-lg-6 ml-auto d-flex rightDesc">
                        <div className="col-lg-3 ml-auto product">
                            <p>Product</p>
                            <ul>
                                <li><Link to="/#" style={{ color:"#4F5665" }}>Download</Link></li>
                                <li><Link to="/#" style={{ color:"#4F5665" }}>Pricing</Link></li>
                                <li><Link to="/#" style={{ color:"#4F5665" }}>Locations</Link></li>
                                <li><Link to="/#" style={{ color:"#4F5665" }}>Countries</Link></li>
                                <li><Link to="/#" style={{ color:"#4F5665" }}>Blog</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 ml-auto">
                            <div className="col-lg-3 ml-auto engage">
                                <p>Engage</p>
                                <ul>
                                    <li><Link to="/#" style={{ color:"#4F5665" }}>Download</Link></li>
                                    <li><Link to="/#" style={{ color:"#4F5665" }}>Pricing</Link></li>
                                    <li><Link to="/#" style={{ color:"#4F5665" }}>Locations</Link></li>
                                    <li><Link to="/#" style={{ color:"#4F5665" }}>Countries</Link></li>
                                    <li><Link to="/#" style={{ color:"#4F5665" }}>Blog</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
