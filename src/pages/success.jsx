import { AiFillSmile } from 'react-icons/ai'
import { useState, useEffect } from 'react'
import saveUser from '../utils/localStorage'
import { Link } from 'react-router-dom'

const Success = () => {
    const [successPayment, setSuccessPayment] = useState(saveUser.get('sucessPayment'))

    useEffect(() => {
        const payment = saveUser.get('sucessPayment')
        setSuccessPayment(successPayment)
        console.log(payment)
    }, [successPayment])

    if (!successPayment) {
        return (
            <h1>Loading transaction results</h1>
        )
    }
    return (
        <main className='flex justify-center items-center flex-col my-10'>
            <AiFillSmile size={70} className='text-dodgerBlue' />
            <h1 className='font-bold tracking-wide text-center text-prusBlue text-2xl mb-10'>Transaction Successful</h1>

            <h2 className='py-5 '>Summary of the transaction</h2>
            <table className='border-collapse border-black border-2'>
                <tbody>
                    <tr className='w-[80vw] flex justify-between text-right'>
                        <td className='border-collapse border-black border-[1px] w-[40vw]   font-bold px-5'>Transaction id</td>
                        <td className='border-collapse border-black border-[1px] w-[40vw]  px-5'>{successPayment.user}</td>
                    </tr>
                    <tr className='w-[80vw] flex justify-between text-right'>
                        <td className='border-collapse border-black border-[1px] w-[40vw] font-bold px-5'>Amount</td>
                        <td className='border-collapse border-black border-[1px] w-[40vw] px-5'>{successPayment.amount}</td>
                    </tr>
                    <tr className='w-[80vw] flex justify-between text-right'>
                        <td className='border-collapse border-black border-[1px] w-[40vw] font-bold px-5'>Sender Phone Number</td>
                        <td className='border-collapse border-black border-[1px] w-[40vw] px-5'>{successPayment.user_phone}</td>
                    </tr>
                    <tr className='w-[80vw] flex justify-between text-right'>
                        <td className='border-collapse border-black border-[1px] w-[40vw] font-bold px-5'>Receiver Phone Number</td>
                        <td className='border-collapse border-black border-[1px] w-[40vw] px-5'>{successPayment.phone}</td>
                    </tr>
                    <tr className='w-[80vw] flex justify-between text-right'>
                        <td className='border-collapse border-black border-[1px] w-[40vw] font-bold px-5'>Your Current location</td>
                        <td className='border-collapse border-black border-[1px] w-[40vw] px-5'>{successPayment.location}</td>
                    </tr>
                    <tr className='w-[80vw] flex justify-between text-right'>
                        <td className='border-collapse border-black border-[1px] w-[40vw] font-bold px-5'>Receiver Location</td>
                        <td className='border-collapse border-black border-[1px] w-[40vw] px-5'>{successPayment.destination}</td>
                    </tr>
                    <tr className='w-[80vw] flex justify-between text-right'>
                        <td className='border-collapse border-black border-[1px] w-[40vw] font-bold px-5'>Device</td>
                        <td className='border-collapse border-black border-[1px] w-[40vw] px-5'>{successPayment.device}</td>
                    </tr>
                    <tr className='w-[80vw] flex justify-between text-right'>
                        <td className='border-collapse border-black border-[1px] w-[40vw] font-bold px-5'>Bank account Balance</td>
                        <td className='border-collapse border-black border-[1px] w-[40vw] px-5'>{successPayment.balance}</td>
                    </tr>
                </tbody>
            </table>

            <div className='w-[20vw] mt-5 text-center'>
                <Link to='/bankstatement'>
                    <button className='bg-dodgerBlue text-center text-white rounded-md py-2 px-5 outline-none border-none font-bold hover:shadow-lg'>View Statement</button>
                </Link>
            </div>
        </main>
    )
}

export default Success