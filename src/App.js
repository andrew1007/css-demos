import React, { Component } from 'react';
import './App.css';
import Position from './components/Position'
import Containers from './components/Containers'
import Flexbox from './components/Flexbox/Flexbox'
import ParallelChildrenAlignment from './components/ParallelChildrenAlignment';
import PercentDimensions from './components/PercentDimensions';
import Scrolling from './components/Scrolling';
import FixedPositionInContainer from './components/FixedPositionInContainer';
import SectionSelector from './components/SectionSelector';

class App extends Component {
  constructor() {
    super()
    this.state = {
      containers: false,
      position: false,
      flexBox: false,
      parallelAlignment: true,
      percentDimensions: false,
      scrolling: false,
      fixedRelativePosition: false,
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
      percentDimensions,
      scrolling,
      fixedRelativePosition
    } = this.state
    return (
      <div className="App" style={{ marginTop: 50 }}>
        <h2 style={{ display: 'flex', justifyContent: 'center' }}>
          CSS demos
        </h2>
        <div>
          <div style={{ marginBottom: 30, display: 'flex', justifyContent: 'center' }}>
            <SectionSelector
              focused={position}
              onClick={this.handleShow('position')}
            >
              Position
            </SectionSelector>
            <SectionSelector
              focused={containers}
              onClick={this.handleShow('containers')}
            >
              Containers
            </SectionSelector>
            <SectionSelector
              focused={flexBox}
              onClick={this.handleShow('flexBox')}
            >
              Flexbox
            </SectionSelector>
            <SectionSelector
              focused={percentDimensions}
              onClick={this.handleShow('percentDimensions')}
            >
              Percentage dimensions
            </SectionSelector>
            <SectionSelector
              focused={scrolling}
              onClick={this.handleShow('scrolling')}
            >
              Scrolling
            </SectionSelector>
            <SectionSelector
              focused={fixedRelativePosition}
              onClick={this.handleShow('fixedRelativePosition')}
            >
              Fixed relative positioning
            </SectionSelector>
            <SectionSelector
              focused={parallelAlignment}
              onClick={this.handleShow('parallelAlignment')}
            >
              Parallel alignment
            </SectionSelector>
          </div>
          <div >
            {position ? <Position /> : null}
            {containers ? <Containers /> : null}
            {flexBox ? <Flexbox /> : null}
            {parallelAlignment ? <ParallelChildrenAlignment /> : null}
            {percentDimensions ? <PercentDimensions /> : null}
            {scrolling ? <Scrolling /> : null}
            {fixedRelativePosition ? <FixedPositionInContainer /> : null}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
