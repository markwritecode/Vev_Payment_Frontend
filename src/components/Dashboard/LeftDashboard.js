import Summary from './Summary'
import TopDashboard from './TopDashboard'

const LeftDashboard = () => {
    return (
        <div className='bg-white pt-10 px-5'>
            <TopDashboard />
            <Summary />
        </div>
    )
}

export default LeftDashboard