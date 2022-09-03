import { Modal, notification } from 'antd'
import { ArrowRight } from 'iconsax-react'
import { useEffect, useState } from 'react'
import { FaWallet } from 'react-icons/fa'
import { IoWalletSharp } from 'react-icons/io5'
import { IoIosArrowBack } from 'react-icons/io'
import { useLocation, useNavigate } from 'react-router-dom'
import { useFetcher } from '../hooks/fetcher'
import { usePoster } from '../hooks/poster'
import { currencyFormatter, dateFormatter } from '../utils/helperFunctions'
import { endpoints } from '../utils/helperVariables'

const Checkout = ({ ref_id, setShowSuccess }) => {

    const [selectedPayment, setSelectedPayment] = useState('')
    const [step, setStep] = useState('transaction_details')

    const handlePaymentChange = value => setSelectedPayment(value)

    const nextStep = () => setStep('payment_info')

    const location = useLocation()

    useEffect(() => {
        localStorage.removeItem('ichor-checkout-ref')
    }, [location])

    return (
        <div className='bg-white rounded-[10px] pb-[30px] w-[370px] shadow-2xl'>
            {
                step === 'transaction_details' ?
                    <TransactionDetails
                        nextStep={nextStep}
                        selectedPayment={selectedPayment}
                        handlePaymentChange={handlePaymentChange}
                        ref_id={ref_id}
                    /> :
                    <PaymentInfo
                        selectedPayment={selectedPayment}
                        ref_id={ref_id}
                        setShowSuccess={setShowSuccess}
                    />
            }
        </div>
    )
}

export default Checkout

const TransactionDetails = ({ nextStep, selectedPayment, handlePaymentChange, ref_id }) => {

    const { data } = useFetcher(`${endpoints.TRANSACTION_SHOW}/${ref_id}`)

    const transaction = data?.transaction

    const menu = [
        { title: 'Details', value: transaction?.description },
        { title: 'Amount', value: `₦ ${currencyFormatter(transaction?.amount)}` },
        { title: 'Time', value: dateFormatter(transaction?.created_at) },
        { title: 'Email', value: transaction?.owner }
    ]

    const payments = [
        { value: 'vev_wallet', icon: <FaWallet className='w-12 h-12' /> },
        { value: 'debit_card', icon: <IoWalletSharp className='w-12 h-12' /> }
    ]

    return (
        <div className='w-full'>
            <div className='pt-[64px] px-[30px]'>
                <h4 className='font-bold text-xl'>Transactions Details</h4>
            </div>
            <hr className='border-opacity-30 border-black mt-[6px]' />
            <div className='px-[30px] pt-[23px] space-y-[23px]'>
                {
                    menu.map(item => {
                        return (
                            <div key={item.title} className='flex items-center gap-4 justify-between'>
                                <h4 className='uppercase font-semibold'>{item.title}:</h4>
                                <h5 className='truncate'>{item.value}</h5>
                            </div>
                        )
                    })
                }
            </div>
            <div className='px-[30px] pt-[23px] space-y-[23px]'>
                <div>
                    <h4 className='font-semibold text-xl text-gray-700'>Payment methods</h4>
                    <h5 className='text-gray-500 font-medium'>Choose a payment method to pay</h5>
                </div>
                <div className='space-y-4'>
                    {
                        payments.map(item => {
                            return (
                                <label key={item.value} className={`border-2 ${selectedPayment === item.value ? 'border-[#F3724F] border-opacity-50 bg-[#F3724F] bg-opacity-10' : 'border-gray-300 text-gray-500'} rounded-lg flex items-center cursor-pointer relative justify-between w-full p-4 focus:outline-none`}>
                                    <div className='flex gap-2 items-center'>
                                        {item.icon}
                                        <h5 className='text-base font-bold opacity-70 capitalize'>{item.value.split('_').join(' ')}</h5>
                                    </div>
                                    <input
                                        type='radio'
                                        value={item.value}
                                        name='payments'
                                        onChange={() => handlePaymentChange(item.value)}
                                        // checked={currentItem.id === item.id} 
                                        className='form-radio sr-only peer h-4 w-4 text-[#1eabe7e3]'
                                    />
                                    <div className='block peer-checked:hidden'>
                                        <ArrowRight className='h-5 w-5' />
                                    </div>
                                    <div className='hidden peer-checked:block'>
                                        <ArrowRight className='h-5 w-5 text-[#F3724F]' />
                                    </div>
                                </label>
                            )
                        })
                    }
                </div>
            </div>
            <div className='w-full text-center px-[30px] pt-[23px]'>
                <button onClick={nextStep} className='rounded bg-[#F3724F] text-white font-medium text-sm w-full py-2'>Proceed</button>
            </div>
        </div>
    )
}

