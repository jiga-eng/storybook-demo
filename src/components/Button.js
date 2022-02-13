import React from 'react'
import './Button.css'

export default function Button ({ children, outline }) {
    let classes = ''
    if (outline) classes += 'outline '
    return (
      <button className={classes}>{children}</button>
    )
  }