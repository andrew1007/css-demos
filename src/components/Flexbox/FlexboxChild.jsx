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
      backgroundColor: 'gray',
      width: 100,
      height: 100,
      margin: 5,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      ...this.state
    }

    return (
      <div style={childStyles}>
        {this.props.name}
        <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div>
            flex-grow
          </div>
          <input onChange={this.changeStyle('flexGrow')} style={{width: 20}}/>
        </div>
      </div>
    )
  }
}