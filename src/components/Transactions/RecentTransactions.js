import { dummy_transac } from '../../utils/dummy'
import { GoSettings } from 'react-icons/go'
import IndividualTransactions from './IndividualTransactions'

const RecentTransactions = () => {

    return (
        <div className='w-full space-y-10'>
            <div className='flex justify-between items-center mb-4'>
                <h3 className='text-xl font-semibold'>Transaction</h3>
                <GoSettings className='w-6 h-6 rotate-90' />
            </div>
            <div className='flow-root'>
                <ul>
                    {dummy_transac.map(transaction => {
                        return (
                           <IndividualTransactions key={transaction.name} transaction={transaction} />
                        )
                    })}
                </ul>
            </div>
            
        </div>
    )
}

export default RecentTransactions