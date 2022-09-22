import React from 'react'
import cart from './assets/img/cart.svg'
import './cartWidget.css'

export default function CartWidget(art) {
  return (
    <div className='cart-container'>
        <img className='cart-img' src={cart} />
         <div>
          5
          </div> 
    </div>
  )
}
