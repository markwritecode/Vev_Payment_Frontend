import { AddSquare, Send2 } from 'iconsax-react'
import BeneficiaryCard from '../components/Dashboard/BeneficiaryCard'
import TransactionsCard from '../components/Dashboard/TransactionsCard'
import Loading from '../components/General/Loading'
import { useFetcher } from '../hooks/fetcher'
import { useFetchLocalStorageData } from '../hooks/utilities/useFetchLocalStorage'
import { currencyFormatter } from '../utils/helperFunctions'
import { endpoints } from '../utils/helperVariables'

const Dashboard = () => {

    const { isLoading } = useFetcher(endpoints.DASHBOARD_REPORT)
    const { user } = useFetchLocalStorageData()

    if (isLoading) return <Loading />

    return (
        <div className='space-y-4'>
            <h3 className='text-2xl font-bold'>Hello, {user?.first_name}</h3>
            <div className='bg-[#895CDF] rounded-lg p-8 text-white space-y-5'>
                <h5 className='text-white'>Account Balance</h5>
                <h6 className='text-white font-bold text-5xl'>${currencyFormatter(1000000)}</h6>
                <div className='flex items-center gap-8'>
                    <button className='bg-[#F3724F] flex items-center gap-2 px-5 py-3 rounded-lg'>
                        <AddSquare variant='Bold' />
                        <span>Add Money</span>
                    </button>
                    <button className='bg-[#F3724F] flex items-center gap-2 px-5 py-3 rounded-lg'>
                        <Send2 variant='Bold' />
                        <span>Withdraw</span>
                    </button>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-10'>
                <TransactionsCard />
                <BeneficiaryCard />
            </div>
        </div>
    )
}

export default Dashboard