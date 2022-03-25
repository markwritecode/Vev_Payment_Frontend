import { CheckCircleIcon, ClipboardListIcon, DotsHorizontalIcon, XCircleIcon } from '@heroicons/react/outline'
import { Avatar, Dropdown, Menu, Table } from 'antd'
import { useState } from 'react'
import Layout from '../components/General/Layout'
import CreateInvoice from '../components/Invoicing/CreateInvoice'
import InvoiceContext from '../contexts/invoice'
import { useDeleteInvoice, usePullInvoice } from '../hooks/invoice/useInvoice'
import { formatDate } from '../utils/helperFunctions'
import 'antd/lib/input/style/search-input.less'

const Invoice = () => {

    const [visible, setVisible] = useState(false)
    const [search, setSearch] = useState('')
    const [updateData, setUpdateData] = useState(null)
    const [updateVisible, setUpdateVisible] = useState(false)

    const handleOpenDrawer = () => setVisible(true)
    const handleCloseDrawer = () => setVisible(false)

    const handleOpenUpdateDrawer = () => setUpdateVisible(true)
    const handleCloseUpdateDrawer = () => {
        setUpdateVisible(false)
        setUpdateData(null)
    }

    const { pullInvoiceLoading, pulledInvoice } = usePullInvoice()
    const { mutate: _deleteInvoice } = useDeleteInvoice()

    const handleDeleteInvoice = invoice_ref => _deleteInvoice({ invoice_ref })

    const handleSearch = e => setSearch(e.target.value)

    const menu = item => {
        return (
            <Menu>
                <Menu.Item
                    onClick={handleOpenUpdateDrawer}
                    key='2'>
                    Edit
                </Menu.Item>
                {
                    item.status === 'draft' &&
                    <Menu.Item
                        key='1'
                        onClick={() => handleDeleteInvoice(item.ref_number)}>
                        Delete
                    </Menu.Item>
                }
            </Menu>
        )
    }

    const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae', 'F7CCAC', '#712B75', '#5EE6EB', '#5463FF', '#332FD0', '#85C88A']

    const invoice_col = [
        {
            title: 'Reference No.',
            dataIndex: 'ref_number',
            key: 'ref_number'
        },
        {
            title: 'Date',
            dataIndex: 'created_at',
            key: 'created_at',
            render: created_at => formatDate(new Date(created_at))
        },
        {
            title: 'Recipient',
            dataIndex: 'recipient',
            key: 'recipient',
            render: (recipient, record) => {
                return (
                    <div className='flex items-center gap-2'>
                        <Avatar
                            style={{
                                backgroundColor: record.color,
                                verticalAlign: 'middle',
                            }}
                            className='uppercase'
                            size="large"
                        >
                            {recipient[0] + recipient[1]}
                        </Avatar>
                        <span>{recipient}</span>
                    </div>
                )
            }
        },
        {
            title: 'Email',
            dataIndex: 'recipient',
            key: 'email'
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: status => {
                return (
                    <button className={`rounded-full px-4 py-2 text-white ${status === 'pending' ? 'bg-yellow-500' : status === 'active' ? 'bg-green-500' : 'bg-gray-500'}`}>{status}</button>
                )
            }
        },
        {
            title: '',
            key: 'actions',
            render: item => {
                return (
                    <Dropdown overlay={() => menu(item)} trigger={['click']}>
                        <DotsHorizontalIcon
                            onClick={e => {
                                e.preventDefault()
                                setUpdateData(item)
                            }}
                            className='h-6 w-6 cursor-pointer' />
                    </Dropdown>
                )
            }
        }
    ]

    if (pullInvoiceLoading) return <p>Loading page...</p>

    return (
        <InvoiceContext>
            <Layout>
                <div className='h-full w-full space-y-8'>
                    <h3 className='text-4xl font-semibold'>Invoices</h3>

                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>

                        <div className='flex items-center justify-between bg-white rounded-lg flex-shrink-0 flex-grow p-8'>
                            <div className='space-y-1'>
                                <h4 className='text-4xl font-bold'>{pulledInvoice?.length}</h4>
                                <h5 className='text-gray-400'>Total Invoices</h5>
                            </div>
                            <ClipboardListIcon className='w-10' />
                        </div>

                        <div className='flex items-center justify-between bg-white rounded-lg flex-shrink-0 flex-grow p-8'>
                            <div className='space-y-1'>
                                <h4 className='text-4xl font-bold'>{pulledInvoice?.filter(item => item.status === 'paid')?.length}</h4>
                                <h5 className='text-gray-400'>Paid Invoices</h5>
                            </div>
                            <CheckCircleIcon className='w-10 text-green-300' />
                        </div>
                        <div className='flex items-center justify-between bg-white rounded-lg flex-shrink-0 flex-grow p-8'>
                            <div className='space-y-1'>
                                <h4 className='text-4xl font-bold'>{pulledInvoice?.filter(item => item.status === 'pending')?.length}</h4>
                                <h5 className='text-gray-400'>Total Unpaid Invoices</h5>
                            </div>
                            <XCircleIcon className='w-10 text-red-300' />
                        </div>
                        <div className='flex items-center justify-between bg-white rounded-lg flex-shrink-0 flex-grow p-8'>
                            <div className='space-y-1'>
                                <h4 className='text-4xl font-bold'>{pulledInvoice?.filter(item => item.status === 'draft')?.length}</h4>
                                <h5 className='text-gray-400'>Total Drafted Invoices</h5>
                            </div>
                            <ClipboardListIcon className='w-10' />
                        </div>
                    </div>

                    <div className='flex items-center justify-between'>
                        <div>
                            <h5 className='text-lg'>Invoice History</h5>
                            <p className='text-gray-400 text-xs mt-2'>Lorem ipsum dolor sit amet, consectetur</p>
                        </div>
                        <button onClick={handleOpenDrawer} className='bg-[#1EAAE7] text-white px-2 py-2 rounded-sm'>CREATE INVOICE</button>
                    </div>

                    <div className='bg-white rounded-lg px-5 py-10 mb-10'>
                        <div className='text-right my-5'>
                            <div className="relative text-gray-600 focus-within:text-gray-400">
                                <span className="absolute inset-y-0 right-5 flex items-center">
                                    <button className="p-1 focus:outline-none focus:shadow-outline">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4">
                                            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                        </svg>
                                    </button>
                                </span>
                                <input onChange={handleSearch} type="search" className="px-3 py-3 text-sm text-white bg-gray-100 rounded-full pl-10 focus:outline-none focus:text-gray-900" placeholder="Search recipient" />
                            </div>
                        </div>
                        <Table
                            columns={invoice_col}
                            dataSource={pulledInvoice
                                ?.map((item, index) => {
                                    const i = index > 9 ? `${index}`[1] : index
                                    return { ...item, color: colorList[i] }
                                })
                                ?.sort((a, b) => (new Date(b.created_at)) - (new Date(a.created_at)))
                                .filter(item => item.recipient.includes(search))
                            }
                            loading={pullInvoiceLoading} size='large' rowKey={'created_at'} bordered={false} scroll={{ x: true }}
                        />
                    </div>
                    <CreateInvoice visible={visible} handleCloseDrawer={handleCloseDrawer} />
                    <CreateInvoice visible={updateVisible} handleCloseDrawer={handleCloseUpdateDrawer} updateData={updateData} />

                </div>
            </Layout>
        </InvoiceContext>
    )
}

export default Invoice