import { BiBell, BiSearch } from 'react-icons/bi'
import { MdBarChart } from 'react-icons/md'
import Transactions from '../Transactions/Transactions'
import { useFetcher } from '../../hooks/fetcher'
import { endpoints } from '../../utils/helperVariables'

const RightDashboard = () => {

    const { data } = useFetcher(endpoints.PAYMENT_REPORT)

    return (
        <div className='pt-5 pr-5 pl-5 lg:pl-0'>
            {/* <div className='flex items-center justify-between'>
                <div>
                    <h4 className='text-sm font-medium'>Orizon Crypto</h4>
                    <h6 className='text-gray-500 text-xs'>Increase your profit</h6>
                </div>
                <div className='flex items-center gap-3'>
                    <div className='rounded-full bg-white p-2'>
                        <BiSearch className='w-5 h-5' />
                    </div>
                    <div className='rounded-full bg-white p-2'>
                        <BiBell className='w-5 h-5' />
                    </div>
                </div>
            </div> */}

            {/* <div>
                <div className='bg-gradient-to-r from-[#2b01d3] to-[#2425da] p-5 rounded-lg space-y-4 relative'>
                    <div className='flex items-center justify-between'>
                        <h3 className='text-white font-medium text-sm'>My Portfolio</h3>
                        <div className='border-[1px] rounded-sm'>
                            <MdBarChart className='text-white h-6 w-6' />
                        </div>
                    </div>
                    <div className='flex items-end justify-between pb-10'>
                        <h3 className='text-white font-bold text-3xl'>$ 34,010.00</h3>
                        <h6 className='text-white'>+2.5%</h6>
                    </div>
                    <div className='absolute -bottom-16 sm:-bottom-5 left-0 block sm:flex items-center text-center space-y-4 sm:space-y-0 gap-4 px-10 w-full'>
                        <div className='bg-white w-full p-3 mx-auto rounded-lg'>Deposit</div>
                        <div className='bg-white w-full p-3 mx-auto rounded-lg'>Withdraw</div>
                    </div>
                </div>
            </div> */}

            {/* <div className='mt-14'>
                <div className='flex items-center justify-between'>
                    <h4 className='font-semibold text-base'>Favorites</h4>
                    <h6 className='font-semibold text-xs text-blue-600'>See All</h6>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5'>
                    <div className='rounded-lg bg-white p-3'>
                        <div className='flex items-center gap-3'>
                            <div className='rounded-full p-2 bg-black'>
                                <GrBitcoin className='h-5 w-5 bg-black text-white' />
                            </div>
                            <div>
                                <h4 className='font-medium'>Binance</h4>
                                <h5 className='text-gray-500 text-xs'>BNB</h5>
                            </div>
                        </div>
                        <div className='flex items-center justify-between mt-20'>
                            <h4 className='font-semibold text-xs'>$20,788</h4>
                            <h5 className='text-green-500 text-xs'>+0.25%</h5>
                        </div>
                    </div>
                    <div className='rounded-lg bg-white p-3'>
                        <div className='flex items-center gap-3'>
                            <div className='rounded-full p-2 bg-black'>
                                <SiEthereum className='h-5 w-5 text-white' />
                            </div>
                            <div>
                                <h4 className='font-medium'>Binance</h4>
                                <h5 className='text-gray-500 text-xs'>BNB</h5>
                            </div>
                        </div>
                        <div className='flex items-center justify-between mt-20'>
                            <h4 className='font-semibold text-xs'>$20,788</h4>
                            <h5 className='text-green-500 text-xs'>+0.25%</h5>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <div className='mt-16'>
                <h4 className='font-medium text-base'>Live Prices</h4>
                <div className='mt-5'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-4'>
                            <div className='rounded-full p-2 bg-black'>
                                <BiHorizontalCenter className='h-7 w-7 text-white' />
                            </div>
                            <div>
                                <h4 className='font-medium'>Binance</h4>
                                <h5 className='text-gray-500 text-xs'>BNB</h5>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <div className='rounded-full p-2 bg-white'>
                                <BiHorizontalCenter className='h-7 w-7' />
                            </div>
                            <div>
                                <h4 className='font-semibold'>$18,788</h4>
                                <h5 className='text-green-500 text-xs'>+0.15%</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className='mt-14'>
                <Transactions payments={data?.transactions} title='Transactions' />
            </div>

        </div>
    )
}

export default RightDashboard