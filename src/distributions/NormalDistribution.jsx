import React, { Component } from 'react';
import { DistributionName, DistributionControls, Plot, Usage } from './distributioncomponents'
import {NormalMaths} from './maths'

class NormalDistribution extends Component {
  constructor(props){
    super(props)
    this.state = {
      distributions: [new NormalMaths(0, 1)]
    }
  }

  render() {
    return (
      <div>
        <DistributionName>Normal Distribution</DistributionName>
        <Plot
          distributions={this.state.distributions}
          />
        <DistributionControls
          distributions={this.state.distributions}
          />
        <Usage></Usage>
      </div>
    );
  }
}

export default NormalDistribution;
