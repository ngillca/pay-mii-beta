import React from 'react';
import ChildView from './Child/Container';
import './child.css';
import Image from '././avatar1.png';
export default function ChildScreen() {
  return (
    <>
      {/* open this container in modal if make
      request is clicked*/}
      <div className="flex-container">
        
        <div>
        <img src={Image} className="avatar"/>
        </div>
      <div>
        
       
        <h1>Eddy Emmerson</h1>
        </div>
      </div>

      <div className="button-container">
          <div className="button-screen">
            Request $$$
          </div>
        </div>
      <ChildView />

    </>
  );
}
