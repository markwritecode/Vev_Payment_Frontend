import { Avatar } from "antd"

const RightDashboard = () => {
    return (
        <>
            <h3 className='text-lg text-gray-700'>Transactions</h3>

            <div className='overflow-scroll h-96 w-full space-y-3'>
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(item => {
                        return (
                            <div key={item} className='grid grid-cols-8 items-center bg-[#F9F9F9] p-3 rounded-lg'>
                                <div className='flex items-center justify-between col-span-7'>
                                    <div className='flex items-center gap-6'>
                                        <Avatar shape='square' size='large' >OP</Avatar>
                                        <div className=''>
                                            <h3 className=''>Live session booking</h3>
                                            <h5 className=''>Jul 2, 2021.</h5>
                                        </div>
                                    </div>
                                    <p>-$64.00</p>
                                </div>
                                <div className='text-right col-span-1 mx-auto'>
                                    <p className='bg-yellow-100 text-yellow-400 px-2 py-1 rounded-lg font-semibold'>pending</p>
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