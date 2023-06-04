
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { login, reset } from "../features/auth/authSlice"
import { Link, useNavigate } from 'react-router-dom'

const LoginPage = () => {

    const [formData, setFormData] = useState({
        phone: '',
        password: '',

    })

    const { phone, password } = formData
    const dispatch = useDispatch()
    const redirect = useNavigate()
    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

    useEffect(() => {
        if (isError) {
            toast.error(message)
            return
        }




        if (isSuccess || user) {
            redirect('/')
        }
        dispatch(reset())
        console.log(isSuccess)
    }, [user, isError, isSuccess, message, dispatch, redirect])
    const onChange = e => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = e => {
        e.preventDefault()

        if (!phone || !password) {
            toast.error('Please fill in all fields')
            return
        }

        const regex = /^07\d{8}$/
        if (!regex.test(phone)) {
            toast.error('Enter valid phone number')
            return
        }



        const userData = {

            phone, password
        }
        dispatch(login(userData))
        setFormData((prevState) => ({
            ...prevState,
            [phone]: ''
        }))
        setFormData((prevState) => ({
            ...prevState,
            [password]: ''
        }))
    }

    if (isLoading) {
        return <div>Loading....</div>
    }
    return (
        <div className='flex flex-col justify-center items-center pt-20 bg-lightGrey'>
            <div className="text-center">

                <h1 className="tracking-wide text-2xl py-5 text-prusBlue text-bold ">Secure your future by banking  with us </h1>


            </div>

            <div>
                <form action='' onSubmit={onSubmit} className="flex flex-col gap-4">

                    <div>
                        <input type="text" placeholder="Phone nmber" name="phone" id="phone" value={phone} onChange={onChange} className="w-[70vw] md:w-[40vw] lg:[20vw]  bg-white outline-none  border-cobalt rounded-full border-[1px] p-1 " />
                    </div>

                    <div>
                        <input type="password" placeholder="Password" name="password" id="password" value={password} onChange={onChange} className="w-[70vw] md:w-[40vw] lg:[20vw]  bg-white outline-none border-cobalt rounded-full border-[1px] p-1 " />
                    </div>

                    <button type='submit' className="bg-dodgerBlue text-white font-bold rounded-full py-2 tracking-wide hover:shadow-lg">Login Account</button>
                </form>
            </div>
            <p className='my-5'> I am a new user? <span className='text-dodgerBlue
            '><Link to='/register'>Open new account with us</Link></span></p>
        </div>
    )
}

export default LoginPage