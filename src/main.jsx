
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { StrictMode } from 'react'
import Navbar from './components/custom/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Tripform from './pages/Tripform'

const routes = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      },
      {
        path:'/trip-form',
        element:<Tripform/>
      }
  ]
  );

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <RouterProvider router={routes} />
    </StrictMode>
  ,
)
