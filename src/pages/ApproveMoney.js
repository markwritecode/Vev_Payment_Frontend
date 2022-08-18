import { Tabs } from 'antd'
import ApproveMoneyComp from '../components/ApproveMoney'

const { TabPane } = Tabs

const ApproveMoney = () => {

    const data = [
        { img: 'https://images.unsplash.com/photo-1552788960-65fcafe071a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1285&q=80', name: 'Kendrick Babies', description: 'Sandals 4pc', date: '12/8/2022 9:30 Pm', payment: 'PayPal', status: 'pending', amount: '$500.00' },
        { img: 'https://images.unsplash.com/photo-1496086363406-27fbdabb8593?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2706&q=80', name: 'Romania Facials', description: 'Facial Cream 2pc', date: '12/8/2022 9:30 Pm', payment: 'Vev', status: 'paid', amount: '$500.00' },
        { img: 'https://images.unsplash.com/photo-1616640045164-deb3b104c4b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80', name: 'Dior cloths', description: 'Facial Cream 2pc', date: '12/8/2022 9:30 Pm', payment: 'Master Card', status: 'pending', amount: '$500.00' },
        { img: 'https://images.unsplash.com/photo-1615921511258-0aa98c84d400?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80', name: 'Burger King', description: 'Facial Cream 2pc', date: '12/8/2022 9:30 Pm', payment: 'Visa', status: 'failed', amount: '$500.00' },
        { img: 'https://images.unsplash.com/photo-1615719413546-198b25453f85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1336&q=80', name: 'Dominos Pizza', description: 'Facial Cream 2pc', date: '12/8/2022 9:30 Pm', payment: 'PayPal', status: 'pending', amount: '$500.00' }
    ]

    return (
        <div className='sm:px-6 pt-[60px] md:pt-[35px] w-full bg-white h-full'>
            <div className='px-4 md:px-10 py-4 md:py-7'>
                <p className='focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-black text-opacity-50'>Approve Payment</p>
            </div>
            <div className='bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10'>
                <Tabs defaultActiveKey='all'>
                    <TabPane tab='All' key='all'>
                        <ApproveMoneyComp data={data} />
                    </TabPane>
                    <TabPane tab='Sent' key='sent'>
                        <ApproveMoneyComp data={data?.filter(item => item.status === 'paid')} />
                    </TabPane>
                </Tabs>
            </div>
        </div>
    )
}

export default ApproveMoney