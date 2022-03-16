import { CheckCircleIcon, ClipboardListIcon, XCircleIcon } from '@heroicons/react/outline'
import Layout from '../components/General/Layout'

const Invoice = () => {
    return (
        <Layout>
            <div className='h-full w-full'>
                {/* <div className='h-full w-full overflow-y-scroll'> */}
                <h3 className='text-4xl font-semibold'>Invoices</h3>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8'>

                    <div className='flex items-center justify-between bg-white rounded-lg flex-shrink-0 flex-grow p-8'>
                        <div className='space-y-1'>
                            <h4 className='text-4xl font-bold'>583</h4>
                            <h5 className='text-gray-400'>Total Invoices</h5>
                        </div>
                        <ClipboardListIcon className='w-10' />
                    </div>

                    <div className='flex items-center justify-between bg-white rounded-lg flex-shrink-0 flex-grow p-8'>
                        <div className='space-y-1'>
                            <h4 className='text-4xl font-bold'>583</h4>
                            <h5>Total Invoices</h5>
                        </div>
                        <CheckCircleIcon className='w-10 text-green-300' />
                    </div>
                    <div className='flex items-center justify-between bg-white rounded-lg flex-shrink-0 flex-grow p-8'>
                        <div className='space-y-1'>
                            <h4 className='text-4xl font-bold'>583</h4>
                            <h5>Total Invoices</h5>
                        </div>
                        <XCircleIcon className='w-10 text-red-300' />
                    </div>
                    <div className='flex items-center justify-between bg-white rounded-lg flex-shrink-0 flex-grow p-8'>
                        <div className='space-y-1'>
                            <h4 className='text-4xl font-bold'>583</h4>
                            <h5>Total Invoices</h5>
                        </div>
                        <ClipboardListIcon className='w-10' />
                    </div>
                </div>

                <h5>Payment History</h5>

            </div>
        </Layout>
    )
}

export default Invoice