import * as React from 'react'

const buttonStyles = {
  fontSize: 20,
  border: '1px solid black',
  padding: 5,
  marginRight: 10,
  outline: 'none',
}

const SectionSelector = props => (
  <button style={buttonStyles} onClick={props.onClick}>
    <div style={{
      fontWeight: props.focused ? 700 : 'unset',
      opacity: props.focused ? 1 : 0.4
    }}>
      {props.children}
    </div>
  </button>
)

export default SectionSelector