import * as React from 'react'

export default class PercentDimensions extends React.Component {


  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'flex', width: 400, padding: 5, border: '2px solid red', height: 300 }}>
          1
            <div style={{ height: 200, padding: 5, border: '2px solid blue', display: 'flex', flexDirection: 'column' }}>
            2
            <div style={{ border: '2px solid gray', padding: 10 }}>
              3
            </div>
          </div>
        </div>
      </div>
    )
  }
}