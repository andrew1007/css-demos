import * as React from 'react'

export default class FlexboxChild extends React.Component {
  constructor() {
    super()
    this.state = {
      flexGrow: 'unset'
    }
  }

  changeStyle = (style) => (e) => this.setState({ [style]: e.currentTarget.value })

  render() {
    const childStyles = {
      backgroundColor: '#8596b2',
      width: 100,
      height: 100,
      margin: 5,
      ...this.state
    }

    return (
      <div style={childStyles}>
        {this.props.name}
        <div style={{ marginTop: 10 }}>
          flex-grow
          <input onChange={this.changeStyle('flexGrow')} style={{width: 30}}/>
        </div>
      </div>
    )
  }
}