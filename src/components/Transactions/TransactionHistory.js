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
            <div className='md:flex items-center justify-between text-center md:text-left'>
                <h3 className='text-[20px] font-bold text-[#000000] md:text-opacity-50'>Transaction History</h3>
                <button onClick={toggleCreateTransaction} className='hidden md:flex items-center gap-2 bg-[#F3724F] px-[10px] py-[5px] rounded-[5px] text-white mx-auto md:mx-0'>
                    <span className='text-[15px] md:text-[20px] font-bold'>Create Transaction</span>
                    <Add variant='Bold' className='h-[18px] md:h-[28px' />
                </button>
            </div>
            {
                data?.transactions?.length > 0 ?
                    <div className='mt-[26px] bg-white'>
                        <div className='hidden md:block relative text-gray-400 focus-within:text-gray-400 w-full px-3 md:px-0' style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)' }}>
                            <span className='absolute inset-y-0 md:left-5 flex items-center pl-2 md:pl-0'>
                                <SearchNormal1 className='h-4 w-4 text-black font-semibold opacity-50' />
                            </span>
                            <input className='w-full h-[50px] px-3 bg-white pl-8 md:pl-12 focus:outline-none focus:text-gray-900 placeholder:text-black placeholder:opacity-50 placeholder:font-semibold placeholder:text-base' placeholder='Search for Transaction' />
                        </div>

                        <div className='mt-[23px] divide-y divide-black divide-opacity-30 overflow-x-auto'>
                            {
                                data?.transactions?.map((item, index) => {
                                    const color = item.status === 'received' ? 'bg-[#318947] text-[#318947]' : item.status === 'debited' ? 'bg-[#E51F33] text-[#E51F33]' : 'bg-[#D07D1C] text-[#D07D1C]'
                                    const i = index > 3 ? index % 3 : index
                                    return (
                                        <div key={index} className='flex items-center justify-between py-[15px] px-5 md:pl-[20px] md:pr-[53px]'>
                                            <div className='flex items-center gap-[12px]'>
                                                <img src={`/images/avatar${i + 1}.png`} className='h-[40px] w-[40px] md:h-[50px] md:w-[50px] rounded-full' alt='vev' />
                                                <div>
                                                    <h4 className='md:font-semibold text-xs md:text-base text-black opacity-60 truncate'>{item.owner}</h4>
                                                    <h5 className='text-[8px] md:text-sm text-black opacity-60'>{dateFormatter(item.created_at)}</h5>
                                                </div>
                                            </div>
                                            <div className='md:w-1/2 md:flex items-center justify-between'>
                                                <div className={`items-center gap-2 hidden md:flex bg-opacity-30 ${color} rounded-[5px] py-[5px] px-[8px]`}>
                                                    <ArrowCircleUp2 variant='Bold' className={`rotate-${item.type === 'inbound' ? '[225deg]' : '45'}`} />
                                                    <span className='font-medium text-sm capitalize'>{item.status}</span>
                                                </div>
                                                <div>
                                                    <div className='md:font-semibold text-xs md:text-base text-black text-opacity-50 pl-2 md:pl-0'>${currencyFormatter(item.amount)}</div>
                                                    <div className={`font-medium text-[8px] ml-auto capitalize block md:hidden bg-opacity-30 ${color} rounded-[2px] w-fit p-1`}>{item.status}</div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div> : <div className='text-center mt-10 text-xl opacity-50'>You currently have no transactions</div>
            }
            {visible && <CreateTransaction visible={visible} onClose={toggleCreateTransaction} />}
        </div>
    )
}

export default TransactionHistory