
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {

    const handleOnAdd = (quantity) => {
        console.log(`agregue al carrito ${quantity} ${name}`)
    }

    return (
        <article className="CardItemDetail" style={{fontFamily: "'Roboto', sans-serif", color: "#9da5d2"}}>
            <header className="Header">
                <h4 className="ItemHeader">
                    {name}
                </h4>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    Precio: {price}
                </p>
            </section>           
            <footer className='ItemFooter'>
                <ItemCount onAdd={handleOnAdd} stock={stock} />
            </footer>
        </article>
    )
}

export default ItemDetail
