import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const activeStyle = 'underline underline-offset-4'
    return(
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
            <ul className='flex items-center gap-3'>
                <li className='font font-semibold text-lg'>
                    <NavLink 
                        to = '/'
                        className={({isActive}) => 
                            isActive ? activeStyle: undefined
                        }
                        >
                        Mi Tienda
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to = '/all'
                        className={({isActive}) => 
                            isActive ? activeStyle: undefined
                        }
                        >
                        Todo
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to = '/materialescritorio'
                        className={({isActive}) => 
                            isActive ? activeStyle: undefined
                        }
                        >
                        Material de Escritorio
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to = '/Servicios'
                        className={({isActive}) => 
                            isActive ? activeStyle: undefined
                        }
                        >
                        Servicios
                    </NavLink>
                </li>
                
            </ul>

            <ul className='flex items-center gap-3'>
                <li className='text-black/60'>
                    econ@econ.com
                </li>
                <li>
                    <NavLink 
                        to = '/MiCuenta'
                        className={({isActive}) => 
                            isActive ? activeStyle: undefined
                        }
                        >
                        Mi Cuenta
                    </NavLink>
                    <NavLink 
                        to = '/IniciarSesion'
                        className={({isActive}) => 
                            isActive ? activeStyle: undefined
                        }
                        >
                        Iniciar Sesión
                    </NavLink>
                    <NavLink 
                        to = '/MiOrden'
                        className={({isActive}) => 
                            isActive ? activeStyle: undefined
                        }
                        >
                        Mi Orden
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar