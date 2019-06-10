import * as React from 'react'

export default class Scrolling extends React.Component {
  render() {
    const containerStyles = {
      width: 400,
      height: 300,
      border: '2px solid gray',
      overflow: 'auto'
    }
    const contentStyles = {
      width: 400,

      border: '2px solid purple',
      zIndex: 10
    }
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={containerStyles}>
          <div style={contentStyles}>
            <div style={{ height: 200, overflow: 'auto', border: '2px solid blue' }}>
              {[...Array(300)].map((_, entry) => <div>{`row #${entry}`}</div>)}
            </div>
          </div>
        </div>
      </div>
    )
  }
}