import Summary from './Summary'
import TopDashboard from './TopDashboard'

const LeftDashboard = () => {
    return (
        <div className='h-full bg-white'>
            <TopDashboard />
            <Summary />
        </div>
    )
}

export default LeftDashboard