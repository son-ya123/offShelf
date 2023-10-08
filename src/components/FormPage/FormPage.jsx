import React, { useState } from 'react';
import {
 Button, ClickableTile, Tile
} from '@carbon/react';
import Webcam from "react-webcam";
import CameraInput from '../CameraInput';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from '@carbon/icons-react';
const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};
const FormPage = () => {
  const [image, saveImage] = useState();
  const navigate = useNavigate();
  return (
  <div className='form-container'>
  {/* <CameraInput image={image} saveImage={saveImage}/> */} 
  <h4 className='form-title'>Add products</h4> 
  <div className='tiles-container'>
      
  <ClickableTile id="tile-1" onClick={e=>{navigate('/form/camera')}}>
      Scan products
      <br />
      <br />
      <h4>Use your device's camera to scan the products</h4>
      <Link style={{float:'right',marginTop:'10rem'}} to="/form/camera"><ArrowRight size="24"/></Link>
    </ClickableTile>
    <div style={{marginLeft:'10rem'}}>OR</div>
    <ClickableTile id="tile-1">
      Voice input
      <br />
      <br />
      <h4>Input the products and their details via voice commands</h4>
      <Link  style={{float:'right',marginTop:'10rem'}} to="/form/voice"><ArrowRight size="24"/></Link>
    </ClickableTile>
  </div>
  
  </div>)}

export default FormPage;
