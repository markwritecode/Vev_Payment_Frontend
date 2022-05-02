import { BsArrowDownRight, BsArrowUpLeft } from 'react-icons/bs'

const RecentActivities = () => {

    const _recentActivities = [
        { icon: <div className='rounded-full p-2 bg-green-100 w-fit'><BsArrowUpLeft className='h-4 w-4' /></div>, name: 'Bitcoin', time: '10:42:23 AM', change: '+1545,00', status: 'Completed' },
        { icon: <div className='rounded-full p-2 bg-blue-100 w-fit'><BsArrowDownRight className='h-4 w-4' /></div>, name: 'Ethereum', time: '12:00:23 AM', change: '+1745,00', status: 'Completed' },
        { icon: <div className='rounded-full p-2 bg-red-100 w-fit'><BsArrowDownRight className='h-4 w-4' /></div>, name: 'Binance', time: '10:42:23 AM', change: '+255,00', status: 'Completed' }
    ]

    return (
        <div className='space-y-6'>
            <h3 className='font-medium text-base'>Recent Activities</h3>
            <div className='block w-full overflow-x-auto'>
                <table className='items-center bg-transparent w-full border-collapse opacity-70'>
                    <tbody>
                        {
                            _recentActivities?.map(activity => {
                                return (
                                    <tr key={activity.name}>
                                        <td className='font-normal text-gray-500 text-left p-4'>
                                            {activity.icon}
                                        </td>
                                        <td className='font-normal text-gray-500 text-left p-4'>
                                            {activity.name}
                                        </td>
                                        <td className='font-normal text-gray-500 text-left p-4'>
                                            {activity.time}
                                        </td>
                                        <td className='font-normal text-gray-500 text-left p-4'>
                                            {activity.change}
                                        </td>
                                        <td className='font-normal text-gray-500 text-left p-4'>
                                            {activity.status}
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

export default RecentActivities