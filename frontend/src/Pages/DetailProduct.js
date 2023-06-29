import React, { Component } from 'react'
import Header from 'Components/Header'
import DescriptionProduct from 'Components/DetailProduct.js/DescriptionProduct'
import Footer from 'Components/Footer'

export default class DetailProduct extends Component {
    render() {
        return (
            <>
                <Header isAlreadyLogin/>
                <DescriptionProduct />  
                <Footer/>              
            </>
        )
    }
}
