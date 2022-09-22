import React from 'react'
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

export default function Navbar() { 
    return (
        <nav className='nav'>
            <div>
                <h1>areNa</h1>
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