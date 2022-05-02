import { BsThreeDotsVertical } from 'react-icons/bs'

const SellOrder = () => {

    const _recentActivities = [
        { price: '89.03', amount: '0.15', total: '$126,00' },
        { price: '94.02', amount: '0.18', total: '$126,00' },
        { price: '92.06', amount: '0.22', total: '$252,00' }
    ]

    return (
        <div className='bg-black rounded-3xl p-8'>
            <div className='flex items-start justify-between'>
                <h3 className='font-medium text-white text-base'>Sell Order</h3>
                <BsThreeDotsVertical className='h-5 w-5 text-white' />
            </div>
            <div className='block w-full overflow-x-auto'>
                <table className='items-center bg-transparent w-full border-collapse'>
                    <thead>
                        <tr>
                            <th className='font-normal text-left text-white opacity-80 pt-8 pb-4 pr-4'>
                                Price
                            </th>
                            <th className='font-normal text-left text-white opacity-80 pt-8 p-4'>
                                Amount
                            </th>
                            <th className='font-normal text-left text-white opacity-80 pt-8 p-4'>
                                Total
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            _recentActivities?.map(activity => {
                                return (
                                    <tr key={activity.price}>
                                        <td className='font-normal text-white opacity-60 text-left py-4 pr-4'>
                                            {activity.price}
                                        </td>
                                        <td className='font-normal text-white opacity-60 text-left p-4'>
                                            {activity.amount}
                                        </td>
                                        <td className='font-normal text-white opacity-60 text-left p-4'>
                                            {activity.total}
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default SellOrder