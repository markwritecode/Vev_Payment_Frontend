import { useState } from 'react'
import TransactionDetails from './TransactionDetails'

const IndividualTransactions = ({ transaction }) => {

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
                    {transaction.icon}
                </div>
                <div className='flex-1 min-w-0'>
                    <p className='text-base font-medium text-gray-900 truncate'>{transaction.name}</p>
                    <p className='text-xs text-gray-400 truncate'>{transaction.subtitle}</p>
                </div>
                <div className='inline-flex items-center font-medium'>{transaction.price}</div>
            </div>
            {visible && <TransactionDetails visible={visible} transaction={transaction} closeTransactionDetails={closeTransactionDetails} />}
        </li>
    )
}

export default IndividualTransactions