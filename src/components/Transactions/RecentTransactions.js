import { GoSettings } from 'react-icons/go'
import IndividualTransactions from './IndividualTransactions'
import { useFetcher } from '../../hooks/fetcher'

const RecentTransactions = () => {

    const { data: pulledTransactions, isLoading: pullTransactionsLoading } = useFetcher('transaction/show')
    const transactions = pulledTransactions?.transaction

    if (pullTransactionsLoading) return 'Loading...'

    return (
        <div className='w-full space-y-10'>
            <div className='flex justify-between items-center mb-4'>
                <h3 className='text-xl font-semibold'>Transaction</h3>
                <GoSettings className='w-6 h-6 rotate-90' />
            </div>
            <div className='flow-root'>
                <ul>
                    {transactions?.map(transaction => {
                        return (
                            <IndividualTransactions key={transaction.updated_at} transaction={transaction} />
                        )
                    })}
                </ul>
            </div>

        </div>
    )
}

export default RecentTransactions