import React from 'react'
import './Button.css'
function Button(props) {
    const size = props.size ? `btn-${props.size}` : "";
    const variant = props.variant ? `btn-${props.variant}` : "";
  return <button className={`btn ${size} ${variant}` }  onClick={props.onClick}>{props.children} </button>
}

export default Button
