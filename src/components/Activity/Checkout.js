import { Avatar } from 'antd'
import { BsFillCreditCard2BackFill, BsPaypal } from 'react-icons/bs'
import { FaFileInvoice, FaStripeS } from 'react-icons/fa'
import { IoIosLock } from 'react-icons/io'
import { useActivityContext } from '../../pages/Activity'

const Checkout = () => {
    return (
        <div className='bg-[#F5F5F7] h-screen lg:flex'>
            <LeftSide />
            <RightSide />
        </div>
    )
}

export default Checkout

const LeftSide = () => {

    const [activityContext] = useActivityContext()

    const data = [
        { name: 'Collection 01', price: '$29.00', description: '10 x Presets. Released in 2018' },
        { name: 'Collection 02', price: '$29.00', description: '10 x Presets. Released in 2020', active: true },
        { name: 'Collection 01 + 02', price: '$48.00', description: 'Buy both collections. 20 x Presets in total' }
    ]

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
                        <h5 className='text-base font-light'>$29.00+</h5>
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
                                <button key={item.name} className={`flex items-start justify-between w-full bg-gray-200 rounded-md border-2 ${item.active && 'border-2 border-[#1eabe7e3]'} p-4 focus:outline-none`}>
                                    <label className='flex items-start gap-2'>
                                        <input type='radio' className='form-radio h-5 w-5 text-[#1eabe7e3]' checked={item.active} />
                                        <div className='space-y-4'>
                                            <p className='text-sm text-gray-800 font-medium text-left'>{item.name}</p>
                                            <p className='text-left text-gray-500'>{item.description}</p>
                                        </div>
                                    </label>

                                    <span className='text-gray-600 text-sm'>{item.price}</span>
                                </button>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

const RightSide = () => {

    const [activityContext] = useActivityContext()

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
                    <div className='space-y-6'>
                        <div className='space-y-3'>
                            <label className='block text-sm text-gray-00 font-semibold' htmlFor='email'>Email address</label>
                            <input className='w-full p-3 text-gray-700 border-[1px] border-gray-300 rounded-md focus:outline-none focus:border-2 focus:border-[#1eabe7e3]' id='email' type='email' required />
                        </div>
                        <div className='space-y-3'>
                            <label className='block text-sm text-gray-00 font-semibold' htmlFor='cardholder_name'>How do you want to pay?</label>
                            <div className='grid grid-cols-2 gap-2 cursor-pointer'>
                                <div className='flex mb-3 items-center rounded-sm border-2 border-[#1eabe7e3] p-3'>
                                    <div className='flex-grow'>
                                        <span className='text-[#1eabe7e3] font-medium'>Credit/Debit Card</span>
                                    </div>
                                    <div className='pl-3'>
                                        <BsFillCreditCard2BackFill className='w-6 h-6 text-gray-500' />
                                    </div>
                                </div>
                                <div className='flex mb-3 items-center rounded-sm border-[1px] border-gray-300 p-3 cursor-pointer'>
                                    <div className='flex-grow'>
                                        <span className='font-medium'>PayPal</span>
                                    </div>
                                    <div className='pl-3'>
                                        <BsPaypal className='w-6 h-6 text-gray-500' />
                                    </div>
                                </div>
                                <div className='flex mb-3 items-center rounded-sm border-[1px] border-gray-300 p-3 cursor-pointer'>
                                    <div className='flex-grow'>
                                        <span className='font-medium'>Stripe</span>
                                    </div>
                                    <div className='pl-3'>
                                        <FaStripeS className='w-6 h-6 text-gray-500' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className='block text-sm text-gray-00 font-semibold' htmlFor='vat_number'>Billing address</label>
                            <div class='mt-2 flex-col'>
                                <div>
                                    <select className='border rounded-tl rounded-tr border-gray-300 p-3 w-full text-base leading-4 placeholder-gray-400 text-gray-400 focus:outline-none'>
                                        <option>United States</option>
                                        <option>Nigeria</option>
                                    </select>
                                </div>
                                <div class='flex-row flex'>
                                    <input className='border rounded-bl border-gray-300 p-3 w-full text-base leading-4 placeholder-gray-400 text-gray-600 focus:outline-none' type='number' placeholder='ZIP' />
                                    <input className='border rounded-br border-gray-300 p-3 w-full text-base leading-4 placeholder-gray-400 text-gray-600 focus:outline-none' type='text' placeholder='State' />
                                </div>
                            </div>
                        </div>
                        <div className='space-y-3'>
                            <label className='block text-sm text-gray-00 font-semibold' htmlFor='vat_number'>VAT Number</label>
                            <input className='w-full p-3 text-gray-700 border-[1px] border-gray-300 rounded-md focus:outline-none focus:border-2 focus:border-[#1eabe7e3]' id='vat_number' type='number' required />
                        </div>
                        <div>
                            <div className='w-full flex mb-3 items-center'>
                                <div className='flex-grow'>
                                    <span className='text-gray-600'>Subtotal</span>
                                </div>
                                <div className='pl-3'>
                                    <span>$29.00</span>
                                </div>
                            </div>
                            <div className='w-full flex mb-3 items-center'>
                                <div className='flex-grow'>
                                    <span className='text-gray-600'>VAT (20%)</span>
                                </div>
                                <div className='pl-3'>
                                    <span>$5.80</span>
                                </div>
                            </div>
                            <div className='w-full flex mb-3 items-center'>
                                <div className='flex-grow'>
                                    <span className='text-gray-600 font-semibold'>Total</span>
                                </div>
                                <div className='pl-3'>
                                    <span className='font-semibold'>$34.80</span>
                                </div>
                            </div>
                        </div>
                        <div className='w-full'>
                            <button className='text-center w-full bg-gradient-to-r from-[#1eabe7e3] to-cyan-300 rounded-lg p-3 font-semibold text-white'>Pay $34.80</button>
                        </div>
                        <p className='text-gray-300 text-xs flex items-center gap-1 justify-center font-medium'>
                            <IoIosLock className='h-5 w-5' />
                            <span>Payments are secured and encrypted</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}