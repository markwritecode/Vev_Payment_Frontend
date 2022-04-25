import { IoIosArrowForward } from 'react-icons/io'
import { dummy_transac2 } from '../../utils/dummy'

const Transactions = () => {
    return (
        <div>
            <div className='flex items-center justify-between'>
                <h3 className='text-lg font-semibold'>Transactions</h3>
                <div className='flex items-center gap-1'>
                    <span className='opacity-50'>View all</span>
                    <IoIosArrowForward className='opacity-50' />
                </div>
            </div>
            <div className='flow-root'>
                <ul>
                    {dummy_transac2.map(item => {
                        return (
                            <li className='py-3 sm:py-6' key={item.name}>
                                <div className='flex items-center gap-6'>
                                    <div className='flex-shrink-0'>
                                        {item.icon}
                                    </div>
                                    <div className='flex-1 min-w-0'>
                                        <p className='text-base font-medium text-gray-900 truncate'>{item.name}</p>
                                        <p className='text-xs text-gray-400 truncate'>{item.subtitle}</p>
                                    </div>
                                    <div className='inline-flex items-center font-medium'>{item.price}</div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Transactions