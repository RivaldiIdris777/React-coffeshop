// eslint-disable-next-line
import React, { Fragment, useState } from 'react';

import axios from 'axios'
import { numberWithCommas } from 'utils/utils';
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom"

// import veggieTomato from '../../assets/images/veggietomato.jpg';
// import hazelnutLatter from '../../assets/images/hazelnut.jpg';
// import summerFried from '../../assets/images/summerrice.jpg';
// import creammyLatter from '../../assets/images/creamyicelatte.jpg';

const Menu = ({product}) => {    
    // eslint-disable-next-line
    const [token, setToken] = useState('');
    // eslint-disable-next-line
    const [products, setProducts] = useState([]);    
    // eslint-disable-next-line
    const [expire, setExpire] = useState('');    

    const axiosJWT = axios.create();

    axiosJWT.interceptors.request.use(async(config) => {
        const currentDate = new Date();
        if(expire * 1000 < currentDate.getTime()) {
            const response = await axios.get('http://localhost:5000/token');
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            // eslint-disable-next-line
            const decoded = jwt_decode(response.data.accessToken);            
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    })    

        return (            
            
            <div className="productMenu col-lg-3">
                <Link to={`detailproduct/${product.uuid}`}>
                    <div className="productCard card text-center">
                        <img className="mx-auto" src={product.url} alt={product.name}/>
                        <p className="card-title align-center mt-2">{product.name}</p>
                        <div className="card-body">
                            <p className="product-price">Rp. {numberWithCommas(product.price)}</p>
                        </div>
                    </div>
                </Link>
            </div>                                
                
        )
    }
export default Menu;