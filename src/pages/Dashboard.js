import MarketOverview from '../components/Dashboard/MarketOverview'
import RecentActivities from '../components/Dashboard/RecentActivities'
import SellOrder from '../components/Dashboard/SellOrder'
import TopCards from '../components/Dashboard/TopCards'

const Wallet = () => {
    return (
        <div className='bg-white w-full space-y-8 p-10 overflow-auto'>
            <TopCards />
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div className='col-span-2 space-y-6'>
                    <MarketOverview />
                    <RecentActivities />
                </div>
                <div className='col-span-1'>
                    <SellOrder />
                </div>
            </div>
        </div>
    )
}

export default Wallet