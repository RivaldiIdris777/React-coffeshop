import React from 'react'
import sloganImage from "../assets/images/sloganImage.jpg"
import checkList from "../assets/icon/checklist.svg"
export default function SloganPanel() {
    return (
        <div className="row sloganspace mt-5 justify-content-center">
            <div className="col-lg-5 ml-5">
                <img src={sloganImage} alt="sloganImage" style={{ width:"473px", height:"357px" }}/>
            </div>
            <div className="col-lg-5 mt-5 ml-5">
                <h5>We Provide Good Coffee<br/> and Healthy Meals </h5>
                <p>You can explore the menu that we provide with fun <br/> and have their own taste and make your day better.</p>
                <ul className="mt-3" style={{ marginLeft:"-40px" }}>
                    <li>
                        <img className="float-left mr-2" src={checkList} alt="checkList"/>
                        <p>High quality beans</p>
                    </li>
                    <li>
                        <img className="float-left mr-2" src={checkList} alt="checkList"/>
                        <p>Healthy meals, you can request the ingredients</p>
                    </li>
                    <li>
                        <img className="float-left mr-2" src={checkList} alt="checkList"/>
                        <p>Chat with our staff to get better experience for ordering</p>
                    </li>
                    <li>
                        <img className="float-left mr-2" src={checkList} alt="checkList"/>
                        <p>Free member card with a minimum purchases of IDR 200.000.</p>
                    </li>
                </ul>                
            </div>
        </div>
    )
}
