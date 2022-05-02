import LeftDashboard from '../components/Dashboard/LeftDashboard'
import RightDashboard from '../components/Dashboard/RightDashboard'

const Dashboard = () => {
  return (
    <div className='h-full w-full pr-10 space-y-8'>
      <div className='grid grid-cols-1 lg:grid-cols-4 lg:gap-10'>
        <div className='lg:col-span-3 space-y-6'>
          <LeftDashboard />
        </div>

        <div className='lg:col-span-1 space-y-6'>
          <RightDashboard />
        </div>

      </div>
    </div>
  )
}

export default Dashboard