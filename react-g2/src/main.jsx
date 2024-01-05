import React from 'react'
import ReactDOM from 'react-dom/client'
import Profil from './components/Profil'
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
    loader: async () => {
      const solutions = await fetch(`http://localhost:3000/homepage/solutions`);
      if (solutions.status === 404) {
        throw new Response('Pas de solutions', { status: 404});
      }

      const solutionsData = await solutions.json();
      return { solutionsData};
    },
    errorElement: <ErrorPage />,
  },  
  {
    path: "/profile",
    element: <Profil />,
    errorElement: <ErrorPage />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
