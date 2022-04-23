import { Avatar, Form } from 'antd'
import { useState } from 'react'
import { FaFileInvoice } from 'react-icons/fa'
import { IoIosLock } from 'react-icons/io'
import { IoArrowBackOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { useCreateTransactions } from '../../hooks/transactions/useCreateTransaction'
import { useActivityContext } from '../../pages/Activity'
import { currencyFormatter } from '../../utils/helperFunctions'
import { paymentOptions } from '../../utils/helperVariables'

const Checkout = () => {
    const [activityContext] = useActivityContext()
    const initialItem = activityContext?.items[0]
    const [currentItem, setCurrentItem] = useState({
        ...initialItem, vat: (Number(initialItem.subtotal) * 0.2).toFixed(2), total: ((Number(initialItem.subtotal) * 0.2) + (Number(initialItem.subtotal))).toFixed(2)
    })
    console.log(activityContext)

    return (
        <div className='bg-[#F5F5F7] w-full lg:grid lg:grid-cols-2 overflow-y-scroll'>
            <LeftSide currentItem={currentItem} setCurrentItem={setCurrentItem} />
            <RightSide currentItem={currentItem} />
        </div>
    )
}

export default Checkout

const LeftSide = ({ currentItem, setCurrentItem }) => {

    const [activityContext] = useActivityContext()

    const handleChange = item => setCurrentItem({ ...item, vat: (Number(item.subtotal) * 0.2).toFixed(2), total: ((Number(item.subtotal) * 0.2) + (Number(item.subtotal))).toFixed(2) })

    return (
        <div className='overflow-y-scroll'>
            <div className='flex items-center gap-2 p-5'>
                <Avatar shape='circle' src={`https://i.pravatar.cc/600?img=${activityContext.user.id}`} size={40} />
                <div className=''>
                    <h3 className='font-medium text-gray-500 text-xs capitalize'>{activityContext.user.name}</h3>
                    <h5 className='text-gray-400 text-xs font-medium'>{activityContext.user.email}</h5>
                </div>
            </div>
            <div className='flex justify-center items-start py-16'>
                <div className='lg:w-1/2 space-y-4'>
                    <div className='flex items-center justify-between'>
                        <h3 className='text-lg font-medium'>Invoice Payment</h3>
                        <h5 className='text-base font-light'>${currencyFormatter(currentItem.subtotal)}</h5>
                    </div>
                    <div className='h-62 w-full mb-3'>
                        {/* <img
                            src='https://images.unsplash.com/photo-1577982787983-e07c6730f2d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2059&q=80'
                            alt='Just a flower'
                            className='w-full object-fill rounded-2xl'
                        /> */}
                        <FaFileInvoice className='w-1/2 h-auto m-auto py-10' />
                    </div>
                    <p className='text-gray-600 text-justify capitalize'>{activityContext.activity.description}</p>
                    {
                        activityContext.items.map(item => {
                            return (
                                <label key={item.id} className={`flex items-start cursor-pointer justify-between w-full bg-gray-200 rounded-md border-2 ${(item.id === currentItem.value) && 'border-2 border-[#1eabe7e3]'} p-4 focus:outline-none`}>
                                    <div className='flex items-start gap-2'>
                                        <input type='radio' onChange={() => handleChange(item)} name={'item_list'} value={item.id} checked={currentItem.id === item.id} className='form-radio h-5 w-5 text-[#1eabe7e3]' />
                                        <div className='space-y-4'>
                                            <p className='text-sm text-gray-800 font-medium text-left capitalize'>{item.item_name}</p>
                                            <p className='text-left text-gray-500'>{item.description} {`${item.item_qty}  x items. ${currencyFormatter(item.item_amount)} for each.`}</p>
                                        </div>
                                    </div>

                                    <span className='text-gray-600 text-sm'>${currencyFormatter(item.subtotal)}</span>
                                </label>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

const RightSide = ({ currentItem }) => {

    const [activityContext] = useActivityContext()
    const [checkoutForm] = Form.useForm()
    const navigate = useNavigate()
    const { mutate, isLoading } = useCreateTransactions(() => navigate('/activity'))

    const handleFinish = () => {
        checkoutForm.validateFields().then(() => {
            const payload = {
                payment_method: 'online_payment_getway',
                reference: activityContext.activity.ref_number
            }
            mutate(payload)
        })
    }

    return (
        <div className='bg-white overflow-y-scroll'>
            <div onClick={() => navigate('/activity')} className='flex items-center justify-end cursor-pointer gap-1 p-5'>
                <IoArrowBackOutline />
                <span>Go back</span>
            </div>
            <div className='flex justify-center items-start py-16'>
                <div className='space-y-8'>
                    <div>
                        <h3 className='text-lg font-medium'>Payment Details</h3>
                        <h5 className='text-gray-500 text-xs'>Complete your purchase by providing your payment details.</h5>
                    </div>
                    <Form
                        className='space-y-6'
                        form={checkoutForm}
                        autoComplete='off'
                    >
                        <Form.Item
                            name='email'
                            rules={[{ required: true, message: 'Field cannot be empty' }, { type: 'email', message: 'Enter a valid email' }]}>
                            <div className='space-y-3'>
                                <label className='block text-sm text-gray-00 font-semibold'>Email address</label>
                                <input className='w-full p-3 text-gray-700 border-[1px] border-gray-300 rounded-md focus:outline-none focus:border-2 focus:border-[#1eabe7e3]' />
                            </div>
                        </Form.Item>
                        <div className='space-y-3'>
                            <label className='block text-sm text-gray-00 font-semibold'>How do you want to pay?</label>
                            <div className='grid grid-cols-2 gap-2 cursor-pointer'>
                                {
                                    paymentOptions.map(option => {
                                        return (
                                            <div key={option.name} className={`flex mb-3 items-center rounded-sm p-3 cursor-pointer ${option.active ? 'border-2 border-[#1eabe7e3]' : 'border-[1px] border-gray-300 '}`}>
                                                <div className='flex-grow'>
                                                    <span className='font-medium'>{option.name}</span>
                                                </div>
                                                <div className='pl-3'>{option.icon}</div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div>
                            <label className='block text-sm text-gray-00 font-semibold'>Billing address</label>
                            <div className='mt-2 flex-col'>
                                <Form.Item
                                    name='country'
                                    rules={[{ required: true, message: 'Field cannot be empty' }]}
                                >
                                    <select className='border rounded-tl rounded-tr border-gray-300 p-3 w-full text-base leading-4 placeholder-gray-400 text-gray-400 focus:outline-none'>
                                        <option>United States</option>
                                        <option>Nigeria</option>
                                    </select>
                                </Form.Item>
                                <div className='flex-row flex'>
                                    <Form.Item
                                        name='zip'
                                        rules={[{ required: true, message: 'Field cannot be empty' }]}
                                    >
                                        <input className='border rounded-bl border-gray-300 p-3 w-full text-base leading-4 placeholder-gray-400 text-gray-600 focus:outline-none' type='number' placeholder='ZIP' />
                                    </Form.Item>
                                    <Form.Item
                                        name='state'
                                        rules={[{ required: true, message: 'Field cannot be empty' }]}
                                    >
                                        <input className='border rounded-br border-gray-300 p-3 w-full text-base leading-4 placeholder-gray-400 text-gray-600 focus:outline-none' type='text' placeholder='State' />
                                    </Form.Item>
                                </div>
                            </div>
                        </div>
                        <Form.Item
                            name='vat_number'
                            rules={[{ required: true, message: 'Field cannot be empty' }]}>
                            <div className='space-y-3'>
                                <label className='block text-sm text-gray-00 font-semibold'>VAT Number</label>
                                <input className='w-full p-3 text-gray-700 border-[1px] border-gray-300 rounded-md focus:outline-none focus:border-2 focus:border-[#1eabe7e3]' type='number' />
                            </div>
                        </Form.Item>
                        <div>
                            <div className='w-full flex mb-3 items-center'>
                                <div className='flex-grow'>
                                    <span className='text-gray-600'>Subtotal</span>
                                </div>
                                <div className='pl-3'>
                                    <span>${currencyFormatter(currentItem.subtotal)}</span>
                                </div>
                            </div>
                            <div className='w-full flex mb-3 items-center'>
                                <div className='flex-grow'>
                                    <span className='text-gray-600'>VAT (20%)</span>
                                </div>
                                <div className='pl-3'>
                                    <span>${currencyFormatter(currentItem.vat)}</span>
                                </div>
                            </div>
                            <div className='w-full flex mb-3 items-center'>
                                <div className='flex-grow'>
                                    <span className='text-gray-600 font-semibold'>Total</span>
                                </div>
                                <div className='pl-3'>
                                    <span className='font-semibold'>${currencyFormatter(currentItem.total)}</span>
                                </div>
                            </div>
                        </div>
                        <div className='w-full'>
                            <button disabled={isLoading} onClick={handleFinish} className='text-center w-full bg-gradient-to-r from-[#1eabe7e3] to-cyan-300 rounded-lg p-3 font-semibold text-white'>
                                {isLoading ? 'Making Payment...' : `Pay $${currencyFormatter(currentItem.total)}`}
                            </button>
                        </div>
                        <p className='text-gray-300 text-xs flex items-center gap-1 justify-center font-medium'>
                            <IoIosLock className='h-5 w-5' />
                            <span>Payments are secured and encrypted</span>
                        </p>
                    </Form>
                </div>
            </div>
        </div>
    )
}