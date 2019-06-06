import * as React from 'react'


const inputStyles = {
  marginLeft: 10,
  marginBottom: 10
}
const FlexboxPropertyInput = props => (
  <div>
    {props.children}
    <input onChange={props.onChange} style={inputStyles} />
  </div>
)

export default FlexboxPropertyInput