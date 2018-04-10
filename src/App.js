import React, { Component } from 'react';
import uuidv1 from "uuid";
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

  handleEditClick = (id) => {
    const newElemValue = {
      name: uuidv1(),
      surname: uuidv1(),
    };

    const newTree = EditTreeService.EditElementById(this.state.data, newElemValue, id);
    this.setState({ data: newTree });
  }

  handleDeleteClick = (id) => {
    const newTree = EditTreeService.DeleteElementById(id, this.state.data);
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
          data={this.state.data}
          addClick={this.handleAddClick}
          editClick={this.handleEditClick}
          deleteClick={this.handleDeleteClick}
        />
      </div>
    )
  }
}

export default App;