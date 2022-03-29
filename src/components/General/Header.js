import { Avatar } from 'antd'
import { IoNotificationsOutline } from 'react-icons/io5'
import { RiMenuUnfoldLine, RiMenuFoldLine } from 'react-icons/ri'

const Header = ({ expanded, toggleExpansion }) => {
    return (
        <header className='w-full px-5 space-x-10 sticky top-0 bg-[#F9F9F9]'>
            <div className='flex items-center justify-between w-full py-5 border-b-[1px] border-gray-200'>
                {
                    expanded ?
                        <RiMenuFoldLine onClick={toggleExpansion} className='w-7 h-7 font-thin text-[#1EAAE7] cursor-pointer' /> :
                        <RiMenuUnfoldLine onClick={toggleExpansion} className='w-7 h-7 font-thin text-[#1EAAE7] cursor-pointer' />
                }
                <div className='flex flex-shrink-0 items-center space-x-1 lg:space-x-10 text-black'>

                    <div className='bg-white rounded-full p-2'>
                        <IoNotificationsOutline className='h-7 w-7 text-gray-500' />
                    </div>

                    <div className='flex items-center space-x-4'>
                        <div className='lg:flex flex-col items-end hidden'>
                            <div className='text-md font-medium'>Hello, Franklin</div>
                            <div className='text-xs text-gray-500 font-regular'>Super Admin</div>
                        </div>

                        <Avatar size={'large'} className='bg-[#1EAAE7] uppercase'>MK</Avatar>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header