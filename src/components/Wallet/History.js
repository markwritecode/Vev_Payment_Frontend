import { BiPlus } from 'react-icons/bi'
import { BsCreditCard } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'
import { GoPrimitiveDot } from 'react-icons/go'
import { GrTransaction } from 'react-icons/gr'
import { IoSearchOutline } from 'react-icons/io5'
import { MdAttachFile } from 'react-icons/md'
import { RiStore3Line } from 'react-icons/ri'
import { useFetcher } from '../../hooks/fetcher'
import { currencyFormatter } from '../../utils/helperFunctions'
import { endpoints } from '../../utils/helperVariables'

const _history = [
    { icon: <GrTransaction className='h-5 w-5' />, name: 'Office Supplies', type: 'Supplies', color: 'text-[#eb5642]', bg: 'bg-[#fdf5f3]', price: '-$10,100.00' },
    { icon: <RiStore3Line className='text-[#6e52e3] h-5 w-5' />, name: 'Park Transfer', type: 'Marketing', color: 'text-[#2b01d3]', bg: 'bg-[#f0faf4]', price: '-$50,400.00' },
    { icon: <BsCreditCard className='h-5 w-5' />, name: 'Target', type: 'Equipment', color: 'text-[#10a7b1]', bg: 'bg-[#f0faf4]', price: '-$10,100.00' }
]

const History = () => {

    const { data } = useFetcher(endpoints.PAYMENT_REPORT)

    return (
        <div className='px-5'>
            <div className='flex items-center justify-between gap-4'>
                <div className='flex items-center gap-10'>
                    <h4 className='text-[#6e52e3] border-b-2 border-[#6e52e3] pb-2'>Payments</h4>
                    {/* <h4 className='pb-2'>Upcoming</h4> */}
                </div>
                {/* <div className='flex items-center gap-3 pb-2'>
                    <div className='bg-gray-100 p-2 rounded-md'>
                        <FiSettings />
                    </div>
                    <div className='bg-[#2b01d3] p-2 rounded-md'>
                        <BiPlus className='text-white' />
                    </div>
                </div> */}
                <div className='relative text-gray-600 focus-within:text-gray-400 my-6 w-1/3'>
                    <input
                        // onChange={handleSearch}
                        type='search'
                        className='w-full py-2 text-white rounded-full border-[1.5px] border-gray-300 pl-6 focus:outline-none focus:text-gray-900'
                        placeholder='Search'
                    />
                    <span className='absolute inset-y-0 right-5 flex items-center'>
                        <button className='p-1 focus:outline-none focus:shadow-outline'>
                            <IoSearchOutline className='h-4 w-4' />
                        </button>
                    </span>
                </div>
            </div>

            {/* <h5 className='text-gray-400 text-xs font-medium'>13 Sep, 2020</h5> */}
            <div className='overflow-auto'>
                {
                    data?.payments.map(item => {
                        return <IndividualList key={item} item={item} />
                    })
                }
            </div>
        </div>
    )
}

export default History

const IndividualList = ({ item }) => {
    return (
        <div className='grid grid-cols-3 items-center mb-8 min-w-[40rem]'>
            <div className='flex items-center gap-4'>
                <RiStore3Line className='text-[#6e52e3] h-5 w-5' />
                <div>
                    <h4 className='text-sm font-medium'>{item.owner}</h4>
                    <h5 className='opacity-50 font-medium text-[0.6rem]'>10 Sep, 2020 at 3:30 PM</h5>
                </div>
            </div>

            <div className='flex items-center gap-2 mx-auto'>
                <div className={`bg-[#fdf5f3] p-1 rounded-sm`}>
                    <GoPrimitiveDot className={`h-3 w-3 text-[#eb5642]`} />
                </div>
                <h5 className='opacity-70 text-xs font-medium'>{item.type}</h5>
            </div>

            <div className='flex items-center gap-4 ml-auto'>
                {/* <div className='p-2 bg-gray-100 rounded-md'>
                    <MdAttachFile className='text-gray-400' />
                </div> */}
                <h4 className='font-bold text-xs'>${currencyFormatter(item.amount)}</h4>
            </div>
        </div>
    )
}