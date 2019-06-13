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

const sectionTitleMap = {
  containers: 'Containers',
  position: 'Position',
  flexBox: 'flexbox',
  parallelAlignment: 'Parallel Alignment',
  percentDimensions: 'Percent Dimensions',
  scrolling: 'Scrolling',
  fixedRelativePosition: 'Fixed Relative Positioning',
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      containers: false,
      position: false,
      flexBox: false,
      scrolling: true,
      percentDimensions: false,
      fixedRelativePosition: false,
      parallelAlignment: false,
    }
  }

  handleShow = (type) => () => {
    Object.keys(this.state).forEach(component => this.setState({ [component]: false }))
    this.setState({ [type]: !this.state[type] })
  }

  sections = () => {
    return Object.keys(this.state).map(section => (
      <SectionSelector
        focused={this.state[section]}
        onClick={this.handleShow(section)}
      >
        {sectionTitleMap[section]}
      </SectionSelector>
    ))
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
        <div style={{
          background: 'white',
          zIndex: 100,
          position: 'fixed',
          width: '100vw',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          top: 0,
          borderBottom: '1px solid black'
        }}>
          <h2 style={{ display: 'flex', justifyContent: 'center' }}>
            CSS demos
          </h2>
          <div>
            <div style={{ marginBottom: 30, display: 'flex', justifyContent: 'center' }}>
              {this.sections()}
            </div>
          </div>
        </div>
        <div style={{ marginTop: 150 }}>
          {position ? <Position /> : null}
          {containers ? <Containers /> : null}
          {flexBox ? <Flexbox /> : null}
          {parallelAlignment ? <ParallelChildrenAlignment /> : null}
          {percentDimensions ? <PercentDimensions /> : null}
          {scrolling ? <Scrolling /> : null}
          {fixedRelativePosition ? <FixedPositionInContainer /> : null}
        </div>
      </div>
    );
  }
}

export default App;
