import PaymentsCard from './PaymentsCard'
import TransactionsCard from './TransactionsCard'

const LeftDashboard = () => {
    return (
        <div className='h-full space-y-10'>
            <div className='bg-white rounded-lg p-10 space-y-10'>
                <h5 className='text-xl text-[#1eabe7e3] font-bold pb-10'>Activity</h5>
                <svg className='w-full' viewBox='0 0 218 69' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                        d='M0 67.5C27.8998 67.5 24.6002 15 52.5 15C80.3998 15 77.1002 29 105 29C132.9 29 128.6 52 156.5 52C184.4 52 189.127 63.8158 217.027 63.8158'
                        stroke='url(#paint0_linear_622:13664)'
                        strokeWidth='1'
                        strokeLinecap='round'
                    />
                    <path
                        d='M0 67.5C27.2601 67.5 30.7399 31 58 31C85.2601 31 80.7399 2 108 2C135.26 2 134.74 43 162 43C189.26 43 190.74 63.665 218 63.665'
                        stroke='url(#paint1_linear_622:13664)'
                        strokeWidth='1'
                        strokeLinecap='round'
                    />
                    <defs>
                        <linearGradient id='paint0_linear_622:13664' x1='217.027' y1='15' x2='7.91244' y2='15' gradientUnits='userSpaceOnUse'>
                            <stop stopColor='#4DFFDF' />
                            <stop offset='1' stopColor='#4DA1FF' />
                        </linearGradient>
                        <linearGradient id='paint1_linear_622:13664' x1='218' y1='18.3748' x2='5.4362' y2='18.9795' gradientUnits='userSpaceOnUse'>
                            <stop stopColor='#E323FF' />
                            <stop offset='1' stopColor='#7517F8' />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className='rounded-lg grid grid-cols-2 lg:gap-10'>
                <PaymentsCard />
                <TransactionsCard />
            </div>
        </div>
    )
}

export default LeftDashboard