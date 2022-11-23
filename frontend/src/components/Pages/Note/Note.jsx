import React from 'react'
import { cn } from '@bem-react/classname'
import "./note.css"

const Note = ({mods, text}) => {
    const cnNote = cn("Note")
  return (
    <div className={cnNote({...mods})}>
        {text}
    </div>
  )
}

export default Note