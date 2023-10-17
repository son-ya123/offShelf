import React, { useState } from 'react';
import {
    Button, ClickableTile, FluidForm, TextInput, Tile, Checkbox, PasswordInput
} from '@carbon/react';
import Webcam from "react-webcam";
import CameraInput from '../CameraInput';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from '@carbon/icons-react';
const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
};
const RegisterPage = () => {
    const [image, saveImage] = useState();
    const navigate = useNavigate();
    return (
        <div className='container'>
            {/* <CameraInput image={image} saveImage={saveImage}/> */}
            <div className='tiles-container'>
                <div className='form-title'>
                <Button className='arrowLeft' onClick={e => navigate("/login")} size='sm' kind='ghost' renderIcon={ArrowLeft}></Button>
                <h5 className='form-title'>Create Account</h5>
                </div>
                <FluidForm>
                    <TextInput type="text" labelText="Username" id="username" placeholder='Your username' />
                    <br />
                    <br />
                    <TextInput type="email" labelText="Email" id="email" placeholder='Your email' />
                    <br />
                    <br />
                    <PasswordInput type="password" labelText="Password" id="password"
                        placeholder='6+ character' />
                    <br />
                    <div className='login-options'>
                        <Checkbox defaultChecked labelText={`I accept the term and privacy policy?`} className="remember-me" />
                    </div>
                    <br /><br />
                    <div className='sign-in-btn'>
                        <Button type='submit' >Sign up</Button>
                    </div>
                    <br /><br />
                    <div className='custom-divider'>
                        <p className='text-options'>or sign in with </p>
                    </div>
                    <br /><br />
                    <div className='google-btn'>
                        <Button type='button' >Sign in with Google</Button> </div>
                    <br /><br />
                    <h5 className='text-options'> Already have an account <Link inline href="/login" onClick={e => { navigate("/login") }} > Sign In</Link>
                    </h5>
                </FluidForm>
            </div>

        </div>)
}

export default RegisterPage;
