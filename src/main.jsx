import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import CardPioneer from './ProjectCards/CardPioneer.jsx'
import Projects from './Pages/Projects.jsx'
import ErrorPage from './Pages/ErrorPage.jsx'
import Pioneer from './Pages/Pioneer.jsx'
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
      path: '/CardPioneer',
      element: <CardPioneer />,
    },
    {
      path: '/Pioneer',
      element: <Pioneer />,
    },
    {
      path: '/Header',
      element: <Header />,
    },
    {
      path: '/Footer',
      element: <Footer />,
    },
    {
      path: '/Projects',
      element: <Projects />,
    },
  ]
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);