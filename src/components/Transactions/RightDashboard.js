import { BiSearch } from 'react-icons/bi'
import { MdWifiTetheringErrorRounded } from 'react-icons/md'
import RecentTransactions from './RecentTransactions'
import Statistic from './Statistic'

const RightDashboard = () => {
    return (
        <>
            <div className='w-full lg:w-1/3'>
                <div className='relative text-gray-600 focus-within:text-gray-400'>
                    <input
                        // onChange={handleSearch}
                        type='search'
                        className='w-full py-4 text-white rounded-full border-2 border-gray-300 pl-6 focus:outline-none focus:text-gray-900'
                        placeholder='Search Anything...'
                    />
                    <span className='absolute inset-y-0 right-5 flex items-center'>
                        <button className='p-1 focus:outline-none focus:shadow-outline'>
                            <BiSearch className='h-6 w-6' />
                        </button>
                    </span>
                </div>
            </div>

            <div className='flex items-center justify-between rounded-lg bg-opacity-50 bg-[#DECDAE] p-10'>
                <div className='space-y-6'>
                    <div className='flex items-center gap-2'>
                        <MdWifiTetheringErrorRounded className='h-6 w-6' />
                        <span className='font-medium'>Enabank</span>
                    </div>
                    <div className='space-y-3'>
                        <h3 className='text-4xl font-semibold'>Cachback up to 80%</h3>
                        <h6 className='opacity-50'>Upgrade to premium card and get 80% cashback</h6>
                    </div>
                    <button className='bg-black text-white rounded-md px-5 py-2'>Upgrade Now</button>
                </div>
                <div>
                    {/* <img src='https://i.pravatar.cc/600?img=3' className='w-full' /> */}
                </div>
            </div>

            <div className='rounded-lg lg:grid lg:grid-cols-2 lg:gap-16'>
                <RecentTransactions />
                <Statistic />
            </div>
        </>
    )
}

export default RightDashboard