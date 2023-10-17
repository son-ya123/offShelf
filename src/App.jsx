import React from 'react';
import './App.scss'
import ErrorPage from './components/ErrorPage';
import FormPage from './components/FormPage/FormPage';
import LandingPage from './components/LandingPage';
import PageHeader from './components/PageHeader';
import FormOutputPage from './components/FormOutputPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import { useTheme } from '@carbon/react';
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import CameraInput from './components/CameraInput';
import { Login } from '@carbon/icons-react';

function App() {
  const { theme } = useTheme();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
      errorElement: <><PageHeader /><ErrorPage /></>,

    },
    {
      path: "login",
      element: <LoginPage />,
    },
    {
      path: "form/new",
      element: <><PageHeader /><FormPage /></>,
    },
    {
      path: "form/camera",
      element: <><PageHeader /><CameraInput /></>,
    },
    {
      path: "form/output",
      element: <FormOutputPage />,
    },
    {
      path: "register",
      element: <RegisterPage />,
    },
    {
      path: "form/voice",
      element: <><PageHeader /><VoiceInput /></>,
    },
    {
      path: "dashboard",
      element: <><PageHeader /><Dashboard /></>,
    },
    {
      path: "register",
      element: <RegisterPage />,
    }
  ]);
  return (
    <div >
      <PageHeader />
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>


    </div>
  )
}

export default App
