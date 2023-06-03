import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import Card from '../components/homePage/card'
import { reset } from '../features/auth/authSlice'
import { FaMoneyCheck, FaRegBookmark, FaMoneyBill } from 'react-icons/fa'



const HomePage = () => {

    const { user } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const redirect = useNavigate()

    useEffect(() => {
        if (!user) {
            redirect('/login')
        }
        dispatch(reset())
    }, [user, dispatch, redirect])

    return (
        <main className="bg-white">
            <div className='bg-bg_picture bg-cover h-[80vh] text-center grid place-items-center'>

                <h1 className='text-5xl font-bold tracking-wider text-white'>We offer<br /> Secure Banking <br /> Affordable Loans </h1>

            </div>
            <div className="w-[90vw] mx-auto my-10 ">
                <div className="bg-white py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10 mt-5">
                    <Link to="/sendmoney"><Card data={{ title: "Send Money", icon: <FaMoneyBill /> }} /></Link>
                    <Link to="/loan"><Card data={{ title: "Apply loans", icon: <FaMoneyCheck /> }} /></Link>
                    <Link to="/bankstatement"><Card data={{ title: "Bank Statement", icon: <FaRegBookmark /> }} /></Link>
                </div>
            </div>
        </main>
    )
}

export default HomePage