import React from 'react';
import '../assests/css/performance.css';

function Performance() {
    return (
        <div className='performance-container'>
            <div className='performance-container-header'>
                <h1>Performance</h1>
            </div>
            <div className="main-container">
                <div className="row-container" >
                    <div className="box">
                        <p>Days to Hire  </p>
                        <h2 style={{ color: "rgba(218, 93, 182, 1)" }}>30</h2>
                    </div>
                    <div className="box">
                        <p>Days to Fill  </p>
                        <h2 style={{ color: "rgba(251, 113, 88, 1)" }}>20</h2>
                    </div>

                </div>
                <div className="row-container" style={{marginTop:"30px"}}>
                    <div className="box">
                        <p>Acceptance Rate </p>
                        <h2 style={{ color: "rgba(138, 136, 237, 1)" }}>40%</h2>
                    </div>
                    <div className="box">
                        <p>Withdrawal Rate  </p>
                        <h2 style={{ color: "rgba(91, 196, 191, 1)" }}>50%</h2>
                    </div>

                </div>
                <div className="row-container" style={{marginTop:"30px"}}>
                    <div className="box">
                        <p>Hired Within TAT  </p>
                        <h2 style={{ color: "rgba(182, 159, 179, 1)" }}>60%</h2>
                    </div>
                    <div className="box">
                        <p>Hired More than TAT  </p>
                        <h2 style={{ color: "rgba(160, 160, 203, 1)" }}>80%</h2>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Performance;