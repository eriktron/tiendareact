import { useRoutes, BrowserRouter } from 'react-router-dom'
import { TiendaCartaProvider } from '../../Context'
import Home from '../Home'
import MiCuenta from '../MiCuenta'
import MiOrden from '../MiOrden'
import NotFound from '../NotFound'
import IniciarSesion from '../IniciarSesion'
import Navbar from '../../Components/Navbar'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home />, },
    { path: '/micuenta', element: <MiCuenta />, },
    { path: '/miorden', element: <MiOrden />, },
    { path: '/*', element: <NotFound />, },
    { path: '/iniciarsesion', element: <IniciarSesion />, },
  ])
  return routes
}

const App = () => {
 
  return (
    <TiendaCartaProvider>
        <BrowserRouter>
            <AppRoutes />
            <Navbar />
        </BrowserRouter>
    </TiendaCartaProvider> 
  )
}

export default App
