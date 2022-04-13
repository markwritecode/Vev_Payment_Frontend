import { Avatar } from 'antd'
import { useState } from 'react'
import { BsClock, BsCode } from 'react-icons/bs'
import { DiCodepen } from 'react-icons/di'
import { FiFeather } from 'react-icons/fi'
import { formatDateAndTime } from '../../utils/helperFunctions'
import ActivityDetails from './ActivityDetails'

const IndividualActivity = ({ activity }) => {

    const [visible, setVisible] = useState(false)

    const openActivityDetails = () => {
        setVisible(true)
    }

    const closeActivityDetails = () => {
        setVisible(false)
    }

    return (
        <div className='flex items-center gap-6 relative z-10 cursor-pointer hover:bg-gray-50'>
            <div className='border-l-[1px] h-full absolute left-4 -z-10' />
            <div className='text-white'>
                {
                    activity.type === 'invoicing' ?
                        <div className='rounded-full p-2 bg-cyan-300'>
                            <BsCode className='h-4 w-4' />
                        </div> : activity.actions.includes('issue') ?
                            <div className='rounded-full p-2 bg-[#5253aac0]'>
                                <DiCodepen className='h-4 w-4' />
                            </div> :
                            <div className='rounded-full p-2 bg-green-500'>
                                <FiFeather className='h-4 w-4' />
                            </div>
                }
            </div>
            <div className='py-10'>
                <Avatar
                    key={activity.id}
                    shape='circle'
                    src={`https://i.pravatar.cc/600?img=${activity.id}`}
                    size={50} />
            </div>
            <div className='grid grid-cols-5 items-center lg:items-start w-full py-10 border-b-[0.5px] border-gray-200' onClick={openActivityDetails}>
                <div className='col-span-2'>
                    <h3 className='font-medium'>{activity.owner}</h3>
                    <h5 className='text-gray-400'>{`#${activity.reference_number}`}</h5>
                </div>
                <div className='col-span-2'>
                    <h4 className='text-[#5254AA] font-medium'>{activity.title}</h4>
                    <h5 className='font-light text-gray-400'>
                        {activity.message}
                        <br />
                        {`#${activity.reference_number}`}
                        <span className='ml-3'>
                            <span
                                className={`border-[1px] rounded-sm mx-1 px-1 
                                                                ${activity.action === 'send' ? 'border-purple-500 bg-purple-200 text-purple-500' :
                                        activity.action === 'research' ? 'border-orange-500 bg-orange-100 text-orange-500' : 'border-green-500 bg-green-200 text-green-500'}`}>
                                {activity.action}
                            </span>
                        </span>
                    </h5>
                </div>
                <div className='col-span-1 text-gray-400 font-light flex items-center gap-3 ml-auto'>
                    <BsClock />
                    <span>{formatDateAndTime(activity.created_at)}</span>
                </div>
            </div>
            {visible && <ActivityDetails visible={visible} closeActivityDetails={closeActivityDetails} activity={activity} />}
        </div>
    )
}

export default IndividualActivity