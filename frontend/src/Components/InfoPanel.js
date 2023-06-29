import React from 'react'
import User from '../assets/icon/user.svg'
import location from '../assets/icon/location.svg'

export default function InfoPanel() {
    return (
        <div className="row justify-content-center">
            <div className="col-10 info-panel">
                <div className="row">
                    <div className="col-lg">
                        <img src={User} alt="userIcon" className="float-left"/> 
                        <h4>90+</h4>
                        <p>Staff</p>
                    </div>
                    <div className="col-lg">
                        <img src={location} alt="locationIcon" className="float-left"/> 
                        <h4>30+</h4>
                        <p>Stores</p>
                    </div>
                    <div className="col-lg">
                        <img src={User} alt="userIcon" className="float-left"/> 
                        <h4>800</h4>
                        <p>Customers</p>
                    </div>
                </div>
            </div>            
        </div>
    )
}
