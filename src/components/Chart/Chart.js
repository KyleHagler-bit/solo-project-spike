import React, { Component } from 'react';
import { connect } from 'react-redux';
//npm install --save react-chartjs-2 chart.js
import { Bar, Line } from 'react-chartjs-2';

class Chart extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_CHART' })
    console.log('inside dispatch', this.props.chart)
  }

  values = () => {
    let emotionValues = [];
    this.props.chart.map((item, index) => {
      emotionValues.push(item.emotion_value);
      

      // return (
      //   item.emotion_value
      // )
    })
    console.log(emotionValues)
    return emotionValues;
}

  state = {
    chartData: {
      labels: this.props.chart.map((item, index) => {
        return (
          item.date_logged
        )
      }), //need to be the date of entries
      datasets: [
        {
          label: 'Mood over time',
          data: this.values() //dont have an array in an array

        }
        //end dataset
      ] //end datset
    }
  } //end chartData


  render() {
    console.log('inside render', this.props.chart)
    return (
      <div className="chart" style={{ width: "80%" }}>
        <Line
          data={this.state.chartData}
          width={20}
          height={3}
          options={{
            maintainAspectRatio: true
          }} />

        <pre>{JSON.stringify(this.props.chart)}</pre>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  chart: state.chart,
});

export default connect(mapStateToProps)(Chart);