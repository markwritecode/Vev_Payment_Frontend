import { dummy_transac } from '../../utils/dummy'
import { GoSettings } from 'react-icons/go'

const Investment = () => {
    return (
        <div className='w-full space-y-10'>
            <div className='flex justify-between items-center mb-4'>
                <h3 className='text-xl font-semibold'>Transaction</h3>
                <GoSettings className='w-6 h-6 rotate-90' />
            </div>
            <div className='flow-root'>
                <ul>
                    {dummy_transac.map(item => {
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

export default Investment