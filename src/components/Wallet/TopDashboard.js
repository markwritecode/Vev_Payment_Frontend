import { CgShoppingBag } from 'react-icons/cg'
import { IoIosTrendingDown, IoIosTrendingUp } from 'react-icons/io'
import { MdBarChart, MdOutlineDashboard } from 'react-icons/md'
import { useFetcher } from '../../hooks/fetcher'
import { currencyFormatter } from '../../utils/helperFunctions'
import { endpoints } from '../../utils/helperVariables'

const TopDashboard = () => {

    const { data } = useFetcher(endpoints.PAYMENT_REPORT)
    const paymentStatus = data?.payment_status

    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-6 items-center py-10'>
            <div className='space-y-8 sm:space-y-20 col-span-1'>
                <div className='flex items-center gap-5'>
                    <div className='p-3 rounded-lg bg-[#9bcfa6]'>
                        <IoIosTrendingUp className='w-5 h-5 font-extralight' />
                    </div>
                    <div>
                        <h4 className='text-gray-400'>Inbound Payments</h4>
                        <h5 className='text-base font-medium'>${currencyFormatter(paymentStatus?.inbound_payment)}</h5>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <div className='p-3 rounded-lg bg-[#f0f3de]'>
                        <MdOutlineDashboard className='w-5 h-5' />
                    </div>
                    <div>
                        <h4 className='text-gray-400'>Inbound Pending Payments</h4>
                        <h5 className='text-base font-medium'>${currencyFormatter(paymentStatus?.inbound_pending_payment)}</h5>
                    </div>
                </div>
            </div>
            <div className='col-span-2 mx-auto w-full md:w-4/5'>
                <div>
                    <div className='bg-gradient-to-r from-[#2b01d3] to-[#2425da] p-8 rounded-lg space-y-4 relative'>
                        <div className='flex items-center justify-between'>
                            <h3 className='text-white font-medium text-sm'>My Portfolio</h3>
                            <div className='border-[1px] rounded-sm'>
                                <MdBarChart className='text-white h-6 w-6' />
                            </div>
                        </div>
                        <div className='sm:flex items-end justify-between pb-10'>
                            <h3 className='text-white font-bold text-2xl lg:text-3xl'>$ 34,010.00</h3>
                            <h6 className='text-white'>+2.5%</h6>
                        </div>
                        <div className='sm:absolute -bottom-16 sm:-bottom-5 left-0 block sm:flex items-center text-center space-y-4 sm:space-y-0 gap-4 px-10 w-full'>
                            <div className='bg-white w-full p-3 mx-auto rounded-lg'>Deposit</div>
                            <div className='bg-white w-full p-3 mx-auto rounded-lg'>Withdraw</div>
                        </div>
                    </div>
                </div>
                {/* <div className='bg-gradient-to-r from-[#f3ba60] to-[#f7cf6a] rounded-xl space-y-4 p-8'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <h4 className='>Name Card</h4>
                            <h5 className='text-base font-medium'>AR Shakir</h5>
                        </div>
                        <RiVisaLine className='h-12 w-12' />
                    </div>
                    <h3 className='text-lg text-black font-semibold'>**** ****  **** 1234</h3>
                    <div className='flex items-center gap-8'>
                        <div className='font-medium space-y-2'>
                            <h4 className='opacity-40'>EXP DATE</h4>
                            <h5>12/25</h5>
                        </div>
                        <div className='font-medium space-y-2'>
                            <h4 className='opacity-40'>CVV NUMBER</h4>
                            <h5>123</h5>
                        </div>
                    </div>
                </div> */}
            </div>
            <div className='space-y-8 sm:space-y-20 col-span-1'>
                <div className='flex items-center gap-5'>
                    <div className='p-3 rounded-lg bg-[#ffc993]'>
                        <IoIosTrendingDown className='w-5 h-5' />
                    </div>
                    <div>
                        <h4 className='text-gray-400'>Outbound Payments</h4>
                        <h5 className='text-base font-medium'>${currencyFormatter(paymentStatus?.outbound_payment)}</h5>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <div className='p-3 rounded-lg bg-[#bbedff]'>
                        <CgShoppingBag className='w-5 h-5' />
                    </div>
                    <div>
                        <h4 className='text-gray-400'>Outbound Pending Payments</h4>
                        <h5 className='text-base font-medium'>${currencyFormatter(paymentStatus?.outbound_pending_payment)}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopDashboard