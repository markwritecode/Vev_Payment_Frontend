import { BsFillCreditCard2BackFill, BsPaypal } from 'react-icons/bs'
import { FaStripeS } from 'react-icons/fa'

export const dateFormat = 'DD/MM/YYYY'
export const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae', 'F7CCAC', '#712B75', '#5EE6EB', '#5463FF', '#332FD0', '#85C88A']
export const paymentOptions = [
    { name: 'Credit/Debit Card', slug: 'credit_card', icon: <BsFillCreditCard2BackFill className='w-6 h-6 text-gray-500' />, active: true },
    { name: 'PayPal', slug: 'paypal', icon: <BsPaypal className='w-6 h-6 text-gray-500' /> },
    { name: 'Stripe', slug: 'stripe', icon: <FaStripeS className='w-6 h-6 text-gray-500' /> }
]

export const urls = {
    auth: {
        DASHBOARD: '/'
    },
    un_auth: {
        LOGIN: '/',
        SIGN_UP: 'signup'
    }
}

export const endpoints = {
    DASHBOARD_REPORT: 'dashboard/report',
    CREATE_TRANSACTION: 'payment/transaction',
    SEND_TRANSACTION_LINK: 'transaction/send/link',
    TRANSACTION_CONFIRMATION: 'transaction/confirm',
    TRANSACTION_INVOICE_PAYMENT: 'transaction/invoice/payment',
    TRANSACTION_REPORTS: 'transaction/report',
    ACTIVITY_SHOW: 'activity/show',
    ACTIVITY_DETAILS: 'activity/details/',
    INVOICE_CREATE: 'invoice/create',
    INVOICE_UPDATE: 'invoice/update',
    INVOICE_SHOW: 'invoice/show/0/100',
    INVOICE_DELETE: 'invoice/delete',
    PAYMENT_REPORT: 'payment/report',
    USER_CREATE: 'user/create',
    USER_PROFILE: 'user/profile/show',
    USER_SHOW: 'user/show',
    USER_LOGIN: 'user/signin',
    USER_UPDATE: 'user/profile/update',
    USER_VERIFY: 'user/verify_email',
    SIGNUP: 'user/signup'
}