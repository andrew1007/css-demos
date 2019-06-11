import * as React from 'react'

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
  margin: 10,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}
const ParallelChildrenAlignment = _ => {
  return (
    <div style={{ marginTop: 30, display: 'flex', justifyContent: 'center' }}>
      <div>
        <div style={{ ...parentStyles, width: 200 }}>
          <div>
            parent 1
            </div>
          <div style={childStyles}>
            <div style={{ textAlign: 'center' }}>
              child of parent 1
            </div>
            </div>
        </div>
        <div style={{ ...parentStyles, width: 250, marginTop: 20 }}>
          <div>
            parent 2
            </div>
          <div>
            <div style={childStyles}>
              <div style={{ textAlign: 'center' }}>
                child of parent 2
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ParallelChildrenAlignment