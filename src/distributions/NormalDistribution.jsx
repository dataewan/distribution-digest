import React, { Component } from 'react';
import { DistributionName, Plot, Usage } from './distributioncomponents'
import {NormalMaths} from './maths'

class NormalDistribution extends Component {
  render() {
    window.NormalMaths = NormalMaths
    return (
      <div>
        <DistributionName>Normal Distribution</DistributionName>
        <Plot />
        <Usage></Usage>
      </div>
    );
  }
}

export default NormalDistribution;
