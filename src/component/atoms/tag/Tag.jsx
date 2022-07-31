import React from 'react'
import "./Tag.css"

export const Tag = (props) => {
  const {tagText} = props
  return (
    <div className='tag'>
    <span className='tag-text'>{tagText}</span>
    </div>
  )
}
