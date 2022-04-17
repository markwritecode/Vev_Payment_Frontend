import { Avatar, Form } from 'antd'
import { useState } from 'react'
import { FaFileInvoice } from 'react-icons/fa'
import { IoIosLock } from 'react-icons/io'
import { useActivityContext } from '../../pages/Activity'
import { paymentOptions } from '../../utils/helperVariables'

const Checkout = () => {
    const [currentItem, setCurrentItem] = useState({
        'name': 'Collection 01 + 02',
        'value': 'collection_three',
        'price': '48.00',
        'description': 'Buy both collections. 20 x Presets in total'
    })

    return (
        <div className='bg-[#F5F5F7] h-screen lg:flex'>
            <LeftSide currentItem={currentItem} setCurrentItem={setCurrentItem} />
            <RightSide currentItem={currentItem} />
        </div>
    )
}

export default Checkout

const LeftSide = ({ currentItem, setCurrentItem }) => {

    const [activityContext] = useActivityContext()

    const data = [
        { name: 'Collection 01', value: 'collection_one', price: '29.00', description: '10 x Presets. Released in 2018' },
        { name: 'Collection 02', value: 'collection_two', price: '37.50', description: '10 x Presets. Released in 2020' },
        { name: 'Collection 01 + 02', value: 'collection_three', price: '48.00', description: 'Buy both collections. 20 x Presets in total' }
    ]

    const handleChange = item => setCurrentItem({ ...item, vat: (Number(item.price) * 0.2).toFixed(2), total: ((Number(item.price) * 0.2) + (Number(item.price))).toFixed(2) })

    return (
        <div className='lg:w-1/2'>
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
                        <h5 className='text-base font-light'>${currentItem.price}</h5>
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
                        data.map(item => {
                            return (
                                <label key={item.name} className={`flex items-start cursor-pointer justify-between w-full bg-gray-200 rounded-md border-2 ${(item.value === currentItem.value) && 'border-2 border-[#1eabe7e3]'} p-4 focus:outline-none`}>
                                    <div className='flex items-start gap-2'>
                                        <input type='radio' onChange={() => handleChange(item)} name={'item_list'} value={item.value} checked={currentItem.value === item.value} className='form-radio h-5 w-5 text-[#1eabe7e3]' />
                                        <div className='space-y-4'>
                                            <p className='text-sm text-gray-800 font-medium text-left'>{item.name}</p>
                                            <p className='text-left text-gray-500'>{item.description}</p>
                                        </div>
                                    </div>

                                    <span className='text-gray-600 text-sm'>${item.price}</span>
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

    const handleFinish = () => {
        checkoutForm.validateFields().then(values => console.log(values))
    }

    return (
        <div className='bg-white lg:w-1/2'>
            <div className='flex items-center gap-2 p-5 opacity-0'>
                <Avatar shape='circle' src={`https://i.pravatar.cc/600?img=${activityContext.user.id}`} size={40} />
                <div className=''>
                    <h3 className='font-medium text-gray-500 text-xs capitalize'>{activityContext.user.name}</h3>
                    <h5 className='text-gray-400 text-xs font-medium'>{activityContext.user.email}</h5>
                </div>
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
                                    <span>${currentItem.price}</span>
                                </div>
                            </div>
                            <div className='w-full flex mb-3 items-center'>
                                <div className='flex-grow'>
                                    <span className='text-gray-600'>VAT (20%)</span>
                                </div>
                                <div className='pl-3'>
                                    <span>${currentItem.vat}</span>
                                </div>
                            </div>
                            <div className='w-full flex mb-3 items-center'>
                                <div className='flex-grow'>
                                    <span className='text-gray-600 font-semibold'>Total</span>
                                </div>
                                <div className='pl-3'>
                                    <span className='font-semibold'>${currentItem.total}</span>
                                </div>
                            </div>
                        </div>
                        <div className='w-full'>
                            <button onClick={handleFinish} className='text-center w-full bg-gradient-to-r from-[#1eabe7e3] to-cyan-300 rounded-lg p-3 font-semibold text-white'>Pay ${currentItem.total}</button>
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