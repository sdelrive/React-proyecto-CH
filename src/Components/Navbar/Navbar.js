import React from 'react'
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

export default function Navbar() { 
    return (
        <nav className='nav'>
            <div>
               <Link to="/"> <h1>areNa</h1></Link>
            </div>
            <div className='nav__opciones'>
                <button>Terror</button>
                <button>Ficción</button>
                <button>Drama</button>
                <button>Clásicos</button>
            </div>
            <div>

            <CartWidget  />
            </div>

        </nav>
    )
  
}