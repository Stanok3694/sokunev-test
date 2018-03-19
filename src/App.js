import React, { Component } from 'react';
import { HierarchyView } from "./views";

import { MockData } from './mocks';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: MockData,
    };
  }

  render() {
    return (
      <div>
        <h1>Tree view</h1>
        <HierarchyView data = {this.state.data} />
      </div>
    )
  }
}

export default App;