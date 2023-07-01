import './CartWidget.css'

const CartWidget = () => {
    const imgCarrito = "https://cdn-icons-png.flaticon.com/512/107/107831.png";
    return (
        <div>
            <img className='imgCarrito' src={imgCarrito} alt="carrito de compras" />
            <strong style={{marginRight:'50px'}}> 10 </strong>
        </div>
    )
}

export default CartWidget