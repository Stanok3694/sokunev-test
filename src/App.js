import React, { Component } from 'react';
import { HierarchyView } from "./views";

import { MockData } from './mocks';
import { EditTreeService, CreateMockedElement } from "./services";
import { CustomActionButtom } from "./components/UI";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: MockData,
    };
  }

  handleAddClick = (id) => {
    const newElem = CreateMockedElement(this.state.data);
    const newTree = EditTreeService.AddNewElement(this.state.data, newElem, id);
    
    this.setState({ data: newTree });
  }

  render() {
    return (
      <div>
        <h1>Tree view</h1>
        
        <CustomActionButtom
          name='Добавить'
          handleClick={this.handleAddClick.bind(this, null)}
        />
        
        <HierarchyView 
          data = {this.state.data} 
          addClick = {this.handleAddClick}
        />
      </div>
    )
  }
}

export default App;