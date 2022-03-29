import { FaPaypal } from "react-icons/fa"
import { GiReceiveMoney } from "react-icons/gi"
import { RiVisaLine } from "react-icons/ri"

const LeftDashboard = () => {
    return (
        <>
            <div className='bg-[#1EAAE7] rounded-2xl p-10 space-y-10'>
                <div className='flex items-center gap-6'>
                    <div className='p-5 bg-[#F9F9F9] rounded-lg'>
                        <GiReceiveMoney className='w-8 h-8 text-[#1EAAE7]' />
                    </div>
                    <div className=''>
                        <h3 className='text-lg text-white font-medium'>Available balance (NGN)</h3>
                        <h5 className='text-lg text-white font-medium'>$450,000</h5>
                    </div>
                </div>
                <button className='w-full text-[#1EAAE7] bg-[#F9F9F9] font-semibold py-3 rounded-lg'> + Add credits to wallet</button>
            </div>

            <div className='bg-[#fff] rounded-2xl p-10 space-y-5'>
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
                    <div className='px-4 py-1 bg-[#1EAAE7] rounded-lg'>
                        <FaPaypal className='w-10 h-8 text-white' />
                    </div>
                    <div className=''>
                        <h3 className='font-medium'>student@example.com</h3>
                        <h5 className='font-medium'>Connected on Jul 02, 2020</h5>
                    </div>
                </div>
                <h6 className='text-right text-gray-700'>Payment settings</h6>
            </div>
        </>
    )
}

export default LeftDashboard