import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import Navbar from '../../Components/Navbar'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home />, },
    { path: '/MyAccount', element: <MyAccount />, },
    { path: '/MyOrder', element: <MyOrder />, },
    { path: '/*', element: <NotFound />, },
    { path: '/SignIn', element: <SignIn />, },
  ])
  return routes
}

const App = () => {
 
  return (
    <BrowserRouter>
      <AppRoutes />
      <Navbar />
    </BrowserRouter>
  )
}

export default App
