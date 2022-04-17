import { BsFillCreditCard2BackFill, BsPaypal } from 'react-icons/bs'
import { FaStripeS } from 'react-icons/fa'

export const dateFormat = 'DD/MM/YYYY'
export const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae', 'F7CCAC', '#712B75', '#5EE6EB', '#5463FF', '#332FD0', '#85C88A']
export const paymentOptions = [
    {name: 'Credit/Debit Card', icon: <BsFillCreditCard2BackFill className='w-6 h-6 text-gray-500'/>, active: true},
    {name: 'PayPal', icon: <BsPaypal className='w-6 h-6 text-gray-500'/>},
    {name: 'Stripe', icon: <FaStripeS className='w-6 h-6 text-gray-500'/>}
]