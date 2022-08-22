import { Tabs } from 'antd'
import { useFetcher } from '../hooks/fetcher'
import ApproveMoneyComp from '../components/ApproveMoney'

const { TabPane } = Tabs

const ApproveMoney = () => {

    const { data, isLoading } = useFetcher('payments')
    // const { data: payments } = useFetcher('authorize/payment')
    console.log(data)

    return (
        <div className='sm:px-6 pt-[60px] md:pt-[35px] w-full bg-white h-full'>
            <div className='px-4 md:px-10 py-4 md:py-7'>
                <p className='focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-black text-opacity-50'>Approve Payment</p>
            </div>
            <div className='bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10'>
                <Tabs defaultActiveKey='all'>
                    <TabPane tab='All' key='all'>
                        <ApproveMoneyComp data={data?.payments} loading={isLoading} />
                    </TabPane>
                    <TabPane tab='Sent' key='sent'>
                        <ApproveMoneyComp data={data?.payments?.filter(item => item.status === 'paid')} loading={isLoading} />
                    </TabPane>
                </Tabs>
            </div>
        </div>
    )
}

export default ApproveMoney