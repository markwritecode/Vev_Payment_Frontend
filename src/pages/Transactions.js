import Loading from '../components/General/Loading'
import { endpoints } from '../utils/helperVariables'
import { useFetcher } from '../hooks/fetcher'
import BeneficiariesCard from '../components/Transactions/BeneficiariesCard'
import TransactionHistory from '../components/Transactions/TransactionHistory'

const Transactions = () => {

    const { data, isLoading: pullTransactionsLoading } = useFetcher(endpoints.TRANSACTION_REPORTS)

    if (pullTransactionsLoading) return <Loading />
    console.log(data)

    return (
        <div>
            <div className='h-[75px] bg-[#E6E6E6]' style={{ boxShadow: '0px 4px 9px rgba(0, 0, 0, 0.25)' }}></div>
            <div className='px-[50px] py-[35px]'>
                <BeneficiariesCard />
                <TransactionHistory />
            </div>
        </div>
    )
}

export default Transactions