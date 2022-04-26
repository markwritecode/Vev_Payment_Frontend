import { useState } from 'react'
import { BiMessageSquareDots } from 'react-icons/bi'
import { currencyFormatter } from '../../utils/helperFunctions'
import TransactionDetails from './TransactionDetails'

const IndividualTransactions = ({ transaction, user }) => {

    const [visible, setVisible] = useState(false)

    const openTransactionDetails = () => {
        setVisible(true)
    }

    const closeTransactionDetails = () => {
        setVisible(false)
    }

    return (
        <li className='py-3 sm:py-6 hover:opacity-30 cursor-pointer'>
            <div className='flex items-center gap-6' onClick={openTransactionDetails}>
                <div className='flex-shrink-0'>
                    <BiMessageSquareDots className='h-7 w-7 opacity-50' />
                </div>
                <div className='flex-1 min-w-0'>
                    <p className='text-base font-medium text-gray-900 truncate'>{transaction.owner}</p>
                    <p className='text-xs text-gray-400 truncate'>{transaction.reference_number}</p>
                </div>
                <div className='inline-flex items-center font-medium'>${currencyFormatter(transaction.amount)}</div>
            </div>
            {visible && <TransactionDetails visible={visible} user={user} transaction={transaction} closeTransactionDetails={closeTransactionDetails} />}
        </li>
    )
}

export default IndividualTransactions