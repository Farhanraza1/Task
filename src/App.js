import React from "react"
import {Switch, Route, Routes} from "react-router-dom"
import { Container } from "reactstrap"
import { ToastContainer, toast } from 'react-toastify';
import Header from "./components/Header"
import Cart from "./Pages/Cart"
import Photos from "./Pages/Photos"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {    
    return (
        <Container fluid>
            <Header />
            <Routes>
                <Route exact path="/" element={<Photos/>}/>         
                <Route path="/cart" element={<Cart/>}/>
             
         
            </Routes>
        </Container>
    )
}

export default App