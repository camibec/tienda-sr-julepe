import img from '../../golocan.jpg' 

const Item = (prod) => {
    return (
        <div className="card" style={{ width: 288}}>
            <img className="card-img-top" src={img} alt="img" />
            <div className="card-body">
                <h5 className="card-title">{prod.name}</h5>
                <p className="card-text">${prod.price}</p>
                <button class="btn btn-primary">Ver</button>
            </div>
        </div>
    )
}

export default Item