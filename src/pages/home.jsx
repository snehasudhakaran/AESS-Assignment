import React from 'react';
import Position from '../components/position';
import '../assests/css/home.css';
import Performance from '../components/performance';
import BarChart from '../charts/bar_chart';
import Pipeline from '../components/pipeline';

function Home() {
  return (
    <div className='home-container'>
    <div className='home-content-container '>
       
    <div class="child child1"><Position/></div>
    <div class="child child2"><Pipeline/></div>
    </div>
    <div className='home-content-container' style={{marginTop: "30px"}}>
       
    <div class="child child1"><Performance/></div>
    <div class="child child2">
     <div className='barchart-container-header'>
      <div>

            <h1>Month wise Hiring</h1>
      </div>
      <div className='barchart-buttons'>
        <button className='barchart-button'>
          <p>Management Level</p>
          <span><ion-icon name="chevron-down-outline"></ion-icon></span>
        </button>
        <button className='barchart-button'>
          <p>Role</p>
          <span><ion-icon name="chevron-down-outline"></ion-icon></span>
        </button>
        <button className='barchart-button'>
          <p>Current Year</p>
          <span><ion-icon name="chevron-down-outline"></ion-icon></span>
        </button>
      </div>
        </div>
      <BarChart/>
      </div>
    </div>
    </div>
  )
}

export default Home;

