import './Navbar.css'
import logo from '../../logo.png';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    return (
        <nav className='Navbar'>
            <img src={logo} className="Nav-logo" alt="logo" />
            <div>
                <button className='Button-nav'>Alimentos</button>
                <button className='Button-nav'>Accesorios</button>
                <button className='Button-nav'>Higiene</button>
                <button className='Button-nav'>Salud</button>
                <button className='Button-nav'>Snacks</button>
                <button className='Button-nav'>Nosotros</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Navbar