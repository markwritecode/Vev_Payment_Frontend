import { GoSettings } from 'react-icons/go'
import IndividualTransactions from './IndividualTransactions'
import { useFetcher } from '../../hooks/fetcher'
import { Empty } from 'antd'

const RecentTransactions = () => {

    const { data: pulledTransactions, isLoading: pullTransactionsLoading } = useFetcher('transaction/report')
    const transactions = pulledTransactions?.transaction
    const user = pulledTransactions?.user

    if (pullTransactionsLoading) return 'Loading...'

    return (
        <div className='w-full space-y-10'>
            <div className='flex justify-between items-center'>
                <h3 className='text-xl font-semibold'>Transaction</h3>
                <GoSettings className='w-6 h-6 rotate-90' />
            </div>
            <div className='space-y-4'>
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