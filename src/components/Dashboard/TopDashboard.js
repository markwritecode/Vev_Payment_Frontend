import { BiShoppingBag } from 'react-icons/bi'
import { FiGrid } from 'react-icons/fi'
import { HiOutlineTrendingDown, HiOutlineTrendingUp } from 'react-icons/hi'
import { RiVisaLine } from 'react-icons/ri'

const TopDashboard = () => {
    return (
        <div className='grid grid-cols-5 gap-6 items-center py-20'>
            <div className='space-y-20 col-span-1'>
                <div className='flex items-center gap-5'>
                    <div className='p-3 rounded-lg bg-green-200'>
                        <HiOutlineTrendingUp className='w-7 h-7' />
                    </div>
                    <div>
                        <h4 className='text-xs text-gray-400'>Total earnings</h4>
                        <h5 className='text-lg font-semibold'>$12,594.10</h5>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <div className='p-3 rounded-lg bg-amber-200'>
                        <FiGrid className='w-7 h-7' />
                    </div>
                    <div>
                        <h4 className='text-xs text-gray-400'>Goal for this month</h4>
                        <h5 className='text-lg font-semibold'>$16,196.80</h5>
                    </div>
                </div>
            </div>
            <div className='col-span-3 mx-auto w-3/5'>
                <div className='bg-gradient-to-r from-amber-500 to-amber-200 rounded-xl space-y-6 p-8'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <h4 className='text-xs'>Name Card</h4>
                            <h5 className='text-base font-medium'>AR Shakir</h5>
                        </div>
                        <RiVisaLine className='h-10 w-10' />
                    </div>
                    <h3 className='text-xl text-black'>**** ****  **** 1234</h3>
                    <div className='flex items-center gap-8'>
                        <div className='text-xs font-medium space-y-2'>
                            <h4 className='opacity-40'>EXP DATE</h4>
                            <h5>12/25</h5>
                        </div>
                        <div className='text-xs font-medium space-y-2'>
                            <h4 className='opacity-40'>CVV NUMBER</h4>
                            <h5>123</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className='space-y-20 col-span-1'>
                <div className='flex items-center gap-5'>
                    <div className='p-3 rounded-lg bg-red-200'>
                        <HiOutlineTrendingDown className='w-7 h-7' />
                    </div>
                    <div>
                        <h4 className='text-xs text-gray-400'>Total spendings</h4>
                        <h5 className='text-lg font-semibold'>$12,594.10</h5>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <div className='p-3 rounded-lg bg-blue-200'>
                        <BiShoppingBag className='w-7 h-7' />
                    </div>
                    <div>
                        <h4 className='text-xs text-gray-400'>Spending Goal</h4>
                        <h5 className='text-lg font-semibold'>$16,196.80</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopDashboard