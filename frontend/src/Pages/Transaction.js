import React, { Component } from 'react'
import Header from 'Components/Header'
import HistoryTransaction from 'Components/Transaction/HistoryTransaction'
import Footer from 'Components/Footer'

export default class Transaction extends Component {
    render() {
        return (
            <>
                <Header isLogin/>
                <HistoryTransaction/>
                <Footer/>              
            </>
        )
    }
}
