import React, { useState } from 'react';
import {
    Button, ClickableTile, FluidForm, TextInput, Tile, Checkbox, PasswordInput
} from '@carbon/react';
import Webcam from "react-webcam";
import CameraInput from '../CameraInput';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [image, saveImage] = useState();
    const navigate = useNavigate();
    return (
        <div className='form-container'>
            {/* <CameraInput image={image} saveImage={saveImage}/> */}
            {/* <div className='tiles-container'> */}
                <h5 className='form-title'>Sign in</h5>
                <FluidForm>
                    <TextInput type="text" labelText="Email" id="email" placeholder='Your email' />
                    <br />
                    <br />
                    <PasswordInput type="password" labelText="Password" id="password"
                        placeholder='6+ character' />
                    <br />
                    <div className='login-options'>
                    <Checkbox defaultChecked labelText={`Remember me?`} className="remember-me" />
                    <h5 className='forgot-pwd'>Forgot password?</h5>
                    </div>
                    <br /><br />
                    <div className='sign-in-btn'>
                    <Button type='submit' style={{borderRadius: '50px'}} onClick={e => {navigate("/dashboard")}}>Sign in</Button>
                    </div>
                    <br /><br />
                    <div className='custom-divider'>
                    <p className='text-options'>or sign in with </p> 
                    </div>
                    <br /><br />
                    <div className='google-btn'>
                    <Button type='button' style={{borderRadius: '50px'}}>Sign in with Google</Button> </div>
                    <br /><br />
                    <h5 className='text-options'> Don't have an account? <Link href="register" onClick={e => { navigate('/register') }}> Sign Up</Link>
                    </h5>
                </FluidForm>
            {/* </div> */}
        </div>)
}

export default LoginPage;
