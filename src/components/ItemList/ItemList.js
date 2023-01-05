import Item from '../Item/Item'
import './ItemList.css';

const ItemList = ({products}) => {
    return (
        
        <div className='grid-container'>
             {/*products.map(prod => <li key= {prod.id} >{prod.name}</li>) */} 
            
                {products.map(prod => <Item key= {prod.id} {...prod}/>)}
            
           
        </div>
    )
}

export default ItemList