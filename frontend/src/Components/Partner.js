import React from 'react'
import netflix from '../assets/images/netflixblurr.png';
import reddit from '../assets/images/redditblurr.png';
import amazon from '../assets/images/amazonblurr.png';
import spotify from '../assets/images/spotifyblurr.png';
import discord from '../assets/images/discordblurr.png';

export default function Partner() {
    return (
        <div className="ourPartner">
            <div className="row justify-content-center">
                <div className="col-lg-12" style={{ textAlign:"center" }}>
                    <div className="slogan">
                        <h2>Our Partner</h2>
                    </div>
                    <div className="partnerVector d-flex ">
                        <div className="col-lg">
                            <img src={netflix} alt="netflix" style={{ width:"180px", height:"80px", marginTop:"-10px"}}/>
                        </div>
                        <div className="col-lg">
                            <img src={reddit} alt="redddit" style={{ width:"180px", height:"60px"}}/>
                        </div>
                        <div className="col-lg">
                            <img src={amazon} alt="amazon" style={{ width:"180px", height:"100px", marginTop:"-10px"}}/>
                        </div>
                        <div className="col-lg">
                            <img src={discord} alt="discord" style={{ width:"180px", height:"60px"}}/>
                        </div>
                        <div className="col-lg">
                            <img src={spotify} alt="spotify" style={{ width:"180px", height:"60px"}} />
                        </div>                                          
                    </div>
                </div>
            </div>
        </div>
    )
}
