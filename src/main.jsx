// core - react
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"


// components
import App from './App.jsx' // main app
import HolaMundo from "./components/HolaMundo" // router example
import Calama from "./components/Calama.jsx" // router example

// components: ejemplos 01
import EstadosInicio from "./components/ej01_estados/EstadosInicio"
import EstadosInput from "./components/ej01_estados/EstadosInput.jsx"

// components: ejercicio 01
import Ejercicio01 from "./components/ejercicios/Ejercicio01.jsx";

// app routes
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/hola",
        element: <HolaMundo />
    },
    {
        path: "/ciudad",
        element: <Calama />
    },
    // routes: ejemplos 01
    {
        path: "/ejemplos/01/estados-inicial",
        element: <EstadosInicio />
    },
    {
        path: "/ejemplos/01/estados-input",
        element: <EstadosInput />
    },
    // routes: Ejercicio 01 taller presencial
    {
        path: "/ejercicio01",
        element: <Ejercicio01 />
    }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
