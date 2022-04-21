import RightDashboard from '../components/Transactions/RightDashboard'
import LeftDashboard from '../components/Transactions/LeftDashboard'

const Transactions = () => {
    return (
        <div className='h-full w-full space-y-8 py-10' id='Invoice-Page'>
            <h3 className='text-2xl font-semibold'>My wallet</h3>
            <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-10'>
                <div className='lg:col-span-1 space-y-6'>
                    <LeftDashboard />
                </div>

                <div className='lg:col-span-2 bg-white rounded-lg p-10 space-y-6'>
                    <RightDashboard />
                </div>

            </div>
        </div>
    )
}

export default Transactions