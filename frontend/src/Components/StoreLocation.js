import React from 'react'
import mapVector from '../assets/images/maps.svg'

export default function StoreLocation() {
    return (
        <div className="storeLocation">
            <div className="row justify-content-center">
                <div className="col-lg-12" style={{ textAlign:"center" }}>
                    <div className="slogan">
                        <h2>Visit Our Store in the <br/> Spot on the Map Below</h2>
                        <p> See our store in every city on the spot and spen your good day there. See you soon!</p>
                    </div>
                    <div className="mapVector">
                        <img src={mapVector} alt="mapVector"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
