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
      flexDirection: 'unset'
    }
  }

  changeStyle = (style) => (e) => {
    const inputVal = e.currentTarget.value
    let val = !!inputVal ? `${inputVal}` : 'unset'
    if (['width', 'height'].includes(style)) {
      val = !Number(inputVal) ? inputVal : `${inputVal}px`
    }
    this.setState({ [style]: val })
  }

  render() {
    const containerStyles = {
      border: '1px solid #8596b2',
      padding: 10,
      ...this.state,
    }

    return (
      <React.Fragment>
        <div style={{ marginTop: 20 }}>
          <FlexboxPropertyInput onChange={this.changeStyle('width')}>
            container width
          </FlexboxPropertyInput>

          <FlexboxPropertyInput onChange={this.changeStyle('height')}>
            container height
          </FlexboxPropertyInput>

          <FlexboxPropertyInput onChange={this.changeStyle('flexDirection')}>
            <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction">
              flex-direction
            </a>
          </FlexboxPropertyInput>

          <FlexboxPropertyInput onChange={this.changeStyle('justifyContent')}>
            <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox#justify-content">
              justify-content
            </a>
          </FlexboxPropertyInput>

          <FlexboxPropertyInput onChange={this.changeStyle('alignItems')}>
            <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox#Alignment_justification_and_distribution_of_free_space_between_items">
              align-items
            </a>
          </FlexboxPropertyInput>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
          <div style={containerStyles}>
            <FlexboxChild name={'child 1'} />
            <FlexboxChild name={'child 2'} />
            <FlexboxChild name={'child 3'} />
          </div>
        </div>
      </React.Fragment>
    )
  }
}