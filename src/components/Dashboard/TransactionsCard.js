import { ArrowDown3, ArrowUp3 } from 'iconsax-react'
import { useFetcher } from '../../hooks/fetcher'
import { currencyFormatter } from '../../utils/helperFunctions'
import { endpoints } from '../../utils/helperVariables'

const TransactionsCard = () => {

    const { data } = useFetcher(endpoints.DASHBOARD_REPORT)

    const list = data?.transactions

    return (
        <div className='bg-white rounded-lg p-8 w-full'>
            <h4 className='font-medium text-lg lg:text-[28px]'>Transactions</h4>
            <div className='mt-8 space-y-5 max-h-[20rem] overflow-y-auto'>
                {
                    list?.length > 0 ? list?.map((item, index) => {
                        const i = index > 3 ? index % 3 : index
                        return (
                            <div key={index} className='flex items-start justify-between'>
                                <div className='flex items-start gap-4'>
                                    <img className='h-20' src={`/images/avatar${i + 1}.png`} alt='vev' />
                                    <div>
                                        <p className='font-semibold text-sm lg:text-base'>{item.owner}</p>
                                        <p className='truncate'>{item.description}</p>
                                    </div>
                                </div>
                                <div className='items-center gap-2 hidden lg:flex'>
                                    {item.type === 'inbound' ? <ArrowDown3 variant='Bold' className='text-[#E51F33]' /> : <ArrowUp3 variant='Bold' className='text-[#36964E]' />}
                                    <p className='font-semibold text-base'>${currencyFormatter(item.amount)}</p>
                                </div>
                            </div>
                        )
                    }) : 'You currently have no transactions'
                }
            </div>
        </div>
    )
}

export default TransactionsCard