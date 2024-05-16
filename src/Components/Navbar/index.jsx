import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const activeStyle = 'underline underline-offset-4'
    return(
        <nav className='flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light'>
            <ul className='flex items-center gap-3'>
                <li className='font font-semibold text-lg'>
                    <NavLink 
                        to = '/'
                        className={({isActive}) => 
                            isActive ? activeStyle: undefined
                        }
                        >
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to = '/all'
                        className={({isActive}) => 
                            isActive ? activeStyle: undefined
                        }
                        >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to = '/'>
                        Electronica
                    </NavLink>
                </li>
            </ul>

            <ul className='flex items-center gap-3'>
                <li className='text-black/60'>
                    econ@econ.com
                </li>
                <li>
                    <NavLink 
                        to = '/MyAccount'
                        className={({isActive}) => 
                            isActive ? activeStyle: undefined
                        }
                        >
                        Mi Cuenta
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar