import LeftDashboard from '../components/Dashboard/LeftDashboard'
import RightDashboard from '../components/Dashboard/RightDashboard'

const Dashboard = () => {
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