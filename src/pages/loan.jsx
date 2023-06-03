import { LoanApplication } from '../components/loan/loanApplication'
import LoanIntro from '../components/loan/loanIntro'
import LoanIntroCard from '../components/loan/loanIntroCard'
import LoanJumbotron from '../components/loan/loanJumbotron'
import { AiFillMobile, AiFillFastForward, AiFillAppstore } from 'react-icons/ai'
import { BsSmartwatch } from 'react-icons/bs'




const LoanPage = () => {
    return (
        <div>
            <LoanJumbotron />
            <div className='w-[90vw] mx-auto py-8'>
                <LoanIntro />


                <h1 className='text-md text-prusBlue py-4'>SOME OF THE BENEFITS</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0">
                    <LoanIntroCard data={{ icon: <AiFillMobile size={30} className="text-white" />, info: 'Transaction based loan and no extra documents required', text: "Easy" }} />

                    <LoanIntroCard data={{ icon: <AiFillFastForward size={30} className="text-white" />, info: 'Loan processed within 24 hours', text: "Fast" }} />

                    <LoanIntroCard data={{ icon: <AiFillAppstore size={30} className="text-white" />, info: 'Visit Groupnine bank website. No need to visit a branch to transact', text: "Mobility" }} />

                    <LoanIntroCard data={{ icon: <BsSmartwatch size={30} className="text-white" />, info: 'Access your loan within hours of appling', text: "Accessibility" }} />
                </div>
            </div>
            <LoanApplication />
        </div>
    )
}

export default LoanPage