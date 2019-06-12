import * as React from 'react'
import FlexboxChild from './FlexboxChild';
import FlexboxPropertyInput from './FlexboxPropertyInput'

export default class Flexbox extends React.Component {
  constructor() {
    super()
    this.state = {
      justifyContent: 'unset',
      alignItems: 'unset',
      display: 'flex',
      width: 'unset',
      height: 'unset',
      flexDirection: 'unset',
      flexWrap: 'unset',
      childrenCount: 3,
      containerCount: 1,
    }
  }

  changeStyle = (style) => (e) => {
    const inputVal = e.currentTarget.value
    let val = !!inputVal ? `${inputVal}` : 'unset'
    if (['width', 'height'].includes(style)) {
      val = !Number(inputVal) ? inputVal : `${inputVal}px`
    }
    if (style === 'display') {
      val = inputVal || 'flex'
    }
    this.setState({ [style]: val })
  }

  addChild = () => this.setState({ childrenCount: Math.max(1, this.state.childrenCount + 1) })
  removeChild = () => this.setState({ childrenCount: Math.max(1, this.state.childrenCount - 1) })
  addContainer = () => this.setState({ containerCount: Math.max(1, this.state.containerCount + 1) })
  removeContainer = () => this.setState({ containerCount: Math.max(1, this.state.containerCount - 1) })

  render() {
    const { childrenCount, containerCount, ...styles } = this.state
    const containerStyles = {
      border: '1px solid #8596b2',
      padding: 10,
      margin: 10,
      ...styles,
    }

    return (
      <React.Fragment>
        <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <FlexboxPropertyInput onChange={this.changeStyle('width')}>
            container width
          </FlexboxPropertyInput>

          <FlexboxPropertyInput onChange={this.changeStyle('height')}>
            container height
          </FlexboxPropertyInput>

          <FlexboxPropertyInput onChange={this.changeStyle('display')}>
            container display (default: flex)
          </FlexboxPropertyInput>

          <FlexboxPropertyInput onChange={this.changeStyle('flexDirection')}>
            <a target="_blank" rel="noopener noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction">
              flex-direction
            </a>
          </FlexboxPropertyInput>

          <FlexboxPropertyInput onChange={this.changeStyle('justifyContent')}>
            <a target="_blank" rel="noopener noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content">
              justify-content
            </a>
          </FlexboxPropertyInput>

          <FlexboxPropertyInput onChange={this.changeStyle('alignItems')}>
            <a target="_blank" rel="noopener noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/CSS/align-items">
              align-items
            </a>
          </FlexboxPropertyInput>
          <FlexboxPropertyInput onChange={this.changeStyle('flexWrap')}>
            <a target="_blank" rel="noopener noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap">
              flex-wrap
            </a>
          </FlexboxPropertyInput>
          <div>
            <button onClick={this.addChild}>
              Add child
            </button>
            <button onClick={this.removeChild}>
              Remove child
            </button>
          </div>
          <div>
          <button onClick={this.addContainer}>
              Add container
            </button>
            <button onClick={this.removeContainer}>
              Remove container
            </button>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50, border: '2px solid purple', padding: 5 }}>
          {[...Array(containerCount)].map((_, idx) => (
            <div style={containerStyles} key={idx}>
              {[...Array(childrenCount)].map((_, idx) => <FlexboxChild name={`child ${idx + 1}`} key={idx} />)}
            </div>
          ))}
        </div>
      </React.Fragment>
    )
  }
}