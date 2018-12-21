import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Navigation from './Navigation'
import Introduction from './Introduction'
import { NormalDistribution, BinomialDistribution } from './distributions'

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Navigation />
          <div className="Content">
            <Route exact path="/" component={Introduction} />
            <Route path="/normal/" component={NormalDistribution} />
            <Route path="/binomial/" component={BinomialDistribution} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
