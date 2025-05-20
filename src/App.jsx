import React from 'react'
import AuthForm from './components/AuthForm'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthForm />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: '*',
    element: <h1>Page Not Found</h1>,
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
