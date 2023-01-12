import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className='CartWidget'>
            <button className='Button-cart'>
                <img src='/images/cart.svg' alt='cart-widget'/> 0            
            </button>
        </div>
    )
}

export default CartWidget