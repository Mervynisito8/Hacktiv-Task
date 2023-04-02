import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

//style
import './App.css'

//layout
import Root from './layouts/Root'

//pages
import Land from './pages/Land'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Root />} />
        <Route index element={<Land />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
      </Route>
    )
  )
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
