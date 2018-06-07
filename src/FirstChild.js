import React, { Component } from 'react';

class FirstChild extends Component {
  constructor(props) {
    super(props);

    this.componentStore = props.store;
    this.state = this.componentStore.data
  }

  render() {
    return (
      <div className="FirstChild">
        FirstChild {this.state.title}
        <button onClick={() => this.updateTitle()}>Update</button>
      </div>
    );
  }

  updateTitle() {
      console.log('Updating from FirstChild');
      this.componentStore.updateField('title', 'Updated from FirstChild')
  }
}

export default FirstChild;
