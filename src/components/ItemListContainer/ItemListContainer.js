import './ItemListContainer.css';
import { getProducts, getProductsByCategory } from '../../asyncMock';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId).then(response => {
            setProducts(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })          
    }, [categoryId])


    if (loading) {
        return <h4>Cargando productos...</h4>
    }
    
    
    return (
        <div className='ListContainer'>
            <h4>{greeting}</h4>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer