import { BiWallet } from 'react-icons/bi'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { FaFileInvoice } from 'react-icons/fa'
import { FiSettings } from 'react-icons/fi'
import { GiMoneyStack } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { useFetcher } from '../../hooks/fetcher'
import { currencyFormatter } from '../../utils/helperFunctions'
import { endpoints } from '../../utils/helperVariables'

const TopCards = () => {

    const { data } = useFetcher(endpoints.DASHBOARD_REPORT)

    return (
        <div>
            <div className='flex items-center justify-between'>
                <h3 className='font-semibold text-2xl'>Dashboard</h3>
                <div className='rounded-lg px-3 py-2 flex items-center gap-3 border-[1px]'>
                    <span>Filters</span>
                    <FiSettings />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-8'>
                <div className='bg-green-50 rounded-3xl p-8'>
                    <div className='flex items-start justify-between'>
                        <div className='rounded-3xl p-3 bg-black'>
                            <GiMoneyStack className='w-10 h-10 text-white' />
                        </div>
                        <Link to='/transactions'><BsThreeDotsVertical className='h-5 w-5' /></Link>
                    </div>
                    <h4 className='text-4xl font-extrabold mt-6'>{currencyFormatter(data?.totalTransaction)}</h4>
                    <h6 className='text-gray-500 mt-3'><span className='font-semibold'>45%</span> Total Transaction</h6>
                </div>

                <div className='bg-blue-50 rounded-3xl p-8'>
                    <div className='flex items-start justify-between'>
                        <div className='rounded-3xl p-3 bg-black'>
                            <BiWallet className='w-10 h-10 text-white' />
                        </div>
                        <Link to='/wallet'><BsThreeDotsVertical className='h-5 w-5' /></Link>
                    </div>
                    <h4 className='text-4xl font-extrabold mt-6'>{currencyFormatter(data?.totalPayment)}</h4>
                    <h6 className='text-gray-500 mt-3'><span className='font-semibold'>45%</span> Total Payment</h6>
                </div>

                <div className='bg-red-50 rounded-3xl p-8'>
                    <div className='flex items-start justify-between'>
                        <div className='rounded-3xl p-3 bg-black'>
                            <FaFileInvoice className='w-10 h-10 text-white' />
                        </div>
                        <Link to='/invoice'><BsThreeDotsVertical className='h-5 w-5' /></Link>
                    </div>
                    <h4 className='text-4xl font-extrabold mt-6'>{currencyFormatter(data?.totalInvoice)}</h4>
                    <h6 className='text-gray-500 mt-3'><span className='font-semibold'>45%</span> Total Invoice</h6>
                </div>
            </div>
        </div>
    )
}

export default TopCards