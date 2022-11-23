import React from 'react'
import {cn} from "@bem-react/classname"
import "./main.css"
import Navbar from './Navbar/Navbar'

const Main = () => {
    const cnMain = cn("Main")

  return (
    <div className={cnMain()}>
        <Navbar />
    
    </div>
  )
}

export default Main