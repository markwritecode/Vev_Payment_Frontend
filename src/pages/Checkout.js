import { Modal, notification } from 'antd'
import { useEffect, useState } from 'react'
import { FaWallet } from 'react-icons/fa'
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from 'react-icons/io'
import { IoWalletSharp } from 'react-icons/io5'
import { useLocation, useNavigate } from 'react-router-dom'
import { useFetcher } from '../hooks/fetcher'
import { usePoster } from '../hooks/poster'
import { currencyFormatter, dateFormatter } from '../utils/helperFunctions'
import { endpoints } from '../utils/helperVariables'

const Checkout = () => {

    const [selectedPayment, setSelectedPayment] = useState('')
    const [step, setStep] = useState('transaction_details')

    const location = useLocation()
    const arr = location.pathname.split('/')
    const ref_id = arr[arr.length - 1]

    const handlePaymentChange = value => setSelectedPayment(value)

    const nextStep = () => setStep('payment_info')

    useEffect(() => {
        localStorage.removeItem('ichor-checkout-ref')
    }, [location])

    return (
        <div className='z-30 bg-white w-full h-screen fixed top-0 left-0'>
            <div className='flex items-center justify-center h-full bg-[#E6E6E6]'>
                <div className='bg-white rounded-[10px] pb-[30px] w-[370px]'>
                    {
                        step === 'transaction_details' ?
                            <TransactionDetails
                                nextStep={nextStep}
                                handlePaymentChange={handlePaymentChange}
                                ref_id={ref_id}
                            /> :
                            <PaymentInfo
                                selectedPayment={selectedPayment}
                                ref_id={ref_id}
                            />
                    }
                </div>
            </div>
        </div>
    )
}

export default Checkout

const TransactionDetails = ({ nextStep, handlePaymentChange, ref_id }) => {

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
                <h4 className='font-bold text-xl'>Payment Option</h4>
                <div>
                    {
                        payments.map(item => {
                            return (
                                <label key={item.value} className={`flex items-center cursor-pointer relative justify-between w-full py-4 focus:outline-none`}>
                                    {item.icon}
                                    <h5 className='text-base font-bold opacity-70 capitalize'>{item.value.split('_').join(' ')}</h5>
                                    <input
                                        type='radio'
                                        value={item.value}
                                        name='payments'
                                        onChange={() => handlePaymentChange(item.value)}
                                        // checked={currentItem.id === item.id} 
                                        className='form-radio sr-only peer h-4 w-4 text-[#1eabe7e3]'
                                    />
                                    <div className='block peer-checked:hidden'>
                                        <IoIosRadioButtonOff className='h-5 w-5 text-black' />
                                    </div>
                                    <div className='hidden peer-checked:block'>
                                        <IoIosRadioButtonOn className='h-5 w-5 text-black' />
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

const PaymentInfo = ({ selectedPayment, ref_id }) => {

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
        navigate('/')
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
        <div className='w-full'>
            <div className='pt-[27px] px-[30px]'>
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
            </div>
        </div>
    )
}