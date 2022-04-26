import { Chart as ChartJS, ArcElement } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { useFetcher } from '../../hooks/fetcher'
import { currencyFormatter } from '../../utils/helperFunctions'

ChartJS.register(ArcElement)

const Statistic = () => {

    const { data: pulledTransactions, isLoading: pullTransactionsLoading } = useFetcher('transaction/show')
    const transactions = pulledTransactions?.transaction

    if (pullTransactionsLoading) return 'Loading...'

    const outbound = transactions?.filter(item => item.type === 'outbound')?.reduce((curr, val) => {
        return curr + Number(val.amount)
    }, 0)

    const inbound = transactions?.filter(item => item.type === 'inbound')?.reduce((curr, val) => {
        return curr + Number(val.amount)
    }, 0)

    const pending = transactions?.filter(item => item.status === 'pending')?.reduce((curr, val) => {
        return curr + Number(val.amount)
    }, 0)

    const data = {
        datasets: [
            {
                data: [pending, inbound, outbound],
                backgroundColor: [
                    '#fac450',
                    '#030302',
                    '#B8D3ED',
                ]
            },
        ],
    };

    const options = {
        cutout: '80%'
    }

    return (
        <div className='w-full space-y-10 pb-6'>
            <div className='flex justify-between items-center mb-4'>
                <div>
                    <h3 className='text-xl font-semibold'>Transaction Statistic</h3>
                    <h6 className='opacity-40 font-medium text-xs'>24 Dec 2021 at 3:30 PM</h6>
                </div>
                <div className='px-3 py-2 font-medium bg-[#EAEBEC] rounded-lg'>
                    Show All
                </div>
            </div>
            <div className='space-y-4'>
                {/* <h4 className='text-base font-medium'>Funding</h4> */}
                <div className='lg:grid lg:grid-cols-2 lg:gap-20 space-y-4 w-full items-center'>
                    <div className='w-full'>
                        <Doughnut data={data} options={options} />
                    </div>
                    <div className='flex items-center gap-4 lg:block lg:space-y-6'>
                        <div className='flex items-center gap-4'>
                            <div className='h-3 w-3 bg-[#fac450] rounded-full'></div>
                            <div>
                                <h4 className='font-semibold text-base'>${currencyFormatter(pending)}</h4>
                                <h6 className='text-xs text-gray-400'>Pending</h6>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <div className='h-3 w-3 bg-[#030302] rounded-full'></div>
                            <div>
                                <h4 className='font-semibold text-base'>${currencyFormatter(inbound)}</h4>
                                <h6 className='text-xs text-gray-400'>Inbound</h6>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <div className='h-3 w-3 bg-[#B8D3ED] rounded-full'></div>
                            <div>
                                <h4 className='font-semibold text-base'>${currencyFormatter(outbound)}</h4>
                                <h6 className='text-xs text-gray-400'>Outbound</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Statistic