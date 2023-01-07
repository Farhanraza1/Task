import React, { useContext } from 'react'
import { Container, Navbar } from "reactstrap";
import { Link } from "react-router-dom";
import {Context} from "../Context"
import '../App.css'

const Header = () => {
    const{cartItems} = useContext(Context)

  return (
     <>
          <Navbar className='d-flex bg-light justify-content-between p-3'>
            <Link to="/"><h2>Pic Some</h2></Link>
            <Link to="/cart">
                {cartItems.length > 0 ? <i className="ri-shopping-cart-fill ri-fw ri-2x"></i> : <i className="ri-shopping-cart-line ri-fw ri-2x"></i>}
            </Link>
        </Navbar>
     </>
  )
}

export default Header