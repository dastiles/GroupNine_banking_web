
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../../features/auth/authSlice'
import { AiOutlineMenu, AiOutlineClose, AiOutlineUser } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'


const NavBar = () => {
    const [logged, setLogged] = useState(null)
    const { user, } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const redirect = useNavigate()
    const [toggleMenu, setToggleMenu] = useState(false)
    useEffect(() => {
        setLogged(user)
        dispatch(reset())
    }, [user, dispatch])


    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        redirect('/login')
    }
    return (
        <header className='bg-white '>
            <nav className='bg-cobalt  shadow-lg  py-3 pb-3'>
                <div className='w-[90vw] mx-auto flex justify-between items-center'>
                    <div>
                        <Link to='/'>
                            <h1 className='text-white text-2xl font-bold tracking-wide'>GroupNine Bank</h1>
                        </Link>
                    </div>
                    <ul className='md:flex gap-10 hidden text-white tracking-wide font-thin'>
                        <li className='hover:bg-dodgerBlue py-[3px] px-[10px]  rounded-md  transition-all'><Link to={'/services'}>Services</Link></li>
                        <li className='hover:bg-dodgerBlue py-[3px] px-[10px]  rounded-md  transition-all'><Link to={'/contact'}>Contact Us</Link></li>
                        <li className='hover:bg-dodgerBlue py-[3px] px-[10px]  rounded-md  transition-all'><Link to={'/about'}>About</Link></li>
                    </ul>
                    <ul className='md:flex gap-10 hidden text-white tracking-wide font-thin'>
                        {!logged ? (
                            <>
                                <li className='hover:bg-dodgerBlue py-[3px] px-[10px]  rounded-md  transition-all'><Link to={'/register'}>Open New Account</Link></li>
                                <li className='hover:bg-dodgerBlue py-[3px] px-[10px]  rounded-md  transition-all'><Link to={'/login'}>Login</Link></li></>
                        ) : (
                            <>
                                <li className='bg-dodgerBlue p-2'><Link to={'/profile'}>

                                    <AiOutlineUser size={30} className='text-white' />
                                </Link></li>

                                <li className='hover:bg-dodgerBlue py-[3px] px-[10px]  rounded-md  transition-all' onClick={onLogout}>Logout</li>
                            </>
                        )}


                    </ul>
                    {
                        !toggleMenu ? <AiOutlineMenu className='text-white md:hidden' size={30} onClick={() => setToggleMenu(!toggleMenu)} /> : <AiOutlineClose className='text-white md:hidden' size={30} onClick={() => setToggleMenu(!toggleMenu)} />
                    }

                </div>
                {toggleMenu && (
                    <div className='md:hidden w-[90vw] mx-auto'>
                        <ul className='flex gap-5 flex-col my-5 text-white tracking-wide font-thin'>
                            <li className='hover:bg-gray-700 py-[3px] px-[10px]  rounded-md hover:text-white transition-all'><Link to={'/services'}>Services</Link></li>
                            <li className='hover:bg-gray-700 py-[3px] px-[10px]  rounded-md hover:text-white transition-all'><Link to={'/contact'}>Contact Us</Link></li>
                            <li className='hover:bg-gray-700 py-[3px] px-[10px]  rounded-md hover:text-white transition-all'><Link to={'/about'}>About</Link></li>
                        </ul>
                        <ul className='flex gap-5 flex-col text-white tracking-wide font-thin'>
                            {!logged ? (
                                <>
                                    <li className='hover:bg-dodgerBlue py-[3px] px-[10px]  rounded-md  transition-all'><Link to={'/register'}>Open New Account</Link></li>
                                    <li className='hover:bg-dodgerBlue py-[3px] px-[10px]  rounded-md  transition-all'><Link to={'/login'}>Login</Link></li></>
                            ) : (
                                <li className='hover:bg-dodgerBlue py-[3px] px-[10px]  rounded-md  transition-all' onClick={onLogout}>Logout</li>
                            )}

                        </ul>
                    </div>
                )}

            </nav>
        </header >
    )
}

export default NavBar