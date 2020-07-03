import React, { Component } from 'react';
import { connect } from 'react-redux';
//npm install --save react-chartjs-2 chart.js
import { Bar } from 'react-chartjs-2';

class Chart extends Component {
  state = {
    chartData: {
      labels: ['one', 'two', 'three'],
      datasets: [
        {
          label: 'Population',
          data: [
            33, 45, 67
          ],

        }
      ]
    }
  }

  render() {
    return (
      <div className="chart" style={{width:"80%"}}>
        <Bar
          data={this.state.chartData}
          width={20}
          height={3}
          options={{
            maintainAspectRatio: true
          }} />


      </div>
    );
  }
}

const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(Chart);