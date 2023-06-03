'use client'

import { useEffect } from 'react'
import { reset } from '../features/auth/authSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PaymentForm from '../components/sendMoney/PaymentForm'


const SendMoney = () => {

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
        <div className='w-[90vw] mx-auto py-10 bg-lightGrey'>
            <div className='flex lg:justify-around justify-center items-center lg:items-start'>
                <PaymentForm />
            </div>


        </div>
    )
}

export default SendMoney