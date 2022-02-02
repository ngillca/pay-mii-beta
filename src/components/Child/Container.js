import React from 'react';
import './container.css'
export default function Container() {
  return (
    <>
      <div className="flex-container">
        <div className="inner-container">
            <h1>Amount</h1>
            <input type="string" placeholder="enter $ amount"/>
            <h1>Reason</h1>
            <input type="string" placeholder="i.e., allowance, mall, etc." />
           <br/>
           <div className="button-style">
                Cancel
              </div>
              <div className="button-style">
                Pay Mii
              </div>
          </div>
      </div>
    </>
  );
}
