import { Empty } from 'antd'
import { IoIosArrowForward } from 'react-icons/io'
import { IoPricetags } from 'react-icons/io5'
import { currencyFormatter } from '../../utils/helperFunctions'

const Transactions = ({ payments }) => {
    return (
        <div>
            <div className='flex items-center justify-between'>
                <h3 className='text-lg font-semibold'>Payments</h3>
                <div className='flex items-center gap-1'>
                    <span className='opacity-50'>View all</span>
                    <IoIosArrowForward className='opacity-50' />
                </div>
            </div>
            <div className='flow-root'>
                <ul>
                    {payments.map(item => {
                        return (
                            <li className='py-3 sm:py-6' key={item.id}>
                                <div className='flex items-center gap-6'>
                                    <div className='flex-shrink-0'>
                                        <IoPricetags className='h-7 w-7' />
                                    </div>
                                    <div className='flex-1 min-w-0'>
                                        <p className='text-base font-medium text-gray-900 truncate'>{item.owner}</p>
                                        <p className='text-xs text-gray-400 truncate'>{item.reference_number}</p>
                                    </div>
                                    <div className='inline-flex items-center font-medium'>${currencyFormatter(item.amount)}</div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
                {payments?.length < 1 && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
            </div>
        </div>
    )
}

export default Transactions