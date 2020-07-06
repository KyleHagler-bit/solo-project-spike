import React, { Component } from 'react';
import { connect } from 'react-redux';
//npm install --save react-chartjs-2 chart.js
import { Bar, Line } from 'react-chartjs-2';
import moment from 'moment';

class Chart extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_CHART' })

  }

  //NEED TO: label y-axis with moods AND fix how dates are displayed on x axis
  values = () => {
    let emotionValues = [];
    this.props.chart.map((item, index) => {
      emotionValues.push(item.emotion_value);


      // return (
      //   item.emotion_value
      // )
    })

    return emotionValues;
  }

  state = {
    chartData: {
      labels: this.props.chart.map((item, index) => {
        let x =new Date(item.date_logged)
        return (
          x.toDateString()
        )
      }), //need to be the date of entries
      datasets: [
        { 
          label: 'Mood over time',
         
          data: this.values(), //dont have an array in an array
          backgroundColor: '#7FFFD4'
        }],

    }
  }


  render() {
    console.log('inside render', this.props.chart)
    return (
      <div className="chart" style={{ width: "80%" }}>
        <Line
          data={this.state.chartData}
          width={10}
          height={3}
          options={{
            responsive: true,
            title: {
              display: true,
              fontColor: 'blue',
              fontSize: 24,
              text: 'Mood Over Time'
          } ,
            scales: {
              xAxes: [{

                display: true,
                scaleLabel: {
                  display: true,
                  labelString: 'Date',
                  fontColor:'red',
                  fontSize:24
                }
              }],
              yAxes: [{
                ticks: {
                  min: 1, max: 7,
                  fontColor: 'green',
                  callback: function (label, index, labels) {
                    switch (label) { //Allows us to change the yaxis labels
                      case 1:
                        return 'Horrible';
                      case 2:
                        return 'Bad';
                      case 3:
                        return 'Poor';
                      case 4:
                        return 'Neutral';
                      case 5:
                        return 'Okay';
                      case 6:
                        return 'Good';
                      case 7:
                        return 'Great!';
                    }
                  }
                },
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: 'Mood',
                  fontColor: 'red',
                  fontSize: 24

                }
              }]
            }


          }} />

        {/* <pre>{JSON.stringify(this.props.chart)}</pre> */}

      </div>
    );
  }
}

const mapStateToProps = state => ({
  chart: state.chart,
});

export default connect(mapStateToProps)(Chart);