import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const BarChart = () => {
  const options = {
    chart: {
      type: 'column'
    },
    title: {
      text: '',
      align: 'left',  // Align the title to the left
      style: {
        color: 'rgba(85, 85, 85, 1)',
        fontSize: '15.86px',
        fontWeight: '500'
      }
    },
    xAxis: [
      {
        categories: [
  'Jan', 'Jan', 'Jan', 'Jan', 'Jan', 'Jan',
  'Jan', 'Jan', 'Jan', 'Jan', 'Jan', 'Jan'
],
        title: {
          text: null
        },
        labels: {
          enabled: true  // Enable primary x-axis labels
        },
        lineWidth: 0  // Remove primary x-axis line
      }, {
        categories: [
          '2023', '2023', '2023', '2023', '2023', '2023',
          '2023', '2023', '2023', '2023', '2023', '2023'
        ],
        title: {
          text: null
        },
        labels: {
          enabled: true,  // Enable secondary x-axis labels
          y: 0 // Adjust the position to avoid overlap
        },
        linkedTo: 0,
        opposite: false,
        tickLength: 0,
        lineWidth: 0  // Remove tick marks
      }
    ],
    yAxis: {
      
      min: 0,
      title: {
        text: null
      },
      labels: {
        enabled: true  // Enable y-axis labels
      },
      gridLineDashStyle: 'Dash'  // Dashed horizontal grid lines
    },
    tooltip: {
      valueSuffix: ' pieces'
    },
    plotOptions: {
      column: {
        dataLabels: {
          enabled: true
        },
        color: 'rgba(138, 136, 237, 1)',  // Bar color
        pointWidth: 15,  // Bar width
        borderRadius: 20  // Bar radius
      }
    },
    series: [{
      showInLegend: false,  // Remove series name
      data: [40, 80, 100, 55, 83, 76, 65, 50, 83, 75, 100, 80]
    }],
    credits: {
      enabled: false  // Remove Highcharts logo
    }
  };

  return (
    <div className='barChart-conatiner' style={{padding:"10px 30px"}}>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  );
};

export default BarChart;
