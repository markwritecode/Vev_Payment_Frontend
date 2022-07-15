import RecentActivities from '../components/Dashboard/RecentActivities'
import SellOrder from '../components/Dashboard/SellOrder'
import TopCards from '../components/Dashboard/TopCards'
import Loading from '../components/General/Loading'
import { useFetcher } from '../hooks/fetcher'
import { endpoints } from '../utils/helperVariables'

const Dashboard = () => {

    const { isLoading } = useFetcher(endpoints.DASHBOARD_REPORT)

    if (isLoading) return <Loading />

    return (
        <div className='bg-white w-full space-y-8 pl-3 pt-3'>
            <div className='bg-[#E6E6E6] h-full p-10'>
                
            </div>
        </div>
    )
}

export default Dashboard