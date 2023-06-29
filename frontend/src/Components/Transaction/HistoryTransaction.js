import React from "react";
import coldbrew from "../../assets/images/coldbrew.png";

const HistoryTransaction = () => {
  return (
    <div className="historyTransaction pt-5">
      <h2 className="text-center">Lets see what you have bought</h2>
      <div className="row mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="card text-center">
                <div className="row pl-3 pt-3 pb-3">
                  <img src={coldbrew} alt="imageTrans" className="image ml-3" />
                  <div className="descTrans ml-3 text-left">
                    <h3>Cold Brew</h3>
                    <h6>IDR 3.4000</h6>
                    <h6>Delivered</h6>
                  </div>
                </div>
              </div>              
            </div>            
            <div className="col-md-4 mb-3">
              <div className="card text-center">
                <div className="row pl-3 pt-3 pb-3">
                  <img src={coldbrew} alt="imageTrans" className="image ml-3" />
                  <div className="descTrans ml-3 text-left">
                    <h3>Cold Brew</h3>
                    <h6>IDR 3.4000</h6>
                    <h6>Delivered</h6>
                  </div>
                </div>
              </div>              
            </div>            
            <div className="col-md-4 mb-3">
              <div className="card text-center">
                <div className="row pl-3 pt-3 pb-3">
                  <img src={coldbrew} alt="imageTrans" className="image ml-3" />
                  <div className="descTrans ml-3 text-left">
                    <h3>Cold Brew</h3>
                    <h6>IDR 3.4000</h6>
                    <h6>Delivered</h6>
                  </div>
                </div>
              </div>              
            </div>            
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryTransaction;
