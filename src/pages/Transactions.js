import Loading from '../components/General/Loading'
import { endpoints } from '../utils/helperVariables'
import { useFetcher } from '../hooks/fetcher'
import BeneficiariesCard from '../components/Transactions/BeneficiariesCard'
import TransactionHistory from '../components/Transactions/TransactionHistory'

const Transactions = () => {

    const { isLoading: pullTransactionsLoading } = useFetcher(endpoints.TRANSACTION_REPORTS)

    if (pullTransactionsLoading) return <Loading />

    return (
        <div className='md:px-[50px] md:py-[35px]'>
            <BeneficiariesCard />
            <TransactionHistory />
        </div>
    )
}

export default Transactions