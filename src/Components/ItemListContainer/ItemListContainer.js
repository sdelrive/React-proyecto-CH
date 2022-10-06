import React from 'react'
import { getProducts } from '../../asyncMock'
import { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import "./ItemListContainer.css"
import { Link } from 'react-router-dom'


export default function ItemListContainer({greeting}) {

        // const navigate = NavLink();

        const [products, setProducts] = useState([])
        const [error, setError] = useState(false)
        const [loading, setLoading] = useState(true)  

        useEffect(() => {
                getProducts().then(res => {
                    setProducts(res)
                }).catch(error => {
                    console.log(error)
                    setError(true)
                }).finally(() => {
                    setLoading(false)
                })
            }, [])

        const handleButton = (e) =>{
                e.preventDefault()
                console.log(e.target.current)


      }

        if(error) {
                return <h1>Hubo un error</h1>
            }

            
            return (  loading ? <h1>Loading page...</h1> : (

                <>
                <Navbar/>
                <div className="ItemListContainer">
                        { products.map(product => {
                                const url = "/item/" + product.id
                        return <div  className="eachProduct" key={product.id}>
                                <h2>{product.name}</h2>
                                <img src={product.img}/>
                                <Link to={url}>Ir a</Link>
                                {/* <button onClick={handleButton}>Ir a</button> */}
                        </div>}) }
                </div>
                </>
                        )
            )
      
}
