import * as React from 'react'

const containerStyles = { justifyContent: 'center' }
const level1Styles = { minWidth: 400, padding: 5, minHeight: 300, textAlign: 'center' }
const level2Styles = { minHeight: 150, minWidth: 150, padding: 5, textAlign: 'center' }
const level3Styles = { minHeight: 50, minWidth: 50, padding: 10, textAlign: 'center' }

export default class PercentDimensions extends React.Component {
  constructor() {
    super()
    this.state = {
      container1: {
        position: 'static',
        display: 'block',
        width: 'unset',
        color: 'red'
      },
      container2: {
        position: 'static',
        display: 'block',
        width: 'unset',
        color: 'blue'
      },
      container3: {
        position: 'static',
        display: 'block',
        width: 'unset',
        color: 'gray'
      },
      container4: {
        position: 'static',
        display: 'block',
        width: 'unset',
        color: 'gray'
      },
    }
  }

  positions = [
    'static',
    'absolute',
    'relative',
    'fixed'
  ]

  displays = [
    'flex',
    'block',
  ]

  handleStyleChange = (type, containerName, style) => () => {
    const newState = { ...this.state }
    newState[containerName][style] = type
    this.setState(newState)
  }

  positionChange = (containerName, color) => this.positions.map((type, idx) =>
    <button
      key={idx}
      onClick={this.handleStyleChange(type, containerName, 'position')}
      style={{ marginRight: 5, opacity: this.state[containerName].position === type ? 0.3 : 1 }}
    >
      <div style={{ color }}>
        {type}
      </div>
    </button>
  )

  displayChange = (containerName, color) => this.displays.map((type, idx) =>
    <button
      key={idx}
      onClick={this.handleStyleChange(type, containerName, 'display')}
      style={{ marginRight: 5, opacity: this.state[containerName].display === type ? 0.3 : 1 }}
    >
      <div style={{ color }}>
        {type}
      </div>
    </button>
  )

  widthChange = (containerName) => (e) => {
    const inputVal = e.currentTarget.value
    let val
    if (!!inputVal) {
      val = !Number(inputVal) ? inputVal : `${inputVal}px`
    } else {
      val = 'unset'
    }
    const newState = { ...this.state }
    newState[containerName].width = val
    this.setState({ newState })
  }

  positionButtons = () => Object.keys(this.state).map((container, idx) => (
    <div style={{ marginBottom: 20, display: 'flex' }} key={idx}>
      <span style={{ marginRight: 10, color: this.state[container].color }}>
        {container}
      </span>
      <span>
        <div>
          {this.displayChange(container, this.state[container].color)}
        </div>
        <div>
          {this.positionChange(container, this.state[container].color)}
        </div>
        <div>
          width
          <input onChange={this.widthChange(container)} />
        </div>
      </span>
    </div>
  ))

  currentProperties = (containerName) => (
    <div>
      <div>
        {this.state[containerName].display}
      </div>
      <div>
        {this.state[containerName].position}
      </div>
      <div>
        {this.state[containerName].width}
      </div>
    </div>
  )

  render() {
    const {
      container1,
      container2,
      container3,
      container4
    } = this.state
    return (
      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        {this.positionButtons()}

        <div style={containerStyles}>
          <div style={{
            ...level1Styles,
            ...container1,
            border: `2px solid ${container1.color}`
          }}>
            <div style={{
              ...level2Styles,
              ...container2,
              border: `2px solid ${container2.color}`
            }}>
              <div style={{
                ...level3Styles,
                ...container3,
                border: `2px solid ${container3.color}`
              }}>
                {this.currentProperties('container3')}
              </div>
              <div style={{
                ...level3Styles,
                ...container4,
                border: `2px solid ${container4.color}`
              }}>
                {this.currentProperties('container4')}
              </div>
              {this.currentProperties('container2')}
            </div>
            {this.currentProperties('container1')}
          </div>
        </div>
      </div>
    )
  }
}
