import React, { useState } from 'react';
import {
  Button
} from '@carbon/react';
import Webcam from "react-webcam";
import { Scan, ScanAlt } from '@carbon/icons-react';
const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};
const CameraInput = ({ }) => {
  const [image, saveImage] = useState();
  return (
    <div className='form-container'>
      {(!image ? <Webcam
        audio={false}
        height={'100%'}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
      >
        {({ getScreenshot }) => (
          <div className='button-container'><Button
            className='camera-save-btn'
            onClick={() => {
              const imageSrc = getScreenshot();
              saveImage(imageSrc);
              console.log(imageSrc)
            }}
            renderIcon={ScanAlt}
          >
            Capture
          </Button>
          </div>
        )}
      </Webcam> :
        <div>
          <img src={image} />
          <div className="button-container" >
            <Button >Next</Button>
            <Button kind="tertiary" onClick={e => { saveImage() }}>Retake</Button>
            <Button kind="secondary">Back</Button>
          </div>
        </div>

      )}

    </div>)
}

export default CameraInput;
