import React, { Component } from 'react';

class SecondChild extends Component {
  constructor(props) {
    super(props);

    this.componentStore = props.store;
    this.state = this.componentStore.data
  }

  render() {
    return (
      <div className="SecondChild">
        SecondChild {this.state.title}
        <button onClick={() => this.updateTitle()}>Update</button>
      </div>
    );
  }

  updateTitle() {
      console.log('Updating from SecondChild');
      this.componentStore.updateField('title', 'Updated from SecondChild')
  }
}

export default SecondChild;