const PaymentInfo = ({ selectedPayment, ref_id, setShowSuccess }) => {

    const navigate = useNavigate()

    const { data } = useFetcher(`${endpoints.TRANSACTION_SHOW}/${ref_id}`)

    const transaction = data?.transaction

    const menu = [
        { title: 'Amount', value: `₦ ${currencyFormatter(transaction?.amount)}` },
        { title: 'Email', value: transaction?.owner }
    ]

    const { mutate: process, isLoading: processing } = usePoster(endpoints.PROCESS_PAYMENT, 'Payment processed successfully, kindly confirm', [], confirmationModal)
    const { mutate: confirm, isLoading: confirming } = usePoster(endpoints.TRANSACTION_CONFIRMATION, 'Transaction confirmed successfully', [])

    const processPayment = () => {
        process({ transaction_reference: ref_id, payment_method: selectedPayment })
    }

    const confirmTransaction = (ref_id) => {
        // confirm({ transaction_reference: ref_id })
        notification.success({ message: 'Success', description: 'Transaction confirmed' })
        localStorage.removeItem('ichor-checkout-ref')
        setShowSuccess(true)
        // navigate('/transactions/transactions')
    }

    function confirmationModal(data) {
        Modal.confirm({
            title: `Confirmation required`,
            content: 'Payment processed, click to confirm transaction',
            centered: true,
            cancelText: 'Cancel',
            okButtonProps: {
                loading: confirming
            },
            onOk: () => confirmTransaction(data?.payment)
        })
    }

    return (
        <div className='w-full px-6 py-6'>
            {/* <div className='pt-[27px] px-[30px]'>
                <h4 className='font-bold text-xl'>Payment Info</h4>
            </div>
            <div className='px-[30px] pt-[23px] space-y-[23px]'>
                {
                    menu.map(item => {
                        return (
                            <div key={item.title} className='flex items-center justify-between'>
                                <h4>{item.title}:</h4>
                                <h5>{item.value}</h5>
                            </div>
                        )
                    })
                }
            </div>
            <div className='px-[30px] pt-[23px] space-y-[23px]'>
                <h4 className='font-bold text-xl'>Payment Method</h4>
            </div>
            <div className='w-full text-center px-[30px] pt-[23px]'>
                <button onClick={processPayment} disabled={processing} className='rounded bg-[#F3724F] text-white font-medium text-sm w-full py-2'>
                    {processing ? 'Making Payment...' : 'Pay'}
                </button>
            </div> */}
            <div className='flex items-center justify-between'>
                <div onClick={() => navigate('/transactions/transactions')} className='bg-gray-200 p-3 rounded-full cursor-pointer'>
                    <IoIosArrowBack />
                </div>
                <h4 className='font-semibold text-lg text-center'>Checkout</h4>
                <div className='opacity-0'>
                    <IoIosArrowBack />
                </div>
            </div>
            <div className='flex items-center justify-between border-b border-gray-500 pb-5 mt-8'>
                <div>
                    <h4 className='font-semibold text-lg'>Premium plan</h4>
                    <h5 className='text-gray-700'>$8/month - Billed monthly</h5>
                </div>
                <p className='font-semibold'>₦0</p>
            </div>
            <div className='flex items-center justify-between pt-5'>
                <div>
                    <h4 className='font-semibold text-lg'>Friends Addons</h4>
                    <h5 className='text-gray-700'>₦1/month - Billed monthly</h5>
                </div>
                <p className='font-semibold'>₦0</p>
            </div>
            <div className='mt-3 border-b border-gray-500 pb-5 flex items-center gap-1'>
                <input className='w-full p-2 text-black border-opacity-30 border-[1px] border-black rounded-md focus:outline-none focus:border-[1px] focus:border-opacity-30 focus:border-black' />
                <button className='bg-[#F3724F] rounded text-white p-2 font-medium'>Apply</button>
            </div>
            <div className='flex items-center justify-between pt-5 border-b border-gray-500 pb-5'>
                <div>
                    <h4 className='font-semibold text-lg'>Subtotal</h4>
                    <h5 className='text-gray-700'>Tax (if applicable)</h5>
                </div>
                <p className='font-semibold'>₦0</p>
            </div>
            <div className='flex items-center justify-between pt-5'>
                <h4 className='font-semibold text-lg'>Total</h4>
                <p className='font-semibold'>₦{currencyFormatter(transaction?.amount)}</p>
            </div>
            <button onClick={processPayment} disabled={processing} className='bg-[#F3724F] rounded text-white p-2 font-medium w-full mt-5'>
                {processing ? 'Making Payment...' : 'Pay'}
            </button>
        </div>
    )
}