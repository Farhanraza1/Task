import React, {useContext, useState} from "react"
import {Context} from "../Context"
import CartItem from "../components/CartItem"
import { Button, Col } from "reactstrap"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Cart() {
    const {cartItems, removeAllItems} = useContext(Context) 

    const [placingOrder, setPlacingOrder] = useState(false)
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))
    
    const placeOrder = ()=>{
        setPlacingOrder(true)
         setTimeout(()=>{
            setPlacingOrder(false)
            removeAllItems()
            toast.success('Order Placed Successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                });
         },[2000])
    }
    return (
      
        <main className="cart-page">
       <ToastContainer />
        <Col md='12' className="d-flex py-3 justify-content-center align-items-center">
        <h1>Check out</h1>
        </Col>
           
            {cartItemElements}
            <b className="total-cost">Total:{(cartItems.length*5.99).toLocaleString("en-US", {style: "currency", currency: "USD"})}</b>
            <div className="order-button">
                <Button disabled = {cartItems.length == 0} color = 'success' className="mb-4" onClick={()=>placeOrder()}><b>{placingOrder == true ? 'Placing...' : 'Place Order'}</b></Button>
            </div>
        </main>
    )
}

export default Cart