import * as React from 'react'

export default class ParallelChildrenAlignment extends React.Component {
  render() {
    const PARENT_WIDTH_1 = 200
    const parentStyles = {
      border: '1px solid black',
      height: 200,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column'
    }
    const childStyles = {
      width: 100,
      height: 100,
      border: '1px solid black',
      margin: 10
    }

    return (
      <div style={{ marginTop: 30, display: 'flex', justifyContent: 'center' }}>
        <div>
          <div style={{ ...parentStyles, width: PARENT_WIDTH_1 }}>
            <div>
              parent 1
            </div>
            <div style={childStyles}>
              child of parent 1
            </div>
          </div>
          <div style={{ ...parentStyles, width: 250, marginTop: 20 }}>
            <div>
              parent 2
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'flex-start', width: PARENT_WIDTH_1 }}>
                <div style={childStyles}>
                  child of parent 2
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}