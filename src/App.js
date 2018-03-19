import React, { Component } from 'react';
import { HierarchyView } from "./components";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          name: "blabla",
          surname: "fafa",
          specialData: [
            {
              name: "blabla",
              surname: "fafa",
              specialData: [
                {
                  name: "blabla",
                  surname: "fafa",
                }
              ]
            },
            {
              name: "blabla",
              surname: "fafa",
            },
          ]
        },
        {
          name: "blabla",
          surname: "fafa"
        },
        {
          name: "blabla",
          surname: "fafa",
        }
      ],
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