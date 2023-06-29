/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import coldbrew from '../../assets/images/coldbrew.png';
import BreadCrumb from './BreadCrumb';
import { useParams } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import axios from 'axios';
import { numberWithCommas } from 'utils/utils';

const DescriptionProduct = () => {        

    // Get UserId
    const [user_id, setUserid] = useState('');
    const [setToken] = useState('');
    const [setExpire] = useState('');

    let navigate = useNavigate();

    const refreshToken = async () => {
        try {
            const response = await axios.get('http://localhost:5000/token');
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setUserid(decoded.user_id);
            setExpire(decoded.exp);            
        } catch (error) {
            navigate('/loginpage')
        }
    }

    // Fetch product by id
    const [product_id, setGetProductId] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [url, setUrl] = useState("");
    const {uuid} = useParams();

    const getProductById = async () => {
        const response = await axios.get(`http://localhost:5000/product/${uuid}`);
        setGetProductId(response.data.product_id);
        setName(response.data.name);
        setDescription(response.data.description);
        setPrice(response.data.price);
        setUrl(response.data.url);        
    }   
    
    // const inputItem = document.getElementsByClassName('countInput');
    // const jumlahItem = inputItem[0].length

    useEffect(() => {
        getProductById();
        refreshToken();        
    }, []);    

    // Function button increase decrease
    const [quantity, setQuantity] = useState(1);
    const increaseQty = () => {
        const count = document.querySelector('.countInput')
        const qty = count.valueAsNumber + 1;
        setQuantity(qty)
    }

    const decreaseQty = () => {
        const count = document.querySelector('.countInput')
        if (count.valueAsNumber <= 1) return;
        const qty = count.valueAsNumber - 1;
        setQuantity(qty)
    }                    

    // Function save cart product 
    const saveCart = async(e) => {        
        e.preventDefault();        
        const newCart = {
            userId: user_id,
            jumlah: quantity,
            totalHarga: price * quantity,
            productId: product_id
        }
        fetch('http://localhost:5000/cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newCart),
        })
        .then((resp) => resp.json())
        navigate("/paymentdelivery")
    }    

  return (
    <div className="detailProduct">
        <div className="row col-12">
            <div className="imageItem col-lg-6 mt-3">
                <div className="container">
                    <BreadCrumb/>
                    <div className="imageDetail text-center">
                        <img src={url} alt="imageProduct" className="image"/>
                        <p className='nameProduct mt-3'>{name}</p>
                        <p className='priceProduct'>IDR <span>{numberWithCommas(price)}</span></p>
                    </div>
                    <div className="detailButton text-center">
                        <button className='btn addtoCart col-4'>
                            Add To Cart
                        </button>
                        
                    </div>    
                </div>
            </div>
            <div className="description col-lg-6 mt-5">
                <div className="container pt-5 pb-5">
                    <div className="descProduct h-80 pl-4 pr-4">
                        <p>Delivery only on <span>Monday to friday</span>at 1 - 7 pm</p>
                        <p>{description}</p>
                        {/* <input type="text" className='form-control' value={product_id}/> */}
                    </div>
                </div>
                <div className="deliveryMethod text-center mt-5">
                    <p>Chose Delivery Methods</p>
                    <div className="row justify-content-center">
                        <button className="btn btn-active ml-1 mr-1">Dine In</button>
                        <button className="btn ml-1 mr-1">Door Delivery</button>
                        <button className="btn ml-1 mr-1">Pick Up</button>
                    </div>
                </div>
            </div>
        </div>        
        
        <form onSubmit={saveCart}>
        <div className="checkoutProduct">
                <div className="row" >
                        <div className="container ml-auto col-6">
                            <div className="row justify-content-between pl-5 pr-5">
                                <img src={url} alt="imageProduct" className="image mt-3 "/>
                                <p className="mt-5 ml-5">{name}</p>
                                <span className="btn btn-sm plusButton mt-5 mb-5" onClick={increaseQty}>+</span>
                                
                                <input type="number" className="form-control col-1 mt-5 mb-5 countInput" value={quantity} readOnly/>
                                
                                <span className="btn btn-sm btn-circle minusButton mt-5 mb-5" onClick={decreaseQty}>-</span>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-warning mr-auto pr-2 pl-2">ADD TO CART</button>                
                </div>                        
            </div>
        </form>
    </div>
  )
}

export default DescriptionProduct