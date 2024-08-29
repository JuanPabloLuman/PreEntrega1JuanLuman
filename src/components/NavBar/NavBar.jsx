import React from 'react'
import './NavBar.css'
import CardWidget from '../CardWidget/CardWidget'


const NavBar = () => {
  return (
   <header>
    <h1>DeportX</h1>
    <ul>
        <li><a href='#'> Balones </a></li>
        <li><a href='#'> Accesorios </a></li>
        <li><a href='#'> Zapatillas </a></li>
        <li><a href='#'> Ropa y Equipo </a></li>
        <CardWidget/>
    </ul>
     
    
   </header>
  )
}

export default NavBar