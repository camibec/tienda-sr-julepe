import './Item.css';
import img from '../../golocan.jpg' 

const Item = (prod) => {
    return (
        <div className="card">
            <img src={img} alt="img" />
            <div className="container">
                <b>{prod.name}</b> 
                <p>${prod.price}</p>
            </div>
        </div>
    )
}

export default Item