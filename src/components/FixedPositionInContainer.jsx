import * as React from 'react'

const irrelevantStyles = {
  fontWeight: 700,
  color: 'red',
  fontSize: 30,
  margin: 5,
  padding: 3,
  lineHeight: 0.6,
  border: '1px solid blue'
}

export default class FixedPositionInContainer extends React.Component {
  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: 300, height: 300, border: '2px solid black' }}>
          <div
            style={{
              ...irrelevantStyles,
            }}>
            x
          </div>
        </div>
      </div>
    )
  }
}