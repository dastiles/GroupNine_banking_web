
import { useState } from 'react'
import { toast } from 'react-toastify'

export const LoanApplication = () => {
    const [formData, setFormData] = useState({
        phone: '',
        password: '',

    })

    const { phone, password } = formData
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



        const userData = {
            phone, password
        }

    }
    return (
        <div className='bg-white'>
            <div className='lg:flex lg:justify-between'>
                <div className='mx-[5vh] items-center lg:items-start flex flex-col   justify-center'>
                    <h1 className='text-2xl font-bold text-prusBlue py-5' >Apply for available loan</h1>
                    <form action='' onSubmit={onSubmit} className="flex flex-col gap-4">

                        <div>
                            <input type="text" placeholder="Enter Phone Number" name="phone" id="phone" value={phone} onChange={onChange} className="w-[70vw] md:w-[40vw]   bg-white outline-none  border-cobalt rounded-full border-[1px] p-1 px-3 " />
                        </div>

                        <div>
                            <input type="password" placeholder="Password" name="password" id="password" value={password} onChange={onChange} className="w-[70vw] md:w-[40vw]   bg-white outline-none border-cobalt rounded-full border-[1px] p-1 " />
                        </div>

                        <button type='submit' className="bg-dodgerBlue text-white font-bold rounded-full py-2 tracking-wide hover:shadow-lg">Check your loan</button>
                    </form>
                </div>
                <div className='hidden lg:block w-[50vw] h-[320px] '>
                    <img src='/assets/loan.jpg' alt='loan picture' className='hidden lg:block w-full h-full object-cover' />
                </div>
            </div>
        </div>
    )
}
