import React from 'react' // import './App.css';
import Navbar from './Components/Navbar/Navbar';
// import Footer from './Components/Footer/Footer';

import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

import CartWidget from './Components/CartWidget/CartWidget';

function App() {
  return <div>
    <Navbar />
    <ItemListContainer greeting = "Este es el listado de peliculas para hoy"/>
    {/* <Footer /> */}
  </div> 
 }

export default App;
