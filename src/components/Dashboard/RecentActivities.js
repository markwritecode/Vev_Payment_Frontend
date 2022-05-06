import { Empty } from 'antd'
import { BsArrowDownRight, BsArrowUpLeft } from 'react-icons/bs'
import { FiSend } from 'react-icons/fi'
import { RiUserReceived2Line } from 'react-icons/ri'
import { useFetcher } from '../../hooks/fetcher'
import { formatDate } from '../../utils/helperFunctions'
import { endpoints } from '../../utils/helperVariables'

const RecentActivities = () => {

    const { data } = useFetcher(endpoints.DASHBOARD_REPORT)
    const activities = data?.activities

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
                            activities?.map(activity => {
                                return (
                                    <tr key={activity[0].id}>
                                        <td className='font-normal text-gray-500 text-left p-4'>
                                            {activity[0].action === 'send' ? <FiSend className='h-5 w-5 text-red-600' /> : <RiUserReceived2Line className='h-5 w-5 text-green-600' />}
                                        </td>
                                        <td className='font-normal text-gray-500 text-left p-4'>
                                            {activity[0].owner}
                                        </td>
                                        <td className='font-normal text-gray-500 text-left p-4'>
                                            {formatDate(activity[0].created_at)}
                                        </td>
                                        {/* <td className='font-normal text-gray-500 text-left p-4'>
                                            {activity.change}
                                        </td> */}
                                        <td className='font-normal text-gray-500 text-left p-4 capitalize'>
                                            {activity[0].status}
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        {activities?.length < 1 && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default RecentActivities