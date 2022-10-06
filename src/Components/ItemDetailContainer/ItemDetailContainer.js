import { useState, useEffect } from 'react'
import { getProduct } from '../../asyncMock'
import { useParams } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    useEffect(() => {
        getProduct(id).then(response => {
            setProduct(response)
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    if(loading) {
        return <h1>Cargando...</h1>
    }

    return (
        <div>
            <Navbar />
            <h1>Detalle de producto</h1>
            
            <div  className="eachProduct" key={product.id}>
                                <h2>{product.name}</h2>
                                <img src={product.img}/>
                                <div><p>Precio: {product.price} pesos</p></div>
                                <div><p>{product.description}</p></div>
                        </div>
        </div>
    )
}

export default ItemDetailContainer