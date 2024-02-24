import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from '@/App'
import '@/globals.css'

import { PageNotFound } from '@/components/PageNotFound.tsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  
  // this must always be the final route.
  {
    path: '/*',
    element: <PageNotFound />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)