import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Projects from './Pages/Projects.jsx'

import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import MarantzSR from './Pages/MarantzSR.jsx'
import ErrorPage from './Pages/ErrorPage.jsx'
import Pioneer from './Pages/Pioneer.jsx'
import Marantz2240 from './Pages/Marantz2240.jsx'
import './index.css'


const router = createBrowserRouter([
  {
  path: '/',
  element: <App/>,
  errorElement: <ErrorPage />,
  children: [
   
    {
      path: '/About',
      element: <About />,
    },
    {
      path: '/Contact',
      element: <Contact />,
    },
    {
      path: '/Projects',
      element: <Projects />,
    },
    {
      path: '/MarantzSR',
      element: <MarantzSR/>,
    },
    {
      path: '/Pioneer',
      element: <Pioneer />,
    },
    {
      path: '/Marantz2240',
      element: <Marantz2240 />,
    },
    {
      path: '/Header',
      element: <Header />,
    },
    {
      path: '/Footer',
      element: <Footer />,
    },
  ]
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);