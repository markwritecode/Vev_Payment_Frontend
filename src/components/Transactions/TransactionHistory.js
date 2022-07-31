import { Add, ArrowCircleUp2, SearchNormal1 } from 'iconsax-react'
import { useState } from 'react'
import { useFetcher } from '../../hooks/fetcher'
import { currencyFormatter, dateFormatter } from '../../utils/helperFunctions'
import { endpoints } from '../../utils/helperVariables'
import CreateTransaction from './CreateTransaction'

const TransactionHistory = () => {

    const { data } = useFetcher(endpoints.TRANSACTION_REPORTS)

    const [visible, setVisible] = useState(false)

    const toggleCreateTransaction = () => setVisible(prev => !prev)

    return (
        <div className='mt-[22px]'>
            <div className='flex items-center justify-between'>
                <h3 className='text-[20px] font-bold text-[#000000] text-opacity-50'>Transaction History</h3>
                <button onClick={toggleCreateTransaction} className='flex items-center gap-2 bg-[#F3724F] px-[10px] py-[5px] rounded-[5px] text-white'>
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
                        data?.transactions?.map((item, index) => {
                            const color = item.status === 'received' ? 'bg-[#318947] text-[#318947]' : item.status === 'debited' ? 'bg-[#E51F33] text-[#E51F33]' : 'bg-[#D07D1C] text-[#D07D1C]'
                            return (
                                <div key={index} className='flex items-center justify-between py-[15px] pl-[20px] pr-[53px]'>
                                    <div className='flex items-center gap-[12px]'>
                                        <img src={`/images/avatar${index + 1}.png`} className='h-[50px] w-[50px] rounded-full' alt='vev' />
                                        <div>
                                            <h4 className='font-semibold text-base text-black opacity-60'>{item.owner}</h4>
                                            <h5 className='text-sm text-black opacity-60'>{dateFormatter(item.created_at)}</h5>
                                        </div>
                                    </div>
                                    <div className={`items-center gap-2 hidden sm:flex bg-opacity-30 ${color} rounded-[5px] py-[5px] px-[8px]`}>
                                        <ArrowCircleUp2 variant='Bold' className={`rotate-${item.type === 'inbound' ? '[225deg]' : '45'}`} />
                                        <span className='font-medium text-sm capitalize'>{item.status}</span>
                                    </div>
                                    <div className='font-semibold text-base text-black text-opacity-50'>${currencyFormatter(item.amount)}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {visible && <CreateTransaction visible={visible} onClose={toggleCreateTransaction} />}
        </div>
    )
}

export default TransactionHistory