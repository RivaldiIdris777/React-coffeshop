/* eslint-disable */
import React, { useEffect, useState } from 'react'
import coldbrew from '../../assets/images/coldbrew.png';
import cardButton from '../../assets/images/cardButton.png';
import bankButton from '../../assets/images/bankButton.png';
import deliveryButton from '../../assets/images/deliveryButton.png';
import axios from 'axios';

const PagePayment = () => {
    const [carts, setCart] = useState([]);
    
    const getCartData = async () => {
        await axios
        .get(`http://localhost:5000/cartid`)
        .then(res => {
            console.log(res.data.data)
            const response = res.data.data;
            setCart([response]);
        })
        .catch(err => {
            console.log(err)
        })
    }    

    useEffect(() => {
        getCartData();
    }, []);


    return (
        <div className="pagePayment pl-5 pr-5">
            <div className="row">
                <div className="col-lg-6 orderSummary mt-5">
                    <h1 className='text-center'>Checkout your </h1>
                    <h1 className='text-center'>item now</h1>
                    <div className="container pt-2 pb-5">
                        <h2 className='text-center mt-3'>Order Summary</h2>
                        {carts && carts.map(cart => (
                            <div key={cart.cart_id} className="card col-8 mx-auto mt-2">
                                <div className="row">
                                    <img src={coldbrew} alt="imageProduct" className="image ml-3 mt-3 mb-2" />
                                    <div className="descItem ml-5 mt-2 mb-2">
                                        <p>{cart.products.name}</p>
                                        <p>X{cart.jumlah}</p>                                            
                                    </div>
                                    <div className="priceItem ml-auto pr-5">
                                        <p className='mt-5'>{cart.total_harga}</p>
                                    </div>
                                </div>
                            </div>
                        ))}     
                        <hr className='col-8' />
                        <div className="paymentSub d-flex justify-content-around">
                            <p >SUBTOTAL</p>
                            <p className="ml-5">IDR 130.000</p>
                        </div>
                        <div className="paymentSub d-flex justify-content-around">
                            <p >TAX & FEES</p>
                            <p className="ml-5">IDR 20.000</p>
                        </div>
                        <div className="paymentSub d-flex justify-content-around">
                            <p >SHIPING</p>
                            <p className="ml-5">IDR 20.000</p>
                        </div>
                        <div className="paymentTotal d-flex justify-content-around mt-5">
                            <h1 >TOTAL</h1>
                            <h1>IDR 170.000</h1>
                        </div>
                    </div>

                </div>
                <div className="col-lg-6 addressPayment mt-5">
                    <h1 className='text-center'>Address Detail</h1>
                    <div className="container pt-2 pb-5 mt-5">
                        <p className='ml-2 mt-2'>Deliver to <span>Iskandar Street Km 5 refinery road oppsite re
                            public road, effurun, Jakarta</span></p>
                        <p>+62 81348287878</p>
                    </div>
                    <h1 className='text-center mt-5'>Payment method</h1>
                    <div className="container pt-2 pb-3 mt-2">
                        <div className="form-check mt-3 ml-2">
                            <input className="form-check-input mt-2" type="radio" name="flexRadioDefault" id="flexRadioDefault2" readOnly />
                            <img className='imgButton mr-2' src={cardButton} alt="cardPayment" />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Card
                            </label>
                        </div>
                        <div className="form-check mt-3 ml-2">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" readOnly />
                            <img className='imgButton mr-2' src={bankButton} alt="cardPayment" />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Bank Account
                            </label>
                        </div>
                        <div className="form-check mt-3 ml-2">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" readOnly />
                            <img className='imgButton mr-2' src={deliveryButton} alt="cardPayment" />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Cash on delivery
                            </label>
                        </div>
                    </div>
                    <button className='btn btn-primary btn-lg btn-block mt-3 pt-3 pb-3'>Confirm and Pay</button>
                </div>
            </div>
        </div>
    )
}

export default PagePayment