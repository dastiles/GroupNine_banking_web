import { useNavigate } from 'react-router-dom'
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { reset } from '../features/auth/authSlice'

const ProfilePage = () => {
    const { user } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const redirect = useNavigate()

    useEffect(() => {
        if (!user) {
            redirect('/login')
        }
        console.log(user)
        dispatch(reset())
    }, [user, dispatch, redirect])
    return (
        <div>
            <div className="bg-white pb-5 mb-8 ">
                <h1 className="tracking-wide py-5  px-2 pb-5 text-5xl font-bold">Welcome Banker <br /> {user.name}</h1>
                <div className='h-[3px] w-[40vw] md:w-[20vw] bg-dodgerBlue mb-4'></div>
            </div>

            <div className='text-center text-prusBlue flex justify-center items-center flex-col mt-5'>
                <h1 className='text-2xl font-bold  py-5'>Personal Details</h1>
                <p className='md:w-[60vw] lg:w-[40vw]'>Check and review your personal details below if they any errors please contact us at groupNine bank</p>
            </div>
        </div>
    )
}

export default ProfilePage