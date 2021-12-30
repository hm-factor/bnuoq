import React, { useState } from 'react';
// import sample from '../vids/bar_freda_no_audio_hunter.mov';

function HomePage () {

  let [isModal, setIsModal] = useState(false);

  function openModal () {
    setIsModal(!isModal)
  }

  return (
    <div className="homepage-container">
      <div className="panel-container">
        <div className={`dropdown ${isModal ? 'modal-on' : ''}`}>hi</div>
        <div className='placeholder-hover'>
          NAME
        </div>
        <div className="panels">
          <div className="pane">
            <div className="pane-content">
              <div className="pane-title">
                Shows
              </div>
              <div className="pane-body">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Doloremque velit aliquam facere excepturi vero assumenda.
              </div>
            </div>
          </div>
          <div className="pane">
            <div className="pane-content">
              <div className="pane-title">
                Photos
              </div>
              <div className="pane-body">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Doloremque velit aliquam facere excepturi vero assumenda.
                <button onClick={()=>openModal()}>More</button>
              </div>
            </div>
          </div>
          <div className="pane">
            <div className="pane-content">
              <div className="pane-title">
                Merch
              </div>
              <div className="pane-body">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Doloremque velit aliquam facere excepturi vero assumenda.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;