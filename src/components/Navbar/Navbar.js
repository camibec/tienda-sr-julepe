import './Navbar.css'
import logo from '../../logo.png';
import CartWidget from '../CartWidget/CartWidget';

import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()

    return (
        <nav className='Navbar'>
            <img src={logo} className="Nav-logo" alt="logo" onClick={() => navigate('/')}/>
            <div className='Div-buttons'>
                <NavLink to= {`/category/alimentos`} className='Button-nav'>Alimentos</NavLink>
                <NavLink to= {`/category/accesorios`} className='Button-nav'>Accesorios</NavLink>
                <NavLink to= {`/category/higiene`} className='Button-nav'>Higiene</NavLink>
                <NavLink to= {`/category/salud`} className='Button-nav'>Salud</NavLink>
                <NavLink to= {`/category/snacks`} className='Button-nav'>Snacks</NavLink>
                <NavLink to= {`/category/nosotros`} className='Button-nav'>Nosotros</NavLink>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Navbar