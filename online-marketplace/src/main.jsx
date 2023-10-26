import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LogIn from './pages/log in/LogIn';
import SignUp from './pages/sign up/SignUp';
import Home from './pages/home/HomeSeller';

const router = createBrowserRouter([
  { path:"/",
    element: <LogIn />,
  },
  {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: "/home",
    element: <Home />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);