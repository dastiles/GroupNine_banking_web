

const LoanIntroCard = ({ data }) => {
    const { icon, text, info } = data
    return (

        <div className='text-center flex flex-col justify-center items-center w-[85vw] md:w-[45vw] lg:w-[23vw]'>
            <div className='bg-cobalt w-[70px] h-[75px] rounded-lg flex justify-center items-center mb-5'>
                {icon}
            </div>
            <h2 className='text-2xl font-semibold text-prusBlue'>{text}</h2>
            <p className='w-[200px] text-prusBlue'>{info}</p>

        </div>
    )
}

export default LoanIntroCard