import React, { Component } from 'react'
import Footer from 'Components/Footer'
import imageLogin from '../../assets/images/loginBackground.png'
import Header from 'Components/Header'
import FormLogin from './Form'


export default class wallpaper extends Component {
    render() {
        return (
            <div className="wallpaperLogin">                
                <div className="row">
                        <div className="imageBackground col-lg-6">
                            <img src={imageLogin} alt="imageLogin"/>
                        </div>
                        <div className="formBackground col-lg-6">
                            <Header isPageLogin/>
                            <FormLogin/>
                        </div>
                </div>
                <Footer/>            
            </div>
        )
    }
}
