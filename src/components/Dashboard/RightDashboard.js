import { RiMastercardFill } from 'react-icons/ri'

const RightDashboard = () => {
    return (
        <div className='bg-white rounded-lg p-10 space-y-10'>
            <div className='bg-gradient-to-r from-[#1eabe7e3] to-cyan-300 rounded-xl space-y-10 p-10'>
                <RiMastercardFill className='h-10 w-10 text-yellow-400' />
                <h3 className='text-2xl text-white text-justify w-full'>5235 ****  **** 6288</h3>
                <div className='flex items-center justify-between'>
                    <span className='text-sm opacity-95 text-white'>EXP 03/19</span>
                    <span className='text-sm opacity-95 text-white'>CVV 811</span>
                </div>
            </div>
            <div className='space-y-4'>
                <div class='flex items-center justify-between'>
                    <p class='text-lg font-medium opacity-25 truncate'>
                        Balance
                    </p>
                    <span class='text-2xl font-medium opacity-70'>
                        $8.939
                    </span>
                </div>
                <div class='flex items-center justify-between'>
                    <p class='text-lg font-medium opacity-25 truncate'>
                        Credit limit
                    </p>
                    <span class='text-base font-medium opacity-70'>
                        $20,000
                    </span>
                </div>
                <div class='flex items-center justify-between'>
                    <p class='text-lg font-medium opacity-25 truncate'>
                        Used
                    </p>
                    <span class='text-base font-medium opacity-70'>
                        $1,250
                    </span>
                </div>
            </div>
            <div className='space-y-4 divide-y-[1px]'>
                <div class='flex items-center justify-between pt-2'>
                    <p class='text-lg text-[#1eabe7e3] font-extrabold truncate'>
                        Card info
                    </p>
                    <span class='font-medium opacity-25'>
                        {'More details >'}
                    </span>
                </div>
                <div class='flex items-center justify-between pt-2'>
                    <p class='font-medium opacity-25 truncate'>
                        Status
                    </p>
                    <span class='text-base font-medium opacity-70'>
                        Active
                    </span>
                </div>
                <div class='flex items-center justify-between pt-2'>
                    <p class='font-medium opacity-25 truncate'>
                        Type of card
                    </p>
                    <span class='text-base font-medium opacity-70'>
                        MasterCard
                    </span>
                </div>
                <div class='flex items-center justify-between pt-2'>
                    <p class='font-medium opacity-25 truncate'>
                        Currency
                    </p>
                    <span class='text-base font-medium opacity-70'>
                        USD
                    </span>
                </div>
            </div>
        </div>
    )
}

export default RightDashboard