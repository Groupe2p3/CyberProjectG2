import React from 'react'
import ReactDOM from 'react-dom/client'
import Profil from './components/Profil'
import Forms from './components/Forms';
import Form from './components/Form';
import ErrorPage from "./error-page";
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/profile",
    element: <Profil />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/forms",
    element: <Forms />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/form/:id",
    element: <Form />,
    errorElement: <ErrorPage />,
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
