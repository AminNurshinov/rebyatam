import React from 'react'
import { cn } from '@bem-react/classname'
import { Link } from 'react-router-dom'
import "./navbar.css"
import Note from '../Pages/Note/Note'
import Button from '../Pages/Button/Button'

const Navbar = () => {
    const cnNavbar = cn("Navbar")
    const cnLink = cn("Link")
  return (
        <header className={cnNavbar()}>
            <Link to="/" className={cnLink()}> <Note mods={{size:"m", color:"white", textDecloration:"none"  }} text={"Домой"} /> </Link>
            <Link to="/" className={cnLink()}> <Note mods={{size:"m", color:"white" }} text={"Сливы блядоток"} /> </Link>
            <Link to="/" className={cnLink()}> <Note mods={{size:"m", color:"white" }} text={"Когда я zdoxнy???."} /> </Link>
            <Link to="/" className={cnLink()}> <Note mods={{size:"m", color:"white" }} text={"сегодня я умру..."} /> </Link>
            <Link to="/" className={cnLink()}> <Note mods={{size:"m", color:"white" }} text={"aня, 2 метра от вас"} /> </Link>
            <Link to="/" className={cnLink()}> <Button mods={{size:"m", backgroundColor:"red", color:"white" }} text={"Для Даунов"} /> </Link>
        </header>
  )
}

export default Navbar