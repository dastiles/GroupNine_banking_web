import React from 'react'

const LoanJumbotron = () => {
    return (
        <div className='bg-white lg:flex  justify-between w-[100vw]'>
            <div className='text-prusBlue'>
                <div className=' mx-[5vw] py-5 '>
                    <h1 className='text-5xl font-bold tracking-wider'>Come and <br /> get <br /> affordable <br />loans </h1>

                    {/* add gradient */}
                </div>
                <div className='h-[3px] w-[40vw] md:w-[20vw] bg-dodgerBlue'></div>
                <div className=' mx-[5vw] py-5 '>
                    <p className=' text-md tracking-wide font-thin'>We have the right loan for your financial needs</p>
                </div>
            </div>
            <div className='hidden lg:block w-[65vw] h-[320px] '>
                <img src='/assets/bank.jpg' alt='loan picture' className='hidden lg:block w-full h-full object-cover' />
            </div>
        </div>
    )
}

export default LoanJumbotron