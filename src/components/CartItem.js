import React, { useContext, useState } from "react"
import {Context} from "../Context"

function CartItem({item}) {
    const {removeFromCart} = useContext(Context)
    const [hovered, setHovered] = useState(false)
    return (
        <div className="cart-item card mb-3 ">
            {hovered ? <i className="ri-delete-bin-fill remove-icon" onClick={() => removeFromCart(item.id)} onMouseLeave = {()=>setHovered(false)}></i> :  <i className="ri-delete-bin-line remove-icon" onMouseEnter={()=>setHovered(true)}></i>}
            <img src={item.url} width="130px" />
            <b>$5.99</b>
        </div>
    )
}

export default CartItem