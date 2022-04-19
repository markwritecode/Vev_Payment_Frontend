import { BsArrowDownLeft, BsArrowUpRight } from 'react-icons/bs'
import { dummy_dashboard2 } from '../../utils/dummy'

const TransactionsCard = () => {

  const handleChange = value =>console.log(`selected ${value}`)
  
  return (
    <div className='p-4 bg-white rounded-lg sm:p-8'>
      <div className='flex justify-between items-center mb-4'>
        <h3 className='text-xl font-bold leading-none text-[#1eabe7e3]'>Transactions</h3>
        <div className='flex items-center gap-3'>
          <span className='text-gray-400'>More</span>
          <select className='bg-gray-100 rounded-full px-2 py-1 text-gray-400 focus:outline-none' defaultValue='today' onChange={handleChange}>
            <option value='today'>Today</option>
          </select>
        </div>
      </div>
      <div className='flow-root'>
        <ul>
          {dummy_dashboard2.map(item => {
            return (
              <li className='py-3 sm:py-4' key={item.name}>
                <div className='flex items-center space-x-4'>
                  <div className='flex-shrink-0'>
                    <div className='bg-white rounded-lg shadow-lg p-3'>
                      {
                        item.status === 'danger' ? <BsArrowDownLeft className='h-5 w-5 text-red-500' /> : <BsArrowUpRight className='h-5 w-5 text-green-500' />
                      }
                    </div>
                  </div>
                  <div className='flex-1 min-w-0'>
                    <p className='text-sm font-medium text-gray-900 truncate'>{item.name}</p>
                    <p className='text-sm text-gray-400 truncate'>{item.time}</p>
                  </div>
                  <div className='inline-flex items-center text-base font-semibold text-gray-600'>{item.price}</div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default TransactionsCard