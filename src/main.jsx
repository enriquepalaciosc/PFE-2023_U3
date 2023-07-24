import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css'

import './index.css'
import HolaMundo from './components/HolaMundo'
import Calama from './components/Calama'
import Ejercicio01 from './components/ejercicios/Ejercicio01'
import Tareas from './components/tareas/Tareas'

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/hola",
    element:<HolaMundo/>
  },
  {
    path:"/calama",
    element:<Calama/>

  },
  {
    path:"/Ejercicios01",
    element:<Ejercicio01/>
  },
  {
    path: "/tareas",
    element: <Tareas />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
