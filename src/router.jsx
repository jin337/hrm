import { lazy } from 'react'
import { createBrowserRouter } from 'react-router'

const Home = lazy(() => import('src/views/Home'))

const routes = [
  {
    path: '/',
    element: <Home />,
  },
]

export const router = createBrowserRouter(routes)
