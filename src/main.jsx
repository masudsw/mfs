import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Login.jsx';
import Registration from './Registration.jsx';
import Home from './Home.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: '/login',
    element:<Login/>

  },
  {
    path:'registration',
    element:<Registration/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='m-8'>
    <RouterProvider router={router} />
    </div>
     
  </React.StrictMode>,
)
