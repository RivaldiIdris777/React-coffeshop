import React, { Component } from 'react'

import Menu from 'Components/ProductMenu/Menu'
import Header from 'Components/Header'
import Footer from 'Components/Footer'

import axios from 'axios'
import ListTitleMenu from 'Components/ProductMenu/ListTitleMenu'


export default class ProductMenu extends Component {

    // get product
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            categories: [],
            categoryChoose: ''
        }
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/products?category='+this.state.categoryChoose)
            .then(res => {                
                const products = res.data;
                this.setState({products});
            })
            .catch(error => {
                console.log("Terdapat Error", error)
            })                
    }

    changeCategory = (value) => {
        this.setState({
            categoryChoose: value,
            products: []
        })     

        if (value==="All") {
            axios
            .get(`http://localhost:5000/products`)
            .then(res => {                
                const products = res.data;
                this.setState({products});
            })
            .catch(error => {
                console.log("Terdapat Error", error)
            })
        }

        if (value) {
            axios
            .get(`http://localhost:5000/products?category=`+value)
            .then(res => {                
                const products = res.data;
                this.setState({products});
            })
            .catch(error => {
                console.log("Terdapat Error", error)
            })
        }
        

    }
    

    render() {
        const { products, categoryChoose } = this.state        
        return (
            <>

                <Header isAlreadyLogin/>
                    <div className="listTitleMenu">
                        <nav className="navbar navbar-expand-lg navbar-light mt-2">
                            <div className="collapse navbar-collapse">
                                <ul className="navbar-nav mx-auto">                                    
                                    <ListTitleMenu changeCategory={this.changeCategory} categoryChoose={categoryChoose}/>                                    
                                </ul>
                            </div>
                        </nav>
                    </div>           
                
                    <div className="container">
                        <div className="row mt-5">
                            {products && products.map((product) => (
                                <Menu key={product.uuid} product={product} />
                            ))}
                        </div>
                    </div>
                
                <Footer/>      
            </>
        )
    }
}
