import Loading from '../components/General/Loading'
import { endpoints } from '../utils/helperVariables'
import { useFetcher } from '../hooks/fetcher'
import BeneficiariesCard from '../components/Transactions/BeneficiariesCard'
import TransactionHistory from '../components/Transactions/TransactionHistory'
import { useLocation } from 'react-router-dom'
import Checkout from './Checkout'
import CheckoutSuccess from '../components/Transactions/CheckoutSuccess'
import { useState } from 'react'

const Transactions = () => {

    const { isLoading: pullTransactionsLoading } = useFetcher(endpoints.TRANSACTION_REPORTS)
    const [showSuccess, setShowSuccess] = useState(false)

    const location = useLocation()
    const pathname = location.pathname.split('/')
    const ref_id = pathname[pathname.length - 1]

    if (pullTransactionsLoading) return <Loading />

    return (
        <div>
            {
                ref_id === 'transactions' ?
                    <div className='md:px-[50px] md:py-[35px]'>
                        <BeneficiariesCard />
                        <TransactionHistory />
                    </div> : <CustomModal ref_id={ref_id} showSuccess={showSuccess} setShowSuccess={setShowSuccess} />
            }
        </div>
    )
}

export default Transactions

const CustomModal = ({ ref_id, showSuccess, setShowSuccess }) => {
    return (
        <div>
            <div className='md:px-[50px] md:py-[35px] blur-md'>
                <BeneficiariesCard />
                <TransactionHistory />
            </div>
            <div className={`fixed top-0 left-0 ${showSuccess ? 'z-50' : 'lg:left-16'} w-full`}>
                <div className='h-screen w-full flex lg:items-center justify-center'>
                    {
                        showSuccess ? <CheckoutSuccess ref_id={ref_id} /> : <Checkout ref_id={ref_id} setShowSuccess={setShowSuccess} />
                    }
                </div>
            </div>
        </div>
    )
}