import React, {Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../Chart/Chart';

class SecretsPage extends Component {
  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        
        <Chart/>
        
      </div>
    );
  }
}

const mapStateToProps = state => ({
  secrets: state.secrets,
  user: state.user,
});

export default connect(mapStateToProps)(SecretsPage);
