import { AiOutlineTransaction } from 'react-icons/ai'
import { RiMastercardFill } from 'react-icons/ri'
import { useFetcher } from '../../hooks/fetcher'
import { currencyFormatter } from '../../utils/helperFunctions'
import { endpoints } from '../../utils/helperVariables'
import Transactions from './Transactions'

const LeftDashboard = () => {

    const { data: pulledTransactions } = useFetcher(endpoints.TRANSACTION_REPORTS)
    const payments = pulledTransactions?.payments

    const confirmed = payments?.filter(item => item.status === 'confirmed')?.reduce((curr, val) => {
        return curr + Number(val.amount)
    }, 0)

    const pending = payments?.filter(item => item.status === 'pending')?.reduce((curr, val) => {
        return curr + Number(val.amount)
    }, 0)

    return (
        <div className='space-y-8'>
            <div>
                <h3 className='text-lg font-semibold pb-20'>Transaction Report</h3>
            </div>
            <div>
                <div className='flex flex-col'>
                    <div className='bg-[#B8D3ED] bg-opacity-10 p-5 rounded-t-2xl h-20 relative'>
                        <div className='h-36 bg-[#DECDAE] bg-opacity-30 absolute bottom-3 left-3 w-11/12 rounded-2xl p-6'>
                            <div className='space-y-1'>
                                <h5 className='text-[0.6rem] font-semibold text-gray-500'>Pending payments</h5>
                                <h3 className='text-xl font-medium'>${currencyFormatter(pending)}</h3>
                            </div>
                            <div className='mt-4 blur-sm opacity-80'>
                                <RiMastercardFill className='w-7 h-7 text-yellow-400' />
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center bg-[#B8D3ED] bg-opacity-30 p-5 rounded-b-2xl justify-between h-28'>
                        <div>
                            <h5 className='text-xs text-gray-500 font-medium'>Confirmed payments</h5>
                            <h3 className='text-lg font-semibold'>${currencyFormatter(confirmed)}</h3>
                        </div>
                        <AiOutlineTransaction className='w-6 h-6' />
                    </div>
                </div>
            </div>
            <Transactions payments={payments} />
        </div>
    )
}

export default LeftDashboard