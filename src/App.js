import React, { Component } from 'react';
import { FirstLevel } from "./components";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Welcome to test app</h1>
        </header>
        <FirstLevel />
      </div>
    );
  }
}

export default App;
