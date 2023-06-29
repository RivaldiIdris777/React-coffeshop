import React, { Component } from 'react'
import Header from '../Components/Header'
import Jumbotron from 'Components/Jumbotron'
import InfoPanel from 'Components/InfoPanel'
import SloganPanel from 'Components/SloganPanel'
import FavoriteProduct from 'Components/FavoriteProduct'
import StoreLocation from 'Components/StoreLocation'
import Partner from 'Components/Partner'
import Footer from 'Components/Footer'

export default class LandingPage extends Component {
    render() {
        return (
            <>
                <Header/>
                <Jumbotron/>    
                <InfoPanel/>
                <SloganPanel/>
                <FavoriteProduct/>
                <StoreLocation/>
                <Partner/>
                <Footer/>
            </>
        )
    }
}
