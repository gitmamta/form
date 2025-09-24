import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from "./home/Home.jsx";
import Layout from "./layout/Layout.jsx";
import Form from './pages/form/Form.jsx';



const router=createBrowserRouter([{
path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "add",
        element: <Form />,
      }
    ]


}])



createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} /> 
)
