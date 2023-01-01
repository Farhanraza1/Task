import React, { useState } from 'react'
import { Button, ButtonDropdown, Col, Container, Input, Label } from 'reactstrap'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import basic from './images/basic.jpg'
import circles from './images/circles.png'
import triangles from './images/triangles.png';
import stripes from './images/stripes.png'


const App = () => {
  const [circleValue, setCircles] = useState(false)
  const [triangleValue, setTriangles] = useState(false)
  const [stripesValue, setStripes] = useState(false)


  return (
   <>
    <Container fluid className='d-flex p-0 parent'>
    <Col md= '3' style={{background:'#323639'}}>
     <div className='d-flex flex-column '>
      <div className='d-flex justify-content-between align-items-center py-3 px-1 mb-2'>
      <i class="fa-regular fa-circle ms-3" style={{color:'green'}}></i> <b className='me-4 text'>Matching Circles</b>
        <input className='form-check-input me-4' type='checkbox' onChange={(e)=>setCircles(e.target.checked)}></input>
      </div>
      <div className='d-flex justify-content-between align-items-center py-3 px-1 mb-2'>
      <i class="fa-solid fa-triangle-exclamation ms-3" style={{color:'yellow'}}></i><b className='me-4 text'>Missing Triangles</b>
        <input className='form-check-input me-4' type='checkbox' onChange={(e)=>setTriangles(e.target.checked)}></input>
      </div>
      <div className='d-flex justify-content-between align-items-center py-3 px-1 mb-2'>
      <i class="fa-regular fa-square ms-3" style={{color:'red'}}></i> <b className='me-4 text'>Modified Stripes</b>
        <input className='form-check-input me-4' onChange={(e)=>setStripes(e.target.checked)} type='checkbox'></input>
      </div>
     </div>
     <div className='col-12 d-flex flex-column p-2 mt-5'>
      <Label className='text mb-3' style={{fontWeight:'bold'}}>
        User Confirmation
      </Label>
      <Input className='text' type = 'select' style={{background:'transparent', color:'white'}}>
        <option >select observed value</option>
      </Input> 
      <textarea className='form-control mt-3' style={{background:'transparent'}} rows='10' placeholder='Comments'></textarea>
     </div>
     <div className='col-12 p-2 mt-3 d-flex justify-content-around align-items-center'>
      <Button color='secondary' className='ms-2'>CANCEL</Button>
      <Button color='primary'>SAVE ANALYSIS</Button>
     </div>
    </Col>
    <Col md='9' className='d-flex' style={{background:'black'}}>
    <div className='d-flex justify-content-center align-items-center image_parent p-3'>
    <img className='justify-content-center basic' src = {basic} alt='basic'></img>
    {circleValue == true  &&
      <img className='justify-content-center circle' src = {circles} alt='cricles'></img>
    }
   {
    triangleValue == true &&
    <img className='justify-content-center triangle' src = {triangles} alt='triangles'></img>
   }
    {
      stripesValue == true && 
      <img className='justify-content-center stripes' src = {stripes} alt='stripes'></img>
    }

    </div>
    </Col>
    </Container>
   </>
  )
}

export default App