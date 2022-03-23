import { formatDate } from './helperFunctions'

export const invoice_col = [
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
        key: 'recipient'
    },
    {
        title: 'Email',
        dataIndex: 'recipient',
        key: 'email'
    },
    {
        title: 'Service Type',
        dataIndex: 'ref_number',
        key: 'service_type'
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: status => {
            return (
                <button className={`rounded-full p-3 text-white ${status === 'pending' ? 'bg-yellow-500' : status === 'active' ? 'bg-green-500' : 'bg-gray-500'}`}>{status}</button>
            )
        }
    }
]