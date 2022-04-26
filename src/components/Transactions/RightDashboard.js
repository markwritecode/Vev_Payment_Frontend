import { BiSearch } from 'react-icons/bi'
import { MdWifiTetheringErrorRounded } from 'react-icons/md'
import RecentTransactions from './RecentTransactions'
import Statistic from './Statistic'

// const data = [
//     { title: 'Live session booking', date: 'Jul 2, 2021', status: 'pending', initial: 'OP', price: '64.00', id: '64' },
//     { title: 'Metafy gift card', date: 'Jun 29, 2021', status: 'pending', initial: 'SL', price: '139.90', id: '59' },
//     { title: 'Training plan book', date: 'Aug 5, 2021', status: 'completed', initial: 'HG', price: '70.00', id: '47' },
//     { title: 'Metafy refund', date: 'Sep 8, 2019', status: 'pending', initial: 'ID', price: '365.10', id: '8' },
//     { title: 'Metafy credits', date: 'Jan 30, 2009', status: 'completed', initial: 'KE', price: '5.00', id: '1' },
//     { title: 'Live session booking', date: 'Feb 24, 2021', status: 'pending', initial: 'SR', price: '10.01', id: '16' },
//     { title: 'Metafy gift card', date: 'Mar 19, 2021', status: 'pending', initial: 'GP', price: '0.00', id: '34' },
//     { title: 'Training plan book', date: 'Nov 4, 2021', status: 'pending', initial: 'EW', price: '72.09', id: '51' },
//     { title: 'Metafy refund', date: 'Dec 8, 2021', status: 'completed', initial: 'QF', price: '823.43', id: '45' },
// ]

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
            {/* <h3 className='text-lg text-gray-700'>Transactions</h3>

            <div className='overflow-scroll h-[44rem] w-full space-y-3'>
                {
                    data.map(item => {
                        return (
                            <div key={item.id} className='grid grid-cols-1 lg:grid-cols-8 items-center bg-[#F9F9F9] gap-2 px-3 py-5 rounded-lg'>
                                <div className='flex items-center justify-between col-span-7'>
                                    <div className='flex items-center gap-6'>
                                        <Avatar shape='square' src={`https://i.pravatar.cc/600?img=${item.id}`} size={64}>{item.initial}</Avatar>
                                        <div className=''>
                                            <h3 className='font-medium text-lg text-gray-500'>{item.title}</h3>
                                            <h5 className='text-gray-400 font-medium'>{item.date}.</h5>
                                        </div>
                                    </div>
                                    <p className={`${item.status === 'pending' ? 'text-gray-400' : 'text-gray-600'}`}>
                                        {item.status === 'pending' ? '-' : '+'}${item.price}
                                    </p>
                                </div>
                                <div className='col-span-1 mr-auto lg:mx-auto'>
                                    <p className={`${item.status === 'pending' ? 'bg-yellow-50 text-yellow-400' : 'bg-green-50 text-green-400'} px-2 py-1 rounded-lg font-medium`}>
                                        {item.status}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div> */}
        </>
    )
}

export default RightDashboard