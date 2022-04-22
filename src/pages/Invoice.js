import { HiOutlineViewGridAdd, HiDotsHorizontal, HiOutlineCheck } from 'react-icons/hi'
import { Avatar, Dropdown, Menu, Popconfirm, Table } from 'antd'
import { useState } from 'react'
import Loading from '../components/General/Loading'
import CreateInvoice from '../components/Invoicing/CreateInvoice'
import InvoiceContext from '../contexts/invoice'
import { useDeleteInvoice, usePullInvoice } from '../hooks/invoice'
import { currencyFormatter, formatDate, formatDateNum } from '../utils/helperFunctions'
import { colorList } from '../utils/helperVariables'
import { BsPencil } from 'react-icons/bs'
import { RiFileCopyLine } from 'react-icons/ri'

const Invoice = () => {

    const [visible, setVisible] = useState(false)
    const [search, setSearch] = useState('')
    const [updateData, setUpdateData] = useState(null)
    const [updateVisible, setUpdateVisible] = useState(false)

    const handleOpenDrawer = () => setVisible(true)
    const handleCloseDrawer = clearFields => {
        setVisible(false)
        clearFields()
    }

    const handleOpenUpdateDrawer = () => setUpdateVisible(true)
    const handleCloseUpdateDrawer = clearFields => {
        setUpdateVisible(false)
        setUpdateData(null)
        clearFields()
    }

    const { pullInvoiceLoading, pulledInvoice } = usePullInvoice()
    const { mutate: _deleteInvoice } = useDeleteInvoice()

    const handleDeleteInvoice = invoice_ref => _deleteInvoice({ invoice_ref })

    const handleSearch = e => setSearch(e.target.value)

    const menu = item => {
        return (
            <Menu className='table-menu-confirm'>
                <Menu.Item
                    onClick={handleOpenUpdateDrawer}
                    key='2'>
                    Edit
                </Menu.Item>
                {
                    item.status === 'draft' &&
                    <Menu.Item
                        key='1'>
                        <Popconfirm
                            title="Are you sure you want to delete invoice?"
                            onConfirm={() => handleDeleteInvoice(item.ref_number)}
                            okText="Yes"
                            cancelText="No"
                        >Delete
                        </Popconfirm>
                    </Menu.Item>
                }
            </Menu>
        )
    }

    const invoice_col = [
        {
            title: 'No',
            dataIndex: 'ref_number',
            key: 'ref_number',
            render: ref_number => `#${ref_number}`
        },
        {
            title: 'Date',
            dataIndex: 'created_at',
            key: 'created_at',
            render: created_at => (
                <>
                    <span className='hidden lg:block'>{formatDate(created_at)}</span>
                    <span className='lg:hidden'>{formatDateNum(created_at)}</span>
                </>
            )
        },
        {
            title: 'Client',
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
                        >
                            {recipient[0]}
                        </Avatar>
                        <span>{recipient}</span>
                    </div>
                )
            }
        },
        {
            title: 'Amount',
            dataIndex: 'total',
            key: 'total',
            render: total => `₦${currencyFormatter(total)}`
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: status => {
                return (
                    <button
                        className={`rounded-full px-3 py-1 flex items-center gap-1 
                    ${status === 'draft' ? 'text-green-400 bg-green-50' : status === 'pending' ? 'text-blue-400 bg-blue-50' : ''} `}>
                        {status === 'draft' ? <HiOutlineCheck className='h-3 w-3' /> : <div className='h-2 w-2 bg-blue-400 rounded-full' />}
                        {status}
                    </button>
                )
            }
        },
        {
            title: '',
            key: 'actions',
            render: item => {
                return (
                    <Dropdown overlay={() => menu(item)} trigger={['click']}>
                        <HiDotsHorizontal
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

    if (pullInvoiceLoading) return <Loading />

    const _pulledInvoice = pulledInvoice?.map(item => {
        return { ...item.invoice, items: item.items }
    })

    const calculateTotal = invoices => {
        const amount = invoices.reduce((curr, val) => {
            return curr + Number(val.total)
        }, 0)
        return Number(amount).toFixed(2).split('.')
    }

    return (
        <InvoiceContext>
            <div className='h-full w-full p-3 lg:pl-0 py-5 space-y-8' id='Invoice-Page'>
                <h3 className='text-4xl font-semibold'>Invoices</h3>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>

                    <div className='lg:flex items-center justify-between bg-white rounded-lg flex-shrink-0 flex-grow p-8 space-y-4'>
                        <div className='lg:w-1/2'>
                            <h5 className='text-gray-400 uppercase'>Total Invoices</h5>
                            <h4 className='text-4xl lg:font-bold'><span className='text-gray-400 text-lg'>$</span>
                                {currencyFormatter(calculateTotal(_pulledInvoice)[0])}
                                <span className='opacity-60'>.{calculateTotal(_pulledInvoice)[1]}</span>
                            </h4>
                            <div className={`rounded-full w-fit px-2 flex items-center gap-1 mt-2 text-green-400 bg-green-100`}>
                                +10% since last month
                            </div>
                        </div>

                        <div className='lg:w-1/2 space-y-4'>
                            <div>
                                <div className={`flex items-center gap-1 text-blue-400`}>
                                    <div className='h-2 w-2 bg-blue-400 rounded-full' /> Pending
                                </div>
                                <h4 className='text-4xl lg:font-bold'>
                                    <span className='text-gray-400 text-lg'>$</span>
                                    {currencyFormatter(calculateTotal(_pulledInvoice?.filter(item => item.status === 'pending'))[0])}
                                    <span className='opacity-60'>.{calculateTotal(_pulledInvoice?.filter(item => item.status === 'pending'))[1]}</span>
                                </h4>
                            </div>

                            <div>
                                <div className={`flex items-center gap-1 text-yellow-400`}>
                                    <div className='h-2 w-2 bg-yellow-400 rounded-full' /> In drafts
                                </div>
                                <h4 className='text-4xl lg:font-bold'>
                                    <span className='text-gray-400 text-lg'>$</span>
                                    {currencyFormatter(calculateTotal(_pulledInvoice?.filter(item => item.status === 'draft'))[0])}
                                    <span className='opacity-60'>.{calculateTotal(_pulledInvoice?.filter(item => item.status === 'draft'))[1]}</span>
                                </h4>
                            </div>
                        </div>
                    </div>

                    <div className='bg-white rounded-lg flex-grow p-8 space-y-4'>
                        <div className='sm:flex items-center justify-between space-y-4'>
                            <div className='flex items-center gap-4'>
                                <Avatar shape='circle' size={32} src='https://i.pravatar.cc/600?img=2' />
                                <h4 className='text-lg text-gray-400 font-medium'>quickpay.to/<span className='text-gray-800'>publicnote</span></h4>
                            </div>
                            <div className='flex items-center gap-4'>
                                <BsPencil className='text-blue-400 w-5 h-5' />
                                <RiFileCopyLine className='text-blue-400 w-5 h-5' />
                            </div>
                        </div>
                        <div className='bg-blue-50 p-3 text-gray-600'>
                            Quick pay lets you receive payments on the fly. You can generate invoice or share the payment link to the request payment.
                            <p className='text-blue-500 mt-2 font-medium'>LEARN MORE</p>
                        </div>
                        {/* <div className='space-y-1'>
                            <h4 className='text-4xl font-bold'>{_pulledInvoice?.filter(item => item.status === 'paid')?.length}</h4>
                            <h5 className='text-gray-400'>Paid Invoices</h5>
                        </div>
                        <IoMdCheckmarkCircleOutline className='h-10 w-10 text-green-300' /> */}
                    </div>
                    {/* <div className='flex items-center justify-between bg-white rounded-lg flex-shrink-0 flex-grow p-8'>
                        <div className='space-y-1'>
                            <h4 className='text-4xl font-bold'>{_pulledInvoice?.filter(item => item.status === 'pending')?.length}</h4>
                            <h5 className='text-gray-400'>Total Unpaid Invoices</h5>
                        </div>
                        <IoMdCloseCircleOutline className='h-10 w-10 text-red-300' />
                    </div>
                    <div className='flex items-center justify-between bg-white rounded-lg flex-shrink-0 flex-grow p-8'>
                        <div className='space-y-1'>
                            <h4 className='text-4xl font-bold'>{_pulledInvoice?.filter(item => item.status === 'draft')?.length}</h4>
                            <h5 className='text-gray-400'>Total Drafted Invoices</h5>
                        </div>
                        <HiOutlineClipboardList className='h-10 w-10' />
                    </div> */}
                </div>

                <div className='flex items-center justify-between pt-8'>
                    <div>
                        <h5 className='text-xl font-medium'>Invoice History</h5>
                        <p className='text-gray-400 text-sm mt-2 hidden lg:block'>List of all your recent transactions</p>
                    </div>
                    <button onClick={handleOpenDrawer} className='bg-[#1EAAE7] text-white px-3 py-3 lg:px-6 lg:py-4 rounded-md flex items-center gap-2'>
                        <HiOutlineViewGridAdd className='h-4 w-4' />
                        <span className='text-xs lg:text-sm'>NEW INVOICE</span>
                    </button>
                </div>

                <div className='rounded-lg mb-10 w-full'>
                    <div className='text-right my-5'>
                        <div className="relative text-gray-600 focus-within:text-gray-400">
                            <span className="absolute inset-y-0 left-5 flex items-center">
                                <button className="p-1 focus:outline-none focus:shadow-outline">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4">
                                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                    </svg>
                                </button>
                            </span>
                            <input
                                onChange={handleSearch}
                                type="search"
                                className="w-full px-3 py-4 text-white bg-white rounded-md pl-12 focus:outline-none focus:text-gray-900"
                                placeholder="Search recipient"
                            />
                        </div>
                    </div>
                    <Table
                        columns={invoice_col}
                        dataSource={_pulledInvoice
                            ?.map((item, index) => {
                                const i = index > 9 ? `${index}`[1] : index
                                return { ...item, color: colorList[i] }
                            })
                            ?.sort((a, b) => (new Date(b.created_at)) - (new Date(a.created_at)))
                            .filter(item => item.recipient.includes(search))
                        }
                        loading={pullInvoiceLoading} size='large' rowKey={'created_at'} bordered={false}
                    />
                </div>
                {visible && <CreateInvoice visible={visible} handleCloseDrawer={handleCloseDrawer} />}
                {updateVisible && <CreateInvoice visible={updateVisible} handleCloseDrawer={handleCloseUpdateDrawer} updateData={updateData} />}

            </div>
        </InvoiceContext>
    )
}

export default Invoice