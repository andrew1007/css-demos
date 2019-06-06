import React, { Component } from 'react';
import './App.css';
import Position from './components/Position'
import Containers from './components/Containers'
import Flexbox from './components/Flexbox/Flexbox'

const buttonStyles = {
  fontSize: 20,
  border: '1px solid black',
  padding: 5,
  marginRight: 10,
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      containers: true,
      position: false,
      flexBox: false,
    }
  }

  handleShow = (type) => () => {
    Object.keys(this.state).forEach(component => this.setState({ [component]: false }))
    this.setState({ [type]: !this.state[type] })
  }

  render() {
    const { containers, position, flexBox } = this.state
    return (
      <div className="App" style={{ marginTop: 50 }}>
        <h2>
          CSS demos
        </h2>
        <div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button style={buttonStyles} onClick={this.handleShow('position')}>
              Position
            </button>
            <button style={buttonStyles} onClick={this.handleShow('containers')}>
              Containers
            </button>
            <button style={buttonStyles} onClick={this.handleShow('flexBox')}>
              Flexbox
            </button>
          </div>
          {position ? <Position /> : null}
          {containers ? <Containers /> : null}
          {flexBox ? <Flexbox /> : null}
        </div>
      </div>
    );
  }
}

export default App;
