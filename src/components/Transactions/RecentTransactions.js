import { GoSettings } from 'react-icons/go'
import IndividualTransactions from './IndividualTransactions'
import { useFetcher } from '../../hooks/fetcher'
import { Empty } from 'antd'
import { endpoints } from '../../utils/helperVariables'
import { BiSearch } from 'react-icons/bi'

const RecentTransactions = () => {

    const { data: pulledTransactions } = useFetcher(endpoints.TRANSACTION_REPORTS)
    const transactions = pulledTransactions?.transaction
    const user = pulledTransactions?.user

    return (
        <div className='w-full space-y-10'>
            <div className='flex justify-between items-center'>
                <h3 className='text-xl font-semibold'>Transaction</h3>
                <GoSettings className='w-6 h-6 rotate-90' />
            </div>
            <div className='relative text-gray-600 focus-within:text-gray-400'>
                <input
                    // onChange={handleSearch}
                    type='search'
                    className='w-full py-4 text-white rounded-full border-2 border-gray-300 pl-6 focus:outline-none focus:text-gray-900'
                    placeholder='Search Anything...'
                />
                <span className='absolute inset-y-0 right-5 flex items-center'>
                    <button className='p-1 focus:outline-none focus:shadow-outline'>
                        <BiSearch className='h-6 w-6' />
                    </button>
                </span>
            </div>
            <div className='space-y-4 h-72 overflow-y-scroll'>
                <ul>
                    {transactions?.map(transaction => {
                        return (
                            <IndividualTransactions key={transaction.updated_at} user={user} transaction={transaction} />
                        )
                    })}
                </ul>
                {transactions?.length < 1 && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
            </div>

        </div>
    )
}

export default RecentTransactions