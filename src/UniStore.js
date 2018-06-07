// A unidirectional store system

class UniStore {
  constructor(component) {
    this.component = component;
    this.data = {
      title: 'Whoah',
      players: {
          'bill': {name: 'Bill', color: 'green'},
          'sally': {name: 'Sally', color: 'red'}
      },
    };
  }

  updateField(key, newData) { // Wouldn't work for deeply nested objects or arrays or whatever?
    this.data[key] = newData
    this.update()
  }

  update() {
    this.component.setState(this.data)
  }

}


export default UniStore
