import React from 'react';
import '../assests/css/pipeline.css'

function Pipeline() {
  return (
    <div className='pipeline-container'>
        <div className='performance-container-header'>
                <h1>Pipeline</h1>
        </div>
        <div className="box">
                        <p>Total <br></br>Applications  </p>
                        <h2 style={{ color: "rgba(119, 162, 199, 1)" }}>03</h2>
        </div>
        <div className='parent-container'>
          <div className="pipeline-box" style={{backgroundColor:"rgba(231, 243, 245, 1)"}}>
            <p>Screened</p>
            <h1 >65</h1>
          </div>
          <div className='line'></div>
          <div className="pipeline-box" style={{backgroundColor:"rgba(240, 240, 255, 1)"}}>
            <p>Shortlisted</p>
            <h1 style={{color:"rgba(138, 136, 237, 1)"}}>40</h1>
          </div>
          <div className='line'></div>
          <div className="pipeline-box" style={{backgroundColor:"rgba(244, 234, 243, 1)"}}>
            <p>Interview</p>
            <h1 style={{color:"rgba(182, 159, 179, 1)"}}>40</h1>
          </div>
          <div className='line'></div>
          <div className="pipeline-box" style={{backgroundColor:"rgba(255, 238, 250, 1)"}}>
            <p>Offered</p>
            <h1 style={{color:"rgba(218, 93, 182, 1)"}}>30</h1>
          </div>
          <div className='line'></div>
          <div className="pipeline-box" style={{backgroundColor:"rgba(224, 239, 235, 1)"}}>
            <p>Hired</p>
            <h1 style={{color:"rgba(130, 193, 173, 1)"}}>20</h1>
          </div>
          <div className='line'></div>
          <div className="pipeline-box" style={{backgroundColor:"rgba(255, 242, 240, 1)"}}>
            <p>Rejected</p>
            <h1 style={{color:"rgba(251, 113, 88, 1)"}}>10</h1>
          </div>
        </div>
    </div>
  )
}

export default Pipeline