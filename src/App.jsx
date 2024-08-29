import React from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner'

const App = () => {
  return (
<>
<NavBar/>

<ItemListConteiner greeting="Deportes X !!"/>

</>
  )
}

export default App
