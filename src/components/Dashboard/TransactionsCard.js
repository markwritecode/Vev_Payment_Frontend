import { ArrowDown3, ArrowUp3 } from 'iconsax-react'

const TransactionsCard = () => {

    const data = [
        { name: 'Halari Jackson T', action: 'Receipts of funds', amount: '250.00', type: 'decrease' },
        { name: 'Emmanuella Buzz', action: 'Receipts of funds', amount: '150.00', type: 'increase' },
        { name: 'Babalola Joshua', action: 'Receipts of funds', amount: '250.00', type: 'decrease' },
        { name: 'Bosslady Clothings', action: 'Receipts of funds', amount: '130.00', type: 'increase' }
    ]

    return (
        <div className='bg-white rounded-lg p-8'>
            <h4 className='font-bold text-2xl'>Transactions</h4>
            <div className='mt-8 space-y-5 max-h-[20rem] overflow-y-auto'>
                {
                    data.map((item, index) => {
                        return (
                            <div key={index} className='flex items-start justify-between'>
                                <div className='flex items-start gap-4'>
                                    <img className='h-20' src={`/images/avatar${index + 1}.png`} alt='vev' />
                                    <div>
                                        <p className='font-semibold text-base'>{item.name}</p>
                                        <p>{item.action}</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-2'>
                                    {item.type === 'decrease' ? <ArrowDown3 variant='Bold' className='text-[#E51F33]' /> : <ArrowUp3 variant='Bold' className='text-[#36964E]' />}
                                    <p className='font-semibold text-base'>${item.amount}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TransactionsCard