import { AiOutlineFullscreenExit, AiOutlineBank, AiOutlineMoneyCollect, AiTwotoneMoneyCollect } from 'react-icons/ai'
import ListCard from '../components/aboutpage/listCard'

const AboutPage = () => {
    return (
        <main>
            <div className="bg-white pb-5 mb-8 ">
                <h1 className="tracking-wide py-5  px-2 pb-3 text-5xl font-bold">We are ready to serve you</h1>
                <div className='h-[3px] w-[40vw] md:w-[20vw] bg-dodgerBlue mb-4'></div>
            </div>

            <div className='w-[90vw] mx-auto'>
                <ListCard data={{ icon: <AiOutlineFullscreenExit size={20} />, text: 'Insure what matters' }} />
                <ListCard data={{ icon: <AiTwotoneMoneyCollect size={20} />, text: 'Ways to bank' }} />
                <ListCard data={{ icon: <AiOutlineMoneyCollect size={20} />, text: 'Borrow your needs' }} />
                <ListCard data={{ icon: <AiOutlineBank size={20} />, text: 'Bank with us' }} />
            </div>

            <div>
                <h1>About Us</h1>
                <p></p>
            </div>
        </main>
    )
}

export default AboutPage