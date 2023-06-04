'use client'
import PaymentsTable from '../components/bankStatement/paymentsTable'
import { getPayments, reset } from '../features/payments/paymentSlice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const BankStatement = () => {
    const { payments, isLoading, isError, message } = useSelector((state) => state.payment)
    const { user } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const redirect = useNavigate()
    useEffect(() => {
        if (isError) {
            toast.error(message)
        }
        if (!user) {
            redirect('/login')
        }
        dispatch(getPayments())

        return () => {
            dispatch(reset())
        }

    }, [isError, message, dispatch, user, redirect])
    console.log(payments)
    if (isLoading) {
        return <p>loading payments  ....</p>
    }


    return (
        <div className='w-[90vw] mx-auto py-10 bg-lightGrey'>
            <div className='flex lg:justify-around justify-center items-center lg:items-start'>
                <div className='mb-5 lg:mb-0'>
                    <h3 className='tracking-wide text-2xl py-5 font-bold'> Your Recent Transactions</h3>
                    {payments.length > 0 ? (
                        <table className='border-collapse'>
                            <thead className='bg-gray-700 p-4'>
                                <tr className='text-white px-2 text-sm lg:text-lg'>
                                    <th className='py-3 px-2 md:px-6 lg:px-8 text-left'>Account Name</th>
                                    <th className='py-3 px-2 md:px-6 lg:px-8 text-left'>Account Number</th>
                                    <th className='py-3 px-2 md:px-6 lg:px-8 text-left'>Cash flow</th>
                                    <th className='py-3 px-2 md:px-6 lg:px-8 text-left'>Amount</th>
                                    <th className='py-3 px-2 md:px-6 lg:px-8 text-left'>Date</th>
                                </tr>
                            </thead>
                            {payments.map((payment) => <PaymentsTable key={payment.id} payment={payment} />)}

                        </table >
                    ) : (<h1>No recent transactions</h1>)}
                </div>
            </div>

        </div>
    )
}

export default BankStatement