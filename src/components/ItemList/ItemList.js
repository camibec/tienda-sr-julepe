import Item from '../Item/Item'


const ItemList = ({products}) => {
    return (
        
        <div className='card-deck'>
             {/*products.map(prod => <li key= {prod.id} >{prod.name}</li>) */} 
            
                {products.map(prod => <Item key= {prod.id} {...prod}/>)}
            
           
        </div>
    )
}

export default ItemList