import React from 'react'
import Carrito from './ImgCardW/Carrito.png';
import "./CardWidget.css"

const CardWidget = () => {
  return (
<div>
<img className='imagenCarro' src={Carrito} alt="carrito" />
<strong>10</strong>
</div>
  )
}

export default CardWidget