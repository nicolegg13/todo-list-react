import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TaskPage from './pages/TaskPage.jsx';

const router = createBrowserRouter([
  { //objeto
    path: "/", //default, tela inicial
    element: <App />, //o que vai ser renderizado na página inicial
  },
  {
    path: "/task",
    element: <TaskPage />,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>,
)
