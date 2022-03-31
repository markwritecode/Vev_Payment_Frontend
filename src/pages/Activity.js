import Layout from '../components/General/Layout'
import { dummy_data } from '../utils/dummy'
import IndividualActivity from '../components/Activity/IndividualActivity'

const Activity = () => {
    return (
        <Layout>
            <div className='h-full w-full px-10 py-10 bg-white'>
                <h3 className='font-medium'>Today</h3>
                {dummy_data.map(activity => <IndividualActivity activity={activity} key={activity.id} />)}
            </div>
        </Layout>
    )
}

export default Activity