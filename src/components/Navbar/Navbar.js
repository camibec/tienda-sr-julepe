import './Navbar.css'
import logo from '../../logo.png';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <img src={logo} className="navbar-brand" alt="logo" style={{width: 60}} />
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <a className="nav-item nav-link" href="#">Alimentos</a>
                <a className="nav-item nav-link" href="#">Accesorios</a>
                <a className="nav-item nav-link" href="#">Higiene</a>
                <a className="nav-item nav-link" href="#">Salud</a>
                <a className="nav-item nav-link" href="#">Snacks</a>
                <a className="nav-item nav-link disabled" href="#">Nosotros</a>
                </div>
            </div>

            <CartWidget/>
        </nav>

    )
}

export default Navbar