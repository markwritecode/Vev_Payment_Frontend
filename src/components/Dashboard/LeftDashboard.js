import ActivtySummary from './ActivitySummary'
import History from './History'
import Summary from './Summary'
import TopDashboard from './TopDashboard'

const LeftDashboard = () => {
    return (
        <div className='bg-white pt-5 px-5'>
            <TopDashboard />
            <Summary />
            <div className='grid grid-cols-4'>
                <div className='col-span-1 border-r-[1px] border-gray-300'>
                    <ActivtySummary />
                </div>
                <div className='col-span-3'>
                    <History />
                </div>
            </div>
        </div>
    )
}

export default LeftDashboard