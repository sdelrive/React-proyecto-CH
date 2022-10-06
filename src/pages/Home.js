import React from 'react'
import ItemListContainer from '../Components/ItemListContainer/ItemListContainer'
import Navbar from '../Components/Navbar/Navbar'

const Home = () => {
  return (
    <div><Navbar />
    <ItemListContainer greeting = "Este es el listado de peliculas para hoy"/></div>
  )
}

export default Home