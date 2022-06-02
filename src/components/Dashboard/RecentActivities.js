import { Empty } from 'antd'
import { FiSend } from 'react-icons/fi'
import { RiUserReceived2Line } from 'react-icons/ri'
import { useFetcher } from '../../hooks/fetcher'
import { formatDate } from '../../utils/helperFunctions'
import { endpoints } from '../../utils/helperVariables'
import EmptyState from '../General/EmptyState'

const RecentActivities = () => {

    const { data } = useFetcher(endpoints.DASHBOARD_REPORT)
    const activities = data?.activities

    return (
        <div className='space-y-6'>
            <h3 className='font-medium text-base'>Recent Activities</h3>
            <div className='block w-full overflow-x-auto'>
                <table className='items-center bg-transparent w-full border-collapse opacity-70'>
                    <tbody>
                        {
                            activities?.map((activity, index) => {
                                return (
                                    <tr key={index}>
                                        <td className='font-normal text-gray-500 text-left p-4'>
                                            {activity[0]?.action === 'send' ? <FiSend className='h-5 w-5 text-red-600' /> : <RiUserReceived2Line className='h-5 w-5 text-green-600' />}
                                        </td>
                                        <td className='font-normal text-gray-500 text-left p-4'>
                                            {activity[0]?.owner}
                                        </td>
                                        <td className='font-normal text-gray-500 text-left p-4'>
                                            {formatDate(activity[0]?.created_at)}
                                        </td>
                                        <td className='font-normal text-gray-500 text-left p-4 capitalize'>
                                            {activity[0]?.status}
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                {activities?.length < 1 && <Empty image={<EmptyState />} description={''} />}
            </div>
        </div>
    )
}

export default RecentActivities