import React, { Component, PropTypes } from 'react';
import HighchartView from 'react-native-highcharts';

class ChartView extends Component {
  static propTypes = {
    data: PropTypes.object,
    chartConfig: PropTypes.object,
    height: PropTypes.number
  };

  static defaultProps = {
    data:{},
    chartConfig:{},
    height: 300
  }

  constructor(props) {
    super(props);
  }
  state = {
    config: {}
  }

  componentWillMount(){
            let series = [];
            series.push(this.props.data);
            let customConfig = {
              ... this.props.chartConfig,
              series
            };

            this.setState({config: customConfig});

  }

  render() {
      return (
          <HighchartView stock={true} style={{height:this.props.height}} config={this.state.config}></HighchartView>
    );
  }
}


module.exports = ChartView;
