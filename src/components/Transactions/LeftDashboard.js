import { FaPaypal } from 'react-icons/fa'
import { GiReceiveMoney, GiCardRandom } from 'react-icons/gi'
import { RiVisaLine } from 'react-icons/ri'

const LeftDashboard = () => {
    return (
        <>
            <div className='bg-gradient-to-r from-[#1eabe7e3] to-cyan-300 rounded-2xl p-8 space-y-10'>
                <div className='flex items-center gap-6'>
                    <div className='p-3 bg-[#F9F9F9] rounded-lg'>
                        <GiReceiveMoney className='w-8 h-8 text-[#1EAAE7]' />
                    </div>
                    <div className=''>
                        <h3 className='text-[#F9F9F9] opacity-80 text-lg font-medium'>Available balance (NGN)</h3>
                        <h5 className='text-4xl text-white'>
                            <span className='opacity-80 text-[#F9F9F9]'>$</span>330<span className='opacity-80 text-[#F9F9F9]'>.16</span>
                        </h5>
                    </div>
                </div>
                <button className='w-full text-[#1EAAE7] bg-[#F9F9F9] font-semibold py-3 rounded-lg'> + Add credits to wallet</button>
            </div>

            <div className='bg-[#fff] rounded-2xl p-8 space-y-5'>
                <div className='space-y-1'>
                    <h3 className='text-lg text-gray-700'>Payment methods</h3>
                    <h4 className='text-gray-700'>Your connected credit cards, paypal etc.</h4>
                </div>
                <div className='flex bg-[#F9F9F9] items-center gap-6 p-3 rounded-2xl'>
                    <div className='px-4 py-1 bg-black rounded-lg'>
                        <RiVisaLine className='h-10 w-10 text-white' />
                    </div>
                    <div className=''>
                        <h3 className='font-medium'>Visa</h3>
                        <h5 className='font-medium'>Expires on 09/28</h5>
                    </div>
                </div>
                <div className='flex bg-[#F9F9F9] items-center gap-6 p-3 rounded-2xl'>
                    <div className='px-4 py-1 bg-gradient-to-r from-[#1eabe7e3] to-cyan-300 rounded-lg'>
                        <FaPaypal className='w-10 h-8 text-white' />
                    </div>
                    <div className=''>
                        <h3 className='font-medium'>student@example.com</h3>
                        <h5 className='font-medium'>Connected on Jul 02, 2020</h5>
                    </div>
                </div>
                <h6 className='text-right text-[#1EAAE7]'>Payment settings</h6>
            </div>

            <div className='bg-white rounded-2xl pr-8 py-8 space-y-10'>
                <div className='flex items-center gap-6'>
                    <div className='p-3'>
                        <GiCardRandom className='w-32 h-20 text-[#1EAAE7]' />
                    </div>
                    <div className='space-y-1'>
                        <h3 className='text-lg font-medium'>Metafy Gift Card</h3>
                        <p className='text-gray-600'>Gift metafy lessons to loved ones or redeem a gift card if you already have one</p>
                    </div>
                </div>
                <div className='pl-8 grid grid-cols-1 md:grid-cols-2 gap-2'>
                    <button className='w-full text-[#1EAAE7] bg-[#F9F9F9] font-semibold py-3 rounded-lg'>Buy a card</button>
                    <button className='w-full text-white bg-gradient-to-r from-[#1eabe7e3] to-cyan-300 font-semibold py-3 rounded-lg'>Redeem a card</button>
                </div>
            </div>
        </>
    )
}

export default LeftDashboard