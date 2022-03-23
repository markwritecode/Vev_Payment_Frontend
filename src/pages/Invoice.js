import { CheckCircleIcon, ClipboardListIcon, DotsHorizontalIcon, SearchIcon, XCircleIcon } from '@heroicons/react/outline'
import { Button, Dropdown, Input, Menu, Space, Table } from 'antd'
import { useState } from 'react'
import Layout from '../components/General/Layout'
import CreateInvoice from '../components/Invoicing/CreateInvoice'
import InvoiceContext from '../contexts/invoice'
import { useDeleteInvoice, usePullInvoice } from '../hooks/invoice/useInvoice'
import { formatDate } from '../utils/helperFunctions'
import Highlighter from 'react-highlight-words';

const Invoice = () => {

    const [visible, setVisible] = useState(false)
    const [state, setState] = useState({
        searchText: '',
        searchedColumn: '',
    })

    const handleOpenDrawer = () => setVisible(true)
    const handleCloseDrawer = () => setVisible(false)

    const { pullInvoiceLoading, pulledInvoice } = usePullInvoice()
    const { mutate: _deleteInvoice } = useDeleteInvoice()

    const handleDeleteInvoice = invoice_ref => _deleteInvoice({ invoice_ref })

    const menu = item => {
        return (
            <Menu>
                <Menu.Item
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

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setState({
            searchText: selectedKeys[0],
            searchedColumn: dataIndex,
        });
    };

    const handleReset = clearFilters => {
        clearFilters();
        setState(prev => {
            return { ...prev, searchText: '' }
        });
    };


    const getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={node => {
                        state.searchInput = node;
                    }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        className='bg-blue-400'
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button onClick={() => {
                        confirm({ closeDropdown: false })
                        setState({
                            searchText: selectedKeys[0],
                            searchedColumn: dataIndex,
                        })
                        handleReset(clearFilters)
                    }}
                        size="small" style={{ width: 90 }}>
                        Reset
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: filtered => <SearchIcon className='h-5 w-5' />,
        onFilter: (value, record) =>
            record[dataIndex]
                ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
                : '',
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => state.searchInput.select(), 100);
            }
        },
        render: text =>
            state.searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[state.searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    })

    const invoice_col = [
        {
            title: 'ID Invoice',
            dataIndex: 'id',
            key: 'id'
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
            ...getColumnSearchProps('recipient')
        },
        {
            title: 'Email',
            dataIndex: 'recipient',
            key: 'email'
        },
        {
            title: 'Reference No.',
            dataIndex: 'ref_number',
            key: 'ref_number'
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
                        <DotsHorizontalIcon className='h-6 w-6 cursor-pointer' />
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
                                <h4 className='text-4xl font-bold'>{pulledInvoice?.length}</h4>
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
                        <Table columns={invoice_col} dataSource={pulledInvoice?.sort((a, b) => (new Date(b.created_at)) - (new Date(a.created_at)))} loading={pullInvoiceLoading} size='large' rowKey={'created_at'} bordered={false} scroll={{ x: true }} />
                    </div>
                    <CreateInvoice visible={visible} handleCloseDrawer={handleCloseDrawer} />

                </div>
            </Layout>
        </InvoiceContext>
    )
}

export default Invoice