import React, { useState } from 'react';
import {
  Button
} from '@carbon/react';
import Webcam from "react-webcam";
import { Scan, ScanAlt, Camera, Checkmark, ArrowLeft } from '@carbon/icons-react';
import { Link, useNavigate } from 'react-router-dom';
const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};
const CameraInput = ({ }) => {
  const webcamRef = React.useRef(null);
  const [image, saveImage] = useState(null);
  const navigate = useNavigate();

  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    saveImage(imageSrc)
  };

  const resetCapture = () => {
    saveImage(null);
  };

  const saveCapture = () => {

  };

  return (
    <div className='form-container'>
      {(!image ?
        <div className='tiles-container'>
          <div className='camera-container'>
            <div className='camera'>
              <Webcam audio={false} ref={webcamRef} screenshotFormat='image/jpeg' className='web-camera' />
            </div>

            <div className='button-container'>
              <Button className='btn-cancel' kind='default' onClick={e => { navigate('/form/new') }} renderIcon={ArrowLeft}></Button>
            </div>
          </div>
          <div className='scan-button'>
            <Button onClick={captureImage} renderIcon={Camera}>Start scan</Button>
          </div>
        </div>
        :
        <div className='tiles-container'>
          <div className='img-container'>
            <div className='img-captured'>
              <img src={image} className='img-saved'></img>
            </div>
            <div className='button-container'>
              <Button className='btn-cancel' kind='default' onClick={e => { navigate('/form/new') }}>X</Button>
            </div>
          </div>
          {/* <div className='button-container'> ajsaskjasajskaj */}
          <div className='text-container'>
            <div className='inline-text'>
              <span className='product-name'>Carrot</span>
              <span className='days'>7 days</span>
            </div>
            <br />
            <div className='bottom-text'>Vegetables</div>
          </div>
          <div className='button-footer'>
            <Button onClick={resetCapture} renderIcon={Camera} >Scan again</Button>
            {/* onClick={saveCapture} */}
            <Button className='camera-save-btn' renderIcon={Checkmark} onClick={e => { navigate('/form/output') }}>Save</Button>
          </div>
          {/* </div> */}
        </div>
      )}

    </div>);
};

export default CameraInput;