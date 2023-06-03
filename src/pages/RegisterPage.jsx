
import { useState, useEffect } from "react"
import { toast } from "react-toastify"
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { register, reset } from "../features/auth/authSlice"



const RegisterPage = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        phone: '',
        password: '',
        c_password: '',
        gender: ''
    })

    const { gender, name, email, address, phone, password, c_password } = formData


    const dispatch = useDispatch()
    const redirect = useNavigate()
    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)


    useEffect(() => {
        if (isError) {
            toast.error(message)
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
        if (!gender || !name || !email || !password || !c_password || !address || !phone) {
            toast.error('Please fill in all fields')
            return
        }

        if (password !== c_password) {
            toast.error('Password does not match')
            return
        }

        const regex = /^07\d{8}$/
        if (!regex.test(phone)) {
            toast.error('Enter valid phone number')
            return
        }

        const regex_email = /^\S+@\S+\.\S+$/
        if (!regex_email.test(email)) {
            toast.error('Enter valid email address')
            return
        }

        const userData = {
            gender, name, email, password, address, phone
        }

        dispatch(register(userData))

    }

    if (isLoading) {
        return <div>Loading....</div>
    }
    return (
        <div className='flex flex-col justify-center items-center pt-20 bg-lightGrey'>
            <div className="text-center">

                <h1 className="tracking-wide text-2xl py-5 text-prusBlue text-bold">Secure your future by banking  with us </h1>


            </div>

            <div>
                <form action="" onSubmit={onSubmit} className="flex flex-col gap-3">
                    <div>
                        <input type="text" placeholder="Fullname" name="name" id="fullname" value={name} onChange={onChange} className="w-[70vw] md:w-[40vw] lg:[20vw]  bg-white outline-none  border-cobalt rounded-full border-[1px] p-1 " />
                    </div>
                    <div>
                        <input type="text" placeholder="Email" name="email" id="email" value={email} onChange={onChange} className="w-[70vw] md:w-[40vw] lg:[20vw]  bg-white outline-none  border-cobalt rounded-full border-[1px] p-1 " />
                    </div>
                    <div>
                        <input type="text" placeholder="Address" name="address" id="address" value={address} onChange={onChange} className="w-[70vw] md:w-[40vw] lg:[20vw]  bg-white outline-none border-cobalt rounded-full border-[1px] p-1 " />
                    </div>
                    <select name="gender" value={gender} onChange={onChange} className="w-[70vw] md:w-[40vw] lg:[20vw] bg-white outline-none  border-cobalt rounded-full border-[1px] p-1 ">
                        <option value="">Select  Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <div>
                        <input type="text" placeholder="Phone Number" name="phone" id="phone" value={phone} onChange={onChange} className="w-[70vw] md:w-[40vw] lg:[20vw]  bg-white outline-none  border-cobalt rounded-full border-[1px] p-1 " />
                    </div>
                    <div>
                        <input type="password" placeholder="Password" name="password" id="password" value={password} onChange={onChange} className="w-[70vw] md:w-[40vw] lg:[20vw]  bg-white outline-none border-cobalt rounded-full border-[1px] p-1 " />
                    </div>
                    <div>
                        <input type="password" placeholder=" Confirm Password" name="c_password" id="c_password" value={c_password} onChange={onChange} className="w-[70vw] md:w-[40vw] lg:[20vw]  bg-white outline-none  border-cobalt rounded-full border-[1px] p-1 " />
                    </div>
                    <button type="submit" className="bg-dodgerBlue text-white font-bold rounded-full py-2 tracking-wide hover:shadow-lg">Create Account</button>
                </form>
            </div>

        </div>
    )
}

export default RegisterPage