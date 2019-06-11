import * as React from 'react'
/**
 * overflow scrolling doesn't scroll children of where you set it. it scrolls its own document flow
 */
const containerStyles = {
  width: 400,
  height: 627,
}

export default class Scrolling extends React.Component {
  constructor() {
    super()
    this.state = {
      good: true,
    }
  }

  toggleStyleState = () => this.setState({ good: !this.state.good})

  render() {
    return (
      <React.Fragment>
        <div>
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <div style={{ marginBottom: 20 }}>
            <button onClick={this.toggleStyleState}>
              {this.state.good ? 'good' : 'bad'}
            </button>
          </div>
          <div style={{
            ...containerStyles,
            overflow: 'auto',
            border: '2px solid gray',
          }}>
            <div style={{
              ...containerStyles,
              position: this.state.good ? 'unset' : 'absolute'
            }}>
              <div>
                {[...Array(300)].map((_, entry) => <div>{`row #${entry}`}</div>)}
              </div>
            </div>
          </div>
        </div>
        </div>
        <div
        style={{
          width: '100vw',
          position: 'fixed',
          backgroundColor: 'gray',
          zIndex: 10,
          height: 40,
          border: '2px solid black',
          bottom: 0,
          }}
         />
      </React.Fragment>
    )
  }
}
