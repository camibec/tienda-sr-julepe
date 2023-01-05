import './ItemListContainer.css';
import { getProducts } from '../../asyncMock';
import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ greeting}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        setLoading(true)
       getProducts().then(productsFromApi => {
           setProducts(productsFromApi)
       }).catch(error => {
           console.log(error)
           setError(true)
       }).finally(() => {
           setLoading(false)
       })     
    }, [])

    // de esta forma se monta el componente, se realiza esto y queda ahi
    //console.log(products)
    //const productsComponents = products.map(prod => <li>{prod.name}</li>)
    //console.log(productsComponents)

    if (loading) {
        return <h1>Cargando...</h1>
    }
    
    if (error) {
        return <h1>Hubo un error, no se pudieron cargar los productos</h1>
    }

    return (
        <div className='ListContainer'>
            <h4>{greeting}</h4>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer