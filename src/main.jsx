import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import desarrolladores from './datos/desarrolladores.js'

// importamos router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// Importamos leguajes vistas
import DesarroladoresVistas from './vistas/DesarrolladoresVistas.jsx'



const router = [
{
  path:"/",
  element:<App />,
},
];

desarrolladores.forEach((len) => {
  router.push({
    path: len.nnombre,
    element: <DesarroladoresVistas len = {len} />,

  });

});

const routes =createBrowserRouter(router)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

<RouterProvider router={routes}/>
  </React.StrictMode>,
)
