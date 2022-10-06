import React from 'react' // import './App.css';
import Navbar from './Components/Navbar/Navbar';
// import Footer from './Components/Footer/Footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/category/:id' element={<ItemListContainer/>}/>
      <Route path='/item/:id' element={<ItemDetailContainer/>}/>
    </Routes>
  </BrowserRouter> 
 }

export default App;
