import { BiBell, BiHorizontalCenter, BiSearch } from "react-icons/bi"
import { FaChartBar } from "react-icons/fa"

const RightDashboard = () => {
    return (
        <div className='h-full pt-5'>
            <div className='flex items-center justify-between'>
                <div>
                    <h4 className='text-lg font-medium'>Orizon Crypto</h4>
                    <h6 className='text-gray-500'>Increase your profit</h6>
                </div>
                <div className='flex items-center gap-4'>
                    <div className='rounded-full bg-white p-2'>
                        <BiSearch className='w-6 h-6' />
                    </div>
                    <div className='rounded-full bg-white p-2'>
                        <BiBell className='w-6 h-6' />
                    </div>
                </div>
            </div>

            <div className='mt-20'>
                <div className='bg-blue-600 p-5 rounded-lg space-y-4 relative'>
                    <div className='flex items-center justify-between'>
                        <h3 className='text-white font-medium text-base'>My Portfolio</h3>
                        <div className='border-[1px] rounded-lg p-1'>
                            <FaChartBar className='text-white h-5 w-5' />
                        </div>
                    </div>
                    <div className='flex items-end justify-between pb-10'>
                        <h3 className='text-white font-bold text-4xl'>$ 34,010.00</h3>
                        <h6 className='text-white'>+2.5%</h6>
                    </div>
                    <div className='absolute -bottom-5 left-0 flex items-center text-center gap-4 px-10 w-full'>
                        <div className='bg-white w-full p-3 mx-auto rounded-lg'>Deposit</div>
                        <div className='bg-white w-full p-3 mx-auto rounded-lg'>Withdraw</div>
                    </div>
                </div>
            </div>

            <div className='mt-16'>
                <div className='flex items-center justify-between'>
                    <h4 className='font-semibold text-base'>Favorites</h4>
                    <h6 className='font-semibold text-lg text-blue-600'>See All</h6>
                </div>
                <div className='grid grid-cols-2 gap-4 mt-10'>
                    <div className='rounded-lg bg-white p-5'>
                        <div className='flex items-center gap-4'>
                            <div className='rounded-full p-2 bg-black'>
                                <BiHorizontalCenter className='h-7 w-7 text-white' />
                            </div>
                            <div>
                                <h4 className='font-medium'>Binance</h4>
                                <h5 className='text-gray-500 text-xs'>BNB</h5>
                            </div>
                        </div>
                        <div className='flex items-center justify-between mt-20'>
                            <h4 className='font-semibold'>$20,788</h4>
                            <h5 className='text-green-500 text-xs'>+0.25%</h5>
                        </div>
                    </div>
                    <div className='rounded-lg bg-white p-5'>
                        <div className='flex items-center gap-4'>
                            <div className='rounded-full p-2 bg-black'>
                                <BiHorizontalCenter className='h-7 w-7 text-white' />
                            </div>
                            <div>
                                <h4 className='font-medium'>Binance</h4>
                                <h5 className='text-gray-500 text-xs'>BNB</h5>
                            </div>
                        </div>
                        <div className='flex items-center justify-between mt-20'>
                            <h4 className='font-semibold'>$20,788</h4>
                            <h5 className='text-green-500 text-xs'>+0.25%</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-16'>
                <h4 className='font-medium text-base'>Live Prices</h4>
                <div className='mt-10'>
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
            </div>
        </div>
    )
}

export default RightDashboard