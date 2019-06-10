import React, { Component } from 'react';
import './App.css';
import Position from './components/Position'
import Containers from './components/Containers'
import Flexbox from './components/Flexbox/Flexbox'
import ParallelChildrenAlignment from './components/ParallelChildrenAlignment';
import PercentDimensions from './components/PercentDimensions';
import Scrolling from './components/Scrolling';

class App extends Component {
  constructor() {
    super()
    this.state = {
      containers: false,
      position: false,
      flexBox: false,
      parallelAlignment: false,
      percentDimensions: false,
    }
  }

  handleShow = (type) => () => {
    Object.keys(this.state).forEach(component => this.setState({ [component]: false }))
    this.setState({ [type]: !this.state[type] })
  }

  render() {
    const {
      containers,
      position,
      flexBox,
      parallelAlignment,
      percentDimensions
    } = this.state
    const buttonStyles = {
      fontSize: 20,
      border: '1px solid black',
      padding: 5,
      marginRight: 10,
      outline: 'none',
    }
    return (
      <div className="App" style={{ marginTop: 50 }}>
        <h2 style={{ display: 'flex', justifyContent: 'center' }}>
          CSS demos
        </h2>
        <div>
          <div style={{ marginBottom: 30, display: 'flex', justifyContent: 'center' }}>
            <button style={buttonStyles} onClick={this.handleShow('position')}>
              <div style={{
                fontWeight: position ? 700 : 'unset',
                opacity: position ? 1 : 0.4
              }}
              >
                Position
              </div>
            </button>
            <button style={buttonStyles} onClick={this.handleShow('containers')}>
              <div style={{
                fontWeight: containers ? 700 : 'unset',
                opacity: containers ? 1 : 0.4
              }}
              >
                Containers
              </div>
            </button>
            <button style={buttonStyles} onClick={this.handleShow('flexBox')}>
              <div style={{
                fontWeight: flexBox ? 700 : 'unset',
                opacity: flexBox ? 1 : 0.4
              }}
              >
                Flexbox
              </div>
            </button>
            <button style={buttonStyles} onClick={this.handleShow('parallelAlignment')}>
              <div style={{
                fontWeight: parallelAlignment ? 700 : 'unset',
                opacity: parallelAlignment ? 1 : 0.4
              }}
              >
                Parallel alignment
              </div>
            </button>
            <button style={buttonStyles} onClick={this.handleShow('percentDimensions')}>
              <div style={{
                fontWeight: percentDimensions ? 700 : 'unset',
                opacity: percentDimensions ? 1 : 0.4
              }}
              >
                Percentage dimensions
              </div>
            </button>
          </div>
          <div >
            {position ? <Position /> : null}
            {containers ? <Containers /> : null}
            {flexBox ? <Flexbox /> : null}
            {parallelAlignment ? <ParallelChildrenAlignment /> : null}
            {percentDimensions ? <PercentDimensions /> : null}
            <Scrolling />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
