import { BsCheck2Circle } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { useFetcher } from '../../hooks/fetcher'
import { currencyFormatter } from '../../utils/helperFunctions'
import { endpoints } from '../../utils/helperVariables'

const CheckoutSuccess = ({ ref_id }) => {

    const navigate = useNavigate()

    const { data } = useFetcher(`${endpoints.TRANSACTION_SHOW}/${ref_id}`)

    const transaction = data?.transaction

    return (
        <div className='w-full h-full bg-[#E6E6E6] lg:flex lg:items-center'>
            <div className='grid grid-cols-2 lg:grid-cols-3 w-full sm:w-3/4 mx-auto gap-20'>
                <div className='col-span-2 mt-20'>
                    <div className='bg-white rounded-xl text-center py-20 px-10'>
                        <div className='border-b-4 border-dashed pb-5'>
                            <BsCheck2Circle className='h-24 w-24 text-green-700 mx-auto' />
                            <h4 className='text-green-700 text-center text-4xl font-semibold mt-2'>Payment Successful!</h4>
                            <h5 className='text-lg mt-3 text-gray-500 font-medium'>Transaction Number: {ref_id}</h5>
                        </div>
                        <div>
                            <div className='flex items-center justify-between pt-5'>
                                <h4 className='font-semibold text-lg text-gray-600 opacity-50'>Amount Paid:</h4>
                                <p className='font-semibold text-gray-600 opacity-50 text-lg'>₦{currencyFormatter(transaction?.amount)}</p>
                            </div>
                        </div>
                        <div>
                            <button onClick={() => navigate('/transactions/transactions')} className='bg-[#F3724F] rounded text-white py-2 font-medium px-10 mt-5'>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
                <div className='hidden lg:block col-span-1 m-auto'>
                    <img src='/images/success.svg' className='m-auto' alt='vev' />
                </div>
            </div>
        </div>
    )
}

export default CheckoutSuccess