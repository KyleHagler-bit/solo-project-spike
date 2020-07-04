import React, {Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../Chart/Chart';
import PieChart from '../PieChart/PieChart';

class SecretsPage extends Component {

  render() {
    return (
      <div className="content">
        <Chart/>
        <PieChart/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  secrets: state.secrets,
  user: state.user,
});

export default connect(mapStateToProps)(SecretsPage);
