import RightDashboard from '../components/Transactions/RightDashboard'
import LeftDashboard from '../components/Transactions/LeftDashboard'

const Transactions = () => {
    return (
        <div className='h-full w-full space-y-8 pr-10 pl-10 lg:pl-0 bg-white' id='Invoice-Page'>
            <div className='grid grid-cols-1 lg:grid-cols-4 lg:gap-10 space-y-6 h-full'>
                <div className='lg:col-span-1 space-y-8 h-full lg:border-r-[1px] lg:p-6'>
                    <LeftDashboard />
                </div>

                <div className='lg:col-span-3 space-y-8 lg:p-6'>
                    <RightDashboard />
                </div>

            </div>
        </div>
    )
}

export default Transactions