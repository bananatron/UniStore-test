import React, { Component } from 'react';

class ChildsChild extends Component {
  constructor(props) {
    super(props);

    this.componentStore = props.store;
    this.state = this.componentStore.data
  }

  render() {
    return (
      <div className="ChildsChild">
        ChildsChild {this.state.title}
        <button onClick={() => this.updateTitle()}>Update</button>
      </div>
    );
  }

  updateTitle() {
      console.log('Updating from ChildsChild');
      this.componentStore.updateField('title', 'Updated from ChildsChild')
  }
}

export default ChildsChild;
