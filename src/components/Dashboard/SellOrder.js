import { Empty } from 'antd'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { useFetcher } from '../../hooks/fetcher'
import { currencyFormatter } from '../../utils/helperFunctions'
import { endpoints } from '../../utils/helperVariables'
import EmptyState from '../General/EmptyState'

const SellOrder = () => {

    const { data } = useFetcher(endpoints.DASHBOARD_REPORT)
    const transactions = data?.transaction

    const _recentActivities = [
        { price: '89.03', amount: '0.15', total: '$126,00' },
        { price: '94.02', amount: '0.18', total: '$126,00' },
        { price: '92.06', amount: '0.22', total: '$252,00' }
    ]

    return (
        <div className='bg-black rounded-3xl p-8'>
            <div className='flex items-start justify-between'>
                <h3 className='font-medium text-white text-base'>Transactions</h3>
                <BsThreeDotsVertical className='h-5 w-5 text-white' />
            </div>
            <div className='block w-full overflow-x-auto'>
                <table className='items-center bg-transparent w-full border-collapse'>
                    <thead>
                        <tr>
                            <th className='font-normal text-left text-white opacity-80 pt-8 pb-4 pr-4'>
                                Type
                            </th>
                            <th className='font-normal text-left text-white opacity-80 pt-8 p-4'>
                                Amount
                            </th>
                            <th className='font-normal text-left text-white opacity-80 pt-8 p-4'>
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            transactions?.map(transaction => {
                                return (
                                    <tr key={transaction.id}>
                                        <td className='font-normal text-white opacity-60 text-left py-4 pr-4 capitalize'>
                                            {transaction.type}
                                        </td>
                                        <td className='font-normal text-white opacity-60 text-left p-4'>
                                            {currencyFormatter(transaction.amount)}
                                        </td>
                                        <td className='font-normal text-white opacity-60 text-left p-4'>
                                            {transaction.status}
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>

                </table>
                {transactions?.length < 1 && <Empty image={<EmptyState color='white' />} description={''} />}
            </div>
        </div>
    )
}

export default SellOrder