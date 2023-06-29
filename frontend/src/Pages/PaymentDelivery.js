import React, { Component } from 'react'
import Header from 'Components/Header'
import Footer from 'Components/Footer'
import PagePayment from 'Components/PaymentDelivery/PagePayment'


export default class PaymentDelivery extends Component {
    render() {
        return (
            <>
                <Header isAlreadyLogin/>
                <PagePayment/>
                <Footer/>              
            </>
        )
    }
}
