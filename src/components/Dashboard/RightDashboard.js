import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { RiMastercardFill } from 'react-icons/ri'

const RightDashboard = () => {
    return (
        <div className='bg-white h-full rounded-lg p-10 space-y-10'>
            <div className='bg-gradient-to-r from-[#1eabe7e3] to-cyan-300 rounded-xl space-y-10 p-10'>
                <RiMastercardFill className='h-10 w-10 text-yellow-400' />
                <h3 className='text-4xl text-white text-justify w-full'>5235 ****  **** 6288</h3>
                <div className='flex items-center justify-between'>
                    <span className='text-sm opacity-95 text-white'>EXP 03/19</span>
                    <span className='text-sm opacity-95 text-white'>CVV 811</span>
                </div>
            </div>
            <div className='space-y-4'>
                <div className='flex items-center justify-between'>
                    <p className='text-lg font-medium opacity-25 truncate'>
                        Balance
                    </p>
                    <span className='text-2xl font-medium opacity-70'>
                        $8.939
                    </span>
                </div>
                <div className='flex items-center justify-between'>
                    <p className='text-lg font-medium opacity-25 truncate'>
                        Credit limit
                    </p>
                    <span className='text-base font-medium opacity-70'>
                        $20,000
                    </span>
                </div>
                <div className='flex items-center justify-between'>
                    <p className='text-lg font-medium opacity-25 truncate'>
                        Used
                    </p>
                    <span className='text-base font-medium opacity-70'>
                        $1,250
                    </span>
                </div>
            </div>
            <div className='space-y-4 divide-y-[1px]'>
                <div className='flex items-center justify-between pt-2'>
                    <p className='text-lg text-[#1eabe7e3] font-extrabold truncate'>
                        Card info
                    </p>
                    <span className='font-medium opacity-25 flex items-center'>
                        More details <MdOutlineKeyboardArrowRight className='h-5 w-5' />
                    </span>
                </div>
                <div className='flex items-center justify-between pt-2'>
                    <p className='font-medium opacity-25 truncate'>
                        Status
                    </p>
                    <span className='font-medium opacity-70'>
                        Active
                    </span>
                </div>
                <div className='flex items-center justify-between pt-2'>
                    <p className='font-medium opacity-25 truncate'>
                        Type of card
                    </p>
                    <span className='font-medium opacity-70'>
                        MasterCard
                    </span>
                </div>
                <div className='flex items-center justify-between pt-2'>
                    <p className='font-medium opacity-25 truncate'>
                        Currency
                    </p>
                    <span className='font-medium opacity-70'>
                        USD
                    </span>
                </div>
            </div>
            <div className='space-x-6 text-right'>
                <button className='bg-gray-200 px-5 py-3 rounded-lg'>Block card</button>
                <button className='bg-cyan-500 px-5 py-3 rounded-lg text-white'>New transaction</button>
            </div>
        </div>
    )
}

export default RightDashboard