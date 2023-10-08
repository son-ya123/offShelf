import React from 'react';
import './App.scss'
import ErrorPage from './components/ErrorPage';
import FormPage from './components/FormPage/FormPage';
import LandingPage from './components/LandingPage';
import PageHeader from './components/PageHeader';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CameraInput from './components/CameraInput';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
      errorElement: <ErrorPage />,
      
    },
    {
      path: "form/new",
      element: <FormPage />,
    },
    {
      path: "form/camera",
      element: <CameraInput />,
    },
    {
      path: "form/new",
      element: <FormPage />,
    },
  ]);
  return (
    <div >
    <PageHeader/>
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>


    </div>
  )
}

export default App
