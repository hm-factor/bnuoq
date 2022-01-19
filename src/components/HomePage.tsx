import React, { useState } from 'react';
import PhotoBank from './PhotoBank';
import MerchShop from'./MerchShop';

function HomePage () {

  // toggles photo and shop modals -- if one is opened while the other is already opened,
  // itll close the opposite modal
  let [isModal, setIsModal] = useState(false);
  let [isShop, setIsShop] = useState(false);

  function openModal ():void {
    setIsShop(false);
    setIsModal(true);
  }

  function toggleShop ():void {
    setIsModal(false);
    setIsShop(!isShop);
  }

  return (
    <div className='homepage-container'>
      {/* TOP MODAL */}
      <PhotoBank isModal={isModal} setIsModal={setIsModal}/>

      {/* RIGHT MODAL */}
      <MerchShop isShop={isShop} setIsShop={setIsShop}/>

      {/* PANELS */}
      <div className="panel-container">
        <div className='band-name-container'>
          <p>COHORT <sup>(b)</sup></p>
        </div>
        <div className="panels">
          <div className="pane">
            <div className="pane-content">
              <div className="pane-title">
                Shows
              </div>
              <div className="pane-body">
                no upcoming shows...
              </div>
            </div>
          </div>
          <div className="pane">
            <div className="pane-content">
              <div className="pane-title">
                Photos
              </div>
              <div className="pane-body">
                cohort hive mind art
                <button onClick={openModal}>More</button>
              </div>
            </div>
          </div>
          <div className="pane">
            <div className="pane-content">
              <div className="pane-title">
                Merch
              </div>
              <div className="pane-body">
                check out the store and buy some goodies
                <button onClick={toggleShop}>More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;