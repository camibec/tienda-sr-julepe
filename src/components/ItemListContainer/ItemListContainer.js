import './ItemListContainer.css';
const ItemListContainer = ({ greeting}) => {
    return (
        <div className='ListContainer'>
            <h4>{greeting}</h4>
        </div>
    )
}

export default ItemListContainer