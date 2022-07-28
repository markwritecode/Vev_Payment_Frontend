import { Add, ArrowCircleUp2, ArrowRotateLeft, SearchNormal1 } from 'iconsax-react'

const TransactionHistory = () => {

    const list = [
        { name: 'Jasonpeters@gmail.com', date: '20 May 2020', status: 'received', amount: '500.99' },
        { name: 'Jasonpeters@gmail.com', date: '20 May 2020', status: 'debited', amount: '500.99' },
        { name: 'Jasonpeters@gmail.com', date: '20 May 2020', status: 'received', amount: '500.99' },
        { name: 'Jasonpeters@gmail.com', date: '20 May 2020', status: 'pending', amount: '500.99' }
    ]

    return (
        <div className='mt-[22px]'>
            <div className='flex items-center justify-between'>
                <h3 className='text-[20px] font-bold text-[#000000] text-opacity-50'>Transaction History</h3>
                <button className='flex items-center gap-2 bg-[#F3724F] px-[10px] py-[5px] rounded-[5px] text-white'>
                    <span className='text-[20px] font-bold'>Create Transaction</span>
                    <Add variant='Bold' size='28' />
                </button>
            </div>
            <div className='mt-[26px] bg-white pt-[22px]'>
                <div
                    className='relative text-gray-400 focus-within:text-gray-400 w-96 mx-auto'
                    style={{ filter: 'drop-shadow(0px -4px 10px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25))' }}>
                    <span className='absolute inset-y-0 md:left-5 flex items-center'>
                        <SearchNormal1 className='h-4 w-4' />
                    </span>
                    <input className='w-full h-[38px] px-3 bg-white rounded-md pl-8 md:pl-12 focus:outline-none focus:text-gray-900' placeholder='Search for beneficiary' />
                </div>

                <div className='mt-[23px] divide-y divide-black divide-opacity-30'>
                    {
                        list.map((item, index) => {
                            return (
                                <div key={index} className='flex items-center justify-between py-[15px] pl-[20px] pr-[53px]'>
                                    <div className='flex items-center gap-[12px]'>
                                        <img src={`/images/avatar${index + 1}.png`} className='h-[50px] w-[50px] rounded-full' alt='vev' />
                                        <div>
                                            <h4 className='font-semibold text-base text-black opacity-60'>{item.name}</h4>
                                            <h5 className='text-sm text-black opacity-60'>{item.date}</h5>
                                        </div>
                                    </div>
                                    <div>
                                        {item.status === 'received' &&
                                            <div className='flex items-center gap-2 bg-[#318947] bg-opacity-30 text-[#307641] rounded-[5px] py-[5px] px-[8px]'>
                                                <ArrowCircleUp2 variant='Bold' className=' rotate-45' />
                                                <span className='font-medium text-sm'>Received</span>
                                            </div>
                                        }
                                        {item.status === 'debited' &&
                                            <div className='flex items-center gap-2 bg-[#E51F33] bg-opacity-30 text-[#D01C2E] rounded-[5px] py-[5px] px-[8px]'>
                                                <ArrowCircleUp2 variant='Bold' className='rotate-[225deg]' />
                                                <span className='font-medium text-sm'>Debited</span>
                                            </div>
                                        }
                                        {item.status === 'pending' &&
                                            <div className='flex items-center gap-2 bg-[#D07D1C] bg-opacity-30 text-[#D07D1C] rounded-[5px] py-[5px] px-[8px]'>
                                                <ArrowRotateLeft variant='Bold' />
                                                <span className='font-medium text-sm'>Pending</span>
                                            </div>
                                        }
                                    </div>
                                    <div className='font-semibold text-base text-black text-opacity-50'>${item.amount}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default TransactionHistory