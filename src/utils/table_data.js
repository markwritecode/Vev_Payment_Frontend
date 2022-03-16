export const invoice_col = [
    {
        title: 'ID Invoice',
        dataIndex: 'id_invoice',
        key: 'id_invoice'
    },
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date'
    },
    {
        title: 'Recipient',
        dataIndex: 'recipient',
        key: 'recipient'
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email'
    },
    {
        title: 'Service Type',
        dataIndex: 'service_type',
        key: 'service_type'
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: status => {
            return (
                <button className={`rounded-full p-3 text-white ${status === 'Pending' ? 'bg-yellow-500' : status === 'Active' ? 'bg-green-500' : 'bg-gray-500'}`}>{status}</button>
            )
        }
    },
    {
        title: '',
        key: 'actions'
    }
]

export const invoice_dummy_data = [
    { id_invoice: '930453', date: 'June 2, 2022, 08:20 AM', recipient: 'John Paul', email: 'johnpaul@yahoo.com', service_type: 'Goods', status: 'Pending' },
    { id_invoice: '435476', date: 'April 17, 2022, 10:45 PM', recipient: 'Lahm Putin', email: 'lahmputin@gmail.com', service_type: 'Service', status: 'Active' },
    { id_invoice: '234545', date: 'December 29, 2022, 12:28 AM', recipient: 'John Paul', email: 'johnpaul@yahoo.com', service_type: 'Goods', status: 'Cancelled' },

    { id_invoice: '930452', date: 'June 2, 2022, 08:20 AM', recipient: 'John Paul', email: 'johnpaul@yahoo.com', service_type: 'Goods', status: 'Pending' },
    { id_invoice: '435473', date: 'April 17, 2022, 10:45 PM', recipient: 'Lahm Putin', email: 'lahmputin@gmail.com', service_type: 'Service', status: 'Active' },
    { id_invoice: '234544', date: 'December 29, 2022, 12:28 AM', recipient: 'John Paul', email: 'johnpaul@yahoo.com', service_type: 'Goods', status: 'Cancelled' }
]