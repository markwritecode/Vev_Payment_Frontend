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
        <div className='lg:space-y-4 lg:px-[50px] lg:py-[80px]'>
            <h3 className='text-[36px] font-bold hidden lg:block'>Hello, {user?.first_name}</h3>
            <div className='lg:rounded-lg px-5 py-12 lg:p-[25px] text-white space-y-3 lg:space-y-0' style={{ background: "url('/images/pattern.png') no-repeat right", backgroundColor: '#895CDF' }}>
                <h3 className='text-2xl text-white lg:hidden'>Hello, {user?.first_name}</h3>
                <h5 className='text-white text-[20px] font-light'>Account Balance</h5>
                <h6 className='text-white font-bold bg-[#D1C0F3] lg:bg-transparent w-fit p-4 lg:p-0 lg:pt-[10px] rounded-lg text-2xl lg:text-[44px]'>${currencyFormatter(1000000)}</h6>
                <div className='flex items-center gap-2 lg:gap-8 pt-6 lg:pt-[40px]'>
                    <button className='bg-[#F3724F] flex items-center gap-2 px-2 lg:px-5 py-2 lg:py-3 rounded-lg'>
                        <AddSquare variant='Bold' className='h-5' />
                        <span className='text-xs lg:text-base'>Add Money</span>
                    </button>
                    <button className='bg-[#F3724F] flex items-center gap-2 px-2 lg:px-5 py-2 lg:py-3 rounded-lg'>
                        <Send2 variant='Bold' className='h-5' />
                        <span className='text-xs lg:text-base'>Withdraw</span>
                    </button>
                </div>
            </div>
            <div className='overflow-scroll mt-5 sm:mt-0 px-5 sm:px-0'>
                <div className='flex items-center gap-5 w-[540px] sm:w-full'>
                    <TransactionsCard />
                    <BeneficiaryCard />
                </div>
            </div>
        </div>
    )
}

export default Dashboard