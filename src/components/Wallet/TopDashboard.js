import { CgShoppingBag } from 'react-icons/cg'
import { IoIosTrendingDown, IoIosTrendingUp } from 'react-icons/io'
import { MdOutlineDashboard } from 'react-icons/md'
import { RiVisaLine } from 'react-icons/ri'

const TopDashboard = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-4 gap-6 items-center py-10'>
            <div className='space-y-20 col-span-1'>
                <div className='flex items-center gap-5'>
                    <div className='p-3 rounded-lg bg-[#9bcfa6]'>
                        <IoIosTrendingUp className='w-5 h-5 font-extralight' />
                    </div>
                    <div>
                        <h4 className='text-xs text-gray-400'>Total earnings</h4>
                        <h5 className='text-base font-medium'>$12,594.10</h5>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <div className='p-3 rounded-lg bg-[#f0f3de]'>
                        <MdOutlineDashboard className='w-5 h-5' />
                    </div>
                    <div>
                        <h4 className='text-xs text-gray-400'>Goal for this month</h4>
                        <h5 className='text-base font-medium'>$16,196.80</h5>
                    </div>
                </div>
            </div>
            <div className='col-span-2 mx-auto w-4/5'>
                <div className='bg-gradient-to-r from-[#f3ba60] to-[#f7cf6a] rounded-xl space-y-4 p-8'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <h4 className='text-xs'>Name Card</h4>
                            <h5 className='text-base font-medium'>AR Shakir</h5>
                        </div>
                        <RiVisaLine className='h-12 w-12' />
                    </div>
                    <h3 className='text-lg text-black font-semibold'>**** ****  **** 1234</h3>
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
                    <div className='p-3 rounded-lg bg-[#ffc993]'>
                        <IoIosTrendingDown className='w-5 h-5' />
                    </div>
                    <div>
                        <h4 className='text-xs text-gray-400'>Total spendings</h4>
                        <h5 className='text-base font-medium'>$12,594.10</h5>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <div className='p-3 rounded-lg bg-[#bbedff]'>
                        <CgShoppingBag className='w-5 h-5' />
                    </div>
                    <div>
                        <h4 className='text-xs text-gray-400'>Spending Goal</h4>
                        <h5 className='text-base font-medium'>$16,196.80</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopDashboard