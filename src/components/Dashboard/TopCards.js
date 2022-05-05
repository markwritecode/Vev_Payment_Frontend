import { BiBitcoin } from 'react-icons/bi'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { FaEthereum } from 'react-icons/fa'
import { FiSettings } from 'react-icons/fi'
import { RiNetflixFill } from 'react-icons/ri'

const TopCards = () => {
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
                            <BiBitcoin className='w-10 h-10 text-white' />
                        </div>
                        <BsThreeDotsVertical className='h-5 w-5' />
                    </div>
                    <h4 className='text-4xl font-extrabold mt-6'>$1200</h4>
                    <h6 className='text-gray-500 mt-3'><span className='font-semibold'>45%</span> This week</h6>
                </div>

                <div className='bg-blue-50 rounded-3xl p-8'>
                    <div className='flex items-start justify-between'>
                        <div className='rounded-3xl p-3 bg-black'>
                            <FaEthereum className='w-10 h-10 text-white' />
                        </div>
                        <BsThreeDotsVertical className='h-5 w-5' />
                    </div>
                    <h4 className='text-4xl font-extrabold mt-6'>$232,40</h4>
                    <h6 className='text-gray-500 mt-3'><span className='font-semibold'>45%</span> This week</h6>
                </div>

                <div className='bg-red-50 rounded-3xl p-8'>
                    <div className='flex items-start justify-between'>
                        <div className='rounded-3xl p-3 bg-black'>
                            <RiNetflixFill className='w-10 h-10 text-white' />
                        </div>
                        <BsThreeDotsVertical className='h-5 w-5' />
                    </div>
                    <h4 className='text-4xl font-extrabold mt-6'>$600</h4>
                    <h6 className='text-gray-500 mt-3'><span className='font-semibold'>45%</span> This week</h6>
                </div>
            </div>
        </div>
    )
}

export default TopCards