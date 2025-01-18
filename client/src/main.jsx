
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import OurActualteam from './Componets/TeamePage/OurActualteam.jsx'
import NotFoundPage from './Pages/NotFoundPage.jsx'
import Home from './Componets/Home.jsx'
import { StrictMode } from 'react'
import Dashboard from "./Pages/Dashboard.jsx";
import Translator from './Componets/ChatBotComp/Translator.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element:<App/>,
    children: [
      { path: '/', element: <Home /> },
      { path: '/ourteam', element: <OurActualteam /> },
      { path: '/dashboard', element: <Dashboard /> },,
      { path: '/translator', element: <Translator /> },
      { path: '*', element: <NotFoundPage /> }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
)
