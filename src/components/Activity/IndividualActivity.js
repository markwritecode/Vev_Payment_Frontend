import { Avatar } from "antd"
import { BsClock, BsCode } from "react-icons/bs"
import { DiCodepen } from "react-icons/di"
import { FiFeather } from "react-icons/fi"

const IndividualActivity = ({ activity }) => {
    return (
        <div className='flex items-center gap-6 relative z-10'>
            <div className='border-l-[1px] h-full absolute left-4 -z-10' />
            <div className='text-white'>
                {
                    activity.actions.includes('solve') ?
                        <div className='rounded-full p-2 bg-green-500'>
                            <BsCode className='h-4 w-4' />
                        </div> : activity.actions.includes('issue') ?
                            <div className='rounded-full p-2 bg-[#5253aac0]'>
                                <DiCodepen className='h-4 w-4' />
                            </div> :
                            <div className='rounded-full p-2 bg-cyan-300'>
                                <FiFeather className='h-4 w-4' />
                            </div>
                }
            </div>
            <div className='py-10'>
                <Avatar.Group maxCount={1} maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
                    {
                        activity.users.map(user => <Avatar
                            key={user.avatar}
                            shape='circle'
                            src={`https://i.pravatar.cc/600?img=${user.avatar}`}
                            size={activity.users.length > 1 ? 25 : 50} />)
                    }
                </Avatar.Group>
            </div>
            <div className='grid grid-cols-5 items-center lg:items-start w-full py-10 border-b-[0.5px] border-gray-200'>
                <div className='col-span-2'>
                    <h3 className='font-medium'>{activity.users.map((user, index) => {
                        const length = activity.users.length
                        if (length <= 1) {
                            return <span key={user.name}>{user.name}</span>
                        } else {
                            return <span key={user.name}>{index === (length - 1) ? `${user.name}.` : index === (length - 2) ? `${user.name} & ` : `${user.name}, `}</span>
                        }
                    })}</h3>
                    <h5 className='text-gray-400'>Session started</h5>
                </div>
                <div className='col-span-2'>
                    <h4 className='text-[#5254AA] font-medium'>{activity.title}</h4>
                    <h5 className='font-light text-gray-400'>
                        from
                        <span className='font-medium'> {activity.from} </span>
                        {activity.id && `#${activity.id}`}
                        <span className='ml-3'>
                            {
                                activity.actions.map(action => {
                                    return (
                                        <span
                                            key={action}
                                            className={`border-[1px] rounded-sm mx-1 px-1 
                                                                ${action === 'issue' ? 'border-purple-500 bg-purple-200 text-purple-500' :
                                                    action === 'research' ? 'border-orange-500 bg-orange-100 text-orange-500' : 'border-green-500 bg-green-200 text-green-500'}`}>
                                            {action}
                                        </span>
                                    )
                                })
                            }
                        </span>
                    </h5>
                </div>
                <div className='col-span-1 text-gray-400 font-light flex items-center gap-3 ml-auto'>
                    <BsClock />
                    <span>{activity.time}</span>
                </div>
            </div>
        </div>
    )
}

export default IndividualActivity