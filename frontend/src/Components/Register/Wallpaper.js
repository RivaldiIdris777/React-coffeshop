import React from 'react'
import Footer from 'Components/Footer'
import Header from 'Components/Header'
import imageLogin from '../../assets/images/loginBackground.png'
import Form from './Form'


export default function Wallpaper() {
    return (
        <div className="wallpaperLogin">                
                <div className="row">
                        <div className="imageBackground col-lg-6">
                            <img src={imageLogin} alt="imageLogin"/>
                        </div>
                        <div className="formBackground col-lg-6">
                            <Header isLoginPage />
                            <Form/>
                        </div>
                </div>
                <Footer/>            
            </div>
    )
}
