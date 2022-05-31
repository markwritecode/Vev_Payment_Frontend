import { RiFolderOpenFill } from 'react-icons/ri'

const EmptyState = ({ color }) => {
    return (
        <div className={`${color === 'white' ? 'text-white' : 'text-black'} pt-5`}>
            <RiFolderOpenFill className='h-12 w-12' />
            <p>No data</p>
        </div>
    )
}

export default EmptyState