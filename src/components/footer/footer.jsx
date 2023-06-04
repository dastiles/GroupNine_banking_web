
import { AiFillLinkedin, AiFillYoutube, AiFillFacebook, AiOutlineTwitter } from 'react-icons/ai'

const Footer = () => {
    return (
        <div className='mt-5 bg-prusBlue text-white'>
            <div className='w-[90vw] mx-auto py-5 flex flex-col-reverse md:flex-row justify-between items-center'>
                <p className='w-[400px] tracking-wide my-5 md:my-0'><span className='font-bold'>GroupNine Bank</span><br /> Registered Commercial Bank and a member of the Depost Protection Scheme</p>

                <div className='flex justify-between gap-8'>
                    <AiFillLinkedin size={20} className='white' />
                    <AiFillFacebook size={20} className='white' />
                    <AiFillYoutube size={20} className='white' />
                    <AiOutlineTwitter size={20} className='white' />
                </div>
            </div>
            <p className='py-3 text-white font-thin text-[10px] text-center'>&copy; 2023 All rights reserved to Charles,Victor, Paida , Desmond and Anesu</p>
        </div>
    )
}

export default Footer