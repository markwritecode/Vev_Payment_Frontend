import { Avatar } from "antd"

const data = [
    { title: 'Live session booking', date: 'Jul 2, 2021', status: 'pending', initial: 'OP', price: '64.00', id: '64' },
    { title: 'Metafy gift card', date: 'Jun 29, 2021', status: 'pending', initial: 'SL', price: '139.90', id: '59' },
    { title: 'Training plan book', date: 'Aug 5, 2021', status: 'completed', initial: 'HG', price: '70.00', id: '47' },
    { title: 'Metafy refund', date: 'Sep 8, 2019', status: 'pending', initial: 'ID', price: '365.10', id: '8' },
    { title: 'Metafy credits', date: 'Jan 30, 2009', status: 'completed', initial: 'KE', price: '5.00', id: '1' },
    { title: 'Live session booking', date: 'Feb 24, 2021', status: 'pending', initial: 'SR', price: '10.01', id: '16' },
    { title: 'Metafy gift card', date: 'Mar 19, 2021', status: 'pending', initial: 'GP', price: '0.00', id: '34' },
    { title: 'Training plan book', date: 'Nov 4, 2021', status: 'pending', initial: 'EW', price: '72.09', id: '51' },
    { title: 'Metafy refund', date: 'Dec 8, 2021', status: 'completed', initial: 'QF', price: '823.43', id: '45' },
]

const RightDashboard = () => {
    return (
        <>
            <h3 className='text-lg text-gray-700'>Transactions</h3>

            <div className='overflow-scroll h-[44rem] w-full space-y-3'>
                {
                    data.map(item => {
                        return (
                            <div key={item.id} className='grid grid-cols-1 lg:grid-cols-8 items-center bg-[#F9F9F9] gap-2 px-3 py-5 rounded-lg'>
                                <div className='flex items-center justify-between col-span-7'>
                                    <div className='flex items-center gap-6'>
                                        <Avatar shape='square' src={`https://i.pravatar.cc/600?img=${item.id}`} size={64}>{item.initial}</Avatar>
                                        <div className=''>
                                            <h3 className='font-medium text-lg text-gray-500'>{item.title}</h3>
                                            <h5 className='text-gray-400 font-medium'>{item.date}.</h5>
                                        </div>
                                    </div>
                                    <p className={`${item.status === 'pending' ? 'text-gray-400' : 'text-gray-600'}`}>
                                        {item.status === 'pending' ? '-' : '+'}${item.price}
                                    </p>
                                </div>
                                <div className='col-span-1 mr-auto lg:mx-auto'>
                                    <p className={`${item.status === 'pending' ? 'bg-yellow-50 text-yellow-400' : 'bg-green-50 text-green-400'} px-2 py-1 rounded-lg font-medium`}>
                                        {item.status}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default RightDashboard