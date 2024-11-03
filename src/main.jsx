import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

import Error from './routes/Error/Error'
import Home from './routes/Home/Home'
import Login from './routes/Login/Login'
import Products from './routes/Products/Products'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  
  {
    path:'/', element:<App/>,
    errorElement: <Error/>
  ,

  children:[
    {path:'/', element:<Home/>},
    {path:'/login', element:<Login/>},
    {path:'/products', element:<Products/>}
  ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
