import LeftDashboard from '../components/Wallet/LeftDashboard'
import RightDashboard from '../components/Wallet/RightDashboard'
import { useFetcher } from '../hooks/fetcher'
import { endpoints } from '../utils/helperVariables'

const Dashboard = () => {

  const { isLoading } = useFetcher(endpoints.PAYMENT_REPORT)

  if (isLoading) return 'Loading...'

  return (
    <div className='w-full overflow-auto'>
      <div className='grid grid-cols-1 lg:grid-cols-4 lg:gap-5'>
        <div className='lg:col-span-3'>
          <LeftDashboard />
        </div>

        <div className='lg:col-span-1'>
          <RightDashboard />
        </div>

      </div>
    </div>
  )
}

export default Dashboard