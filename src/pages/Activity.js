import Layout from '../components/General/Layout'
import IndividualActivity from '../components/Activity/IndividualActivity'
import { HiDotsVertical } from 'react-icons/hi'
import { RiRefreshLine } from 'react-icons/ri'
import { usePullActivity } from '../hooks/activity/useActivity'
import Loading from '../components/General/Loading'

const Activity = () => {

    const { pulledActivity, pullActivityLoading } = usePullActivity()

    if (pullActivityLoading) return <Loading />

    return (
        <Layout>
            <div className='h-full w-full px-10 py-10 bg-white overflow-y-auto'>
                <div className='flex items-center justify-end gap-4'>
                    <div className='bg-[#5253aac0] px-3 py-1 rounded-md text-white'>+</div>
                    <RiRefreshLine className='h-7 w-7 ml-3 text-gray-400' />
                    <HiDotsVertical className='h-7 w-7 text-gray-400' />
                </div>
                <section className='space-y-6'>
                    <div>
                        {/* <h3 className='font-medium'>Today</h3> */}
                        {pulledActivity?.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))?.map(activity => <IndividualActivity activity={activity} key={activity.id} />)}
                    </div>
                    {/* <div>
                        <h3 className='font-medium'>Yesterday</h3>
                        {dummy_data.map(activity => <IndividualActivity activity={activity} key={activity.id} />)}
                    </div>
                    <div>
                        <h3 className='font-medium'>Yesterday</h3>
                        {dummy_data.map(activity => <IndividualActivity activity={activity} key={activity.id} />)}
                    </div> */}
                </section>
            </div>
        </Layout>
    )
}

export default Activity