import * as React from 'react'

const Scrolling = _ => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{
        width: 400,
        height: 300,
        border: '2px solid gray',
        overflow: 'auto'
      }}>
        <div style={{
          border: '2px solid purple',
          width: 400,
        }}>
          <div>
            {[...Array(300)].map((_, entry) => <div>{`row #${entry}`}</div>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Scrolling