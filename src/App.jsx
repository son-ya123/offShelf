import React from 'react';
import './App.scss'
import ErrorPage from './components/ErrorPage';
import FormPage from './components/FormPage/FormPage';
import LandingPage from './components/LandingPage';
import PageHeader from './components/PageHeader';
import { useTheme } from '@carbon/react';
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import CameraInput from './components/CameraInput';
import { GlobalTheme, Theme } from '@carbon/react';
import Dashboard from './components/Dashboard';
import { Product } from '@carbon/icons-react';
import ProductDetails from './components/ProductDetails';
import VoiceInput from './components/VoiceInput';

function App() {
  const { theme } = useTheme();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
      errorElement: <><PageHeader /><ErrorPage /></>,

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
      path: "form/voice",
      element: <><PageHeader /><VoiceInput /></>,
    },
    {
      path: "dashboard",
      element: <><PageHeader /><Dashboard /></>,
    },
    {
      path: "product-details",
      element: <><PageHeader /><ProductDetails /></>,
    },
  ]);
  return (
    <GlobalTheme theme="g10">
      <Theme theme="g10">
        <>
          <React.StrictMode>
            <RouterProvider router={router} />
          </React.StrictMode>
        </>
      </Theme>
    </GlobalTheme>
  )
}

export default App
