import { CheckCircleIcon, ClipboardListIcon, XCircleIcon } from '@heroicons/react/outline'
import { Table } from 'antd'
import { useState } from 'react'
import Layout from '../components/General/Layout'
import CreateInvoice from '../components/Invoicing/CreateInvoice'
import InvoiceContext from '../contexts/invoice'
import { invoice_col, invoice_dummy_data } from '../utils/table_data'

const Invoice = () => {

    const [visible, setVisible] = useState(false)

    const handleOpenDrawer = () => setVisible(true)
    const handleCloseDrawer = () => setVisible(false)

    return (
        <InvoiceContext>
            <Layout>
                <div className='h-full w-full space-y-8'>
                    <h3 className='text-4xl font-semibold'>Invoices</h3>

                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>

                        <div className='flex items-center justify-between bg-white rounded-lg flex-shrink-0 flex-grow p-8'>
                            <div className='space-y-1'>
                                <h4 className='text-4xl font-bold'>582</h4>
                                <h5 className='text-gray-400'>Total Invoices</h5>
                            </div>
                            <ClipboardListIcon className='w-10' />
                        </div>

                        <div className='flex items-center justify-between bg-white rounded-lg flex-shrink-0 flex-grow p-8'>
                            <div className='space-y-1'>
                                <h4 className='text-4xl font-bold'>346</h4>
                                <h5 className='text-gray-400'>Paid Invoices</h5>
                            </div>
                            <CheckCircleIcon className='w-10 text-green-300' />
                        </div>
                        <div className='flex items-center justify-between bg-white rounded-lg flex-shrink-0 flex-grow p-8'>
                            <div className='space-y-1'>
                                <h4 className='text-4xl font-bold'>236</h4>
                                <h5 className='text-gray-400'>Total Unpaid Invoices</h5>
                            </div>
                            <XCircleIcon className='w-10 text-red-300' />
                        </div>
                        <div className='flex items-center justify-between bg-white rounded-lg flex-shrink-0 flex-grow p-8'>
                            <div className='space-y-1'>
                                <h4 className='text-4xl font-bold'>582</h4>
                                <h5 className='text-gray-400'>Total Invoices</h5>
                            </div>
                            <ClipboardListIcon className='w-10' />
                        </div>
                    </div>

                    <div className='flex items-center justify-between'>
                        <div>
                            <h5 className='text-lg'>Payment History</h5>
                            <p className='text-gray-400 text-xs mt-2'>Lorem ipsum dolor sit amet, consectetur</p>
                        </div>
                        <button onClick={handleOpenDrawer} className='bg-[#1EAAE7] text-white px-2 py-2 rounded-sm'>CREATE INVOICE</button>
                    </div>

                    <div className='bg-white rounded-lg px-5 py-10 mb-10'>
                        <Table columns={invoice_col} dataSource={invoice_dummy_data} size='large' rowKey={'id_invoice'} bordered={false} scroll={{ x: true }} />
                    </div>
                    <CreateInvoice visible={visible} handleCloseDrawer={handleCloseDrawer} />

                </div>
            </Layout>
        </InvoiceContext>
    )
}

export default Invoice