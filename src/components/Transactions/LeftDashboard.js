import { IoPaperPlaneOutline } from "react-icons/io5"
import { RiMastercardFill } from "react-icons/ri"
import Transactions from "./Transactions"

const LeftDashboard = () => {
    return (
        <div className='space-y-8'>
            <div>
                <h3 className='text-lg font-semibold pb-20'>Card List</h3>
            </div>
            <div>
                <div className='flex flex-col'>
                    <div className='bg-[#B8D3ED] bg-opacity-10 p-5 rounded-t-2xl h-20 relative'>
                        <div className='h-36 bg-[#DECDAE] bg-opacity-30 absolute bottom-3 left-3 w-11/12 rounded-2xl p-6'>
                            <div className='space-y-1'>
                                <h5 className='text-[0.6rem] font-semibold text-gray-500'>Regular card</h5>
                                <h3 className='text-xl font-medium'>Johntosan</h3>
                            </div>
                            <div className='mt-4 blur-sm opacity-80'>
                                <RiMastercardFill className='w-7 h-7 text-yellow-400' />
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center bg-[#B8D3ED] bg-opacity-30 p-5 rounded-b-2xl justify-between h-28'>
                        <div>
                            <h5 className='text-xs text-gray-500 font-medium'>Total balance</h5>
                            <h3 className='text-lg font-semibold'>$4,672,000</h3>
                        </div>
                        <IoPaperPlaneOutline className='w-6 h-6' />
                    </div>
                </div>
            </div>
            <Transactions />
            {/* <div className='bg-gradient-to-r from-[#1eabe7e3] to-cyan-300 rounded-2xl p-8 space-y-10'>
                <div className='flex items-center gap-6'>
                    <div className='p-3 bg-[#F9F9F9] rounded-lg'>
                        <GiReceiveMoney className='w-8 h-8 text-[#1EAAE7]' />
                    </div>
                    <div className=''>
                        <h3 className='text-[#F9F9F9] opacity-80 lg:text-lg font-medium'>Available balance (NGN)</h3>
                        <h5 className='text-2xl lg:text-4xl text-white'>
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
            </div> */}
        </div>
    )
}

export default LeftDashboard