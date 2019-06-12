import React from 'react'

export default class Position extends React.Component {
  constructor() {
    super()
    this.state = {
      positionBlue: 'static',
      positionRed: 'static',
      container: 'static',
      width: null,
      height: null,
      blueRight: 'unset',
      blueHeight: 100,
    }
  }

  positionChangeBlue = (position) => () => {
    this.setState({ positionBlue: position }, () => {
      this.measure()
    })
  }
  positionChangeRed = (position) => () => {
    this.setState({ positionRed: position }, () => {
      this.measure()
    })
  }
  positionChangeContainer = (position) => () => {
    this.setState({ container: position }, () => {
      this.measure()
    })
  }

  positions = [
    'static',
    'absolute',
    'relative',
    'fixed'
  ]

  buttonsBlue = () => this.positions.map((type, idx) =>
    <button key={idx} onClick={this.positionChangeBlue(type)} style={{ marginRight: 5, opacity: this.state.positionBlue === type ? 0.3 : 1 }}>
      {type}
    </button>
  )

  buttonsRed = () => this.positions.map((type, idx) =>
    <button key={idx} onClick={this.positionChangeRed(type)} style={{ marginRight: 5, opacity: this.state.positionRed === type ? 0.3 : 1 }}>
      {type}
    </button>
  )

  buttonsContainer = () => this.positions.map((type, idx) =>
    <button key={idx} onClick={this.positionChangeContainer(type)} style={{ marginRight: 5, opacity: this.state.container === type ? 0.3 : 1 }}>
      {type}
    </button>
  )

  handleBlueRight = () => this.setState({ blueRight: this.state.blueRight === 'unset' ? 0 : 'unset' })
  handleBlueHeight = () => this.setState({ blueHeight: this.state.blueHeight === 100 ? '100%' : 100 })

  saveRef = (ref) => this.containerNode = ref

  measure() {
    const { clientWidth, clientHeight } = this.containerNode

    this.setState({
      width: clientWidth,
      height: clientHeight,
    })
  }

  componentDidMount() {
    this.measure()
  }

  render() {
    const containerStyle = {
      border: '2px solid black',
      position: this.state.container
    }
    return (
      <div style={{ border: '2x solid black', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <div style={{ marginTop: 10 }}>
          container
        {this.buttonsContainer()}
        </div>
        <div style={{ marginTop: 10 }}>
          blue
        {this.buttonsBlue()}
        </div>
        <div style={{ marginTop: 10 }}>
          red
          {this.buttonsRed()}
        </div>
        <div>
          BLUE
          <button
            onClick={this.handleBlueRight}
          >
            blue right: {this.state.blueRight}
          </button>
          <button onClick={this.handleBlueHeight}>
            change Height
          </button>
        </div>
        <div style={{ width: 500, marginTop: 20 }}>
          <div style={{ marginBottom: 20 }}>
            container dimensions
            <div>
              width: &nbsp; {this.state.width}
            </div>
            <div>
              height: &nbsp; {this.state.height}
            </div>
          </div>
          <div style={containerStyle} ref={this.saveRef}>
            <div
              style={{
                width: 100,
                height: this.state.blueHeight,
                position: this.state.positionBlue,
                backgroundColor: 'blue',
                right: this.state.blueRight,
                color: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <div>
                right: {this.state.blueRight}{this.state.blueRight === 100 ? 'px' : null}
              </div>
              <div>
                height: {this.state.blueHeight}
              </div>
            </div>
            <div
              style={{
                width: 200,
                height: 200,
                position: this.state.positionRed,
                backgroundColor: 'red',
                color: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
