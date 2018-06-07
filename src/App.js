import React, { Component } from 'react';
import './App.css';
import UniStore from "./UniStore.js"
import FirstChild from "./FirstChild.js"
import SecondChild from "./SecondChild.js"


class App extends Component {
  constructor(props) {
    super(props);

    this.componentStore = (new UniStore(this))
    this.state = this.componentStore.data
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>{this.state.title}</h3>
          <button onClick={() => this.changeTitle()}>Update</button>
        </header>

        <FirstChild store={this.componentStore} />
        <br/>
        <SecondChild store={this.componentStore} />
      </div>
    );
  }

  changeTitle() {
    console.log('Updating from App');
    this.componentStore.updateField('title', 'Updated from App')
  }
}

export default App;
