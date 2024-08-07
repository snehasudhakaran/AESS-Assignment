import React from 'react';
import '../assests/css/position.css';

function Position() {
  return (
    <div className='position-container'>
        <div className='position-container-header'>
            <h1>Position</h1>
        </div>
        <div className="main-container">
            <div className="row-container">
            <div className="box">
                <p>Assigned<br></br> to me </p>
                <h2>100</h2>
            </div>
            <div className="box">
                <p>Open<br></br> Positions </p>
                <h2 style={{color: "rgba(119, 162, 199, 1)"}}>25</h2>
            </div>
            <div className="box">
                <p>Closed<br></br> Positions </p>
                <h2 style={{color: "rgba(218, 93, 182, 1)"}}>20</h2>
            </div>
            </div>
            <div className="row-container">
          <div className="box">
            <p>Cancelled <br></br>Positions </p>
            <h2 style={{color: "rgba(138, 136, 237, 1)"}}>15</h2>
          </div>
          <div className="box">
            <p>Open<br></br> Positions </p>
            <h2 style={{color: "rgba(251, 113, 88, 1)"}}>25</h2>
          </div>
          <div className="box">
            <p>Open<br></br> Positions </p>
            <h2 style={{color: "rgba(91, 196, 191, 1)"}}>25</h2>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Position;