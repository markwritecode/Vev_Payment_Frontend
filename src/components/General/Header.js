import { Avatar, Dropdown, Menu } from 'antd'
import { FiLogOut } from 'react-icons/fi'
import { HiDotsVertical } from 'react-icons/hi'
import { IoNotificationsOutline } from 'react-icons/io5'
import { RiMenuUnfoldLine, RiMenuFoldLine } from 'react-icons/ri'
import { useAuth } from '../../contexts/auth'

const Header = ({ expanded, toggleExpansion }) => {

    const [, action] = useAuth()

    const menu = () => {
        return (
            <Menu className='w-full'>
                <Menu.Item key='1' onClick={() => action('signout')}>
                    <div className='flex items-center gap-2'>
                        <FiLogOut className='h-5 w-5 text-red-400' />
                        <span>Logout</span>
                    </div>
                </Menu.Item>

            </Menu>
        )
    }

    return (
        <header className='w-full pl-5 space-x-10 sticky top-0 bg-[#F9F9F9]'>
            <div className='flex items-center justify-between w-full py-2 border-b-[1px] border-gray-200'>
                {
                    expanded ?
                        <RiMenuFoldLine onClick={toggleExpansion} className='w-7 h-7 font-thin text-[#1EAAE7] cursor-pointer' /> :
                        <RiMenuUnfoldLine onClick={toggleExpansion} className='w-7 h-7 font-thin text-[#1EAAE7] cursor-pointer' />
                }
                <div className='flex flex-shrink-0 items-center pr-5 space-x-1 lg:space-x-5 text-black'>

                    <div className='hover:bg-white rounded-full p-3 cursor-pointer'>
                        <div className='relative'>
                            <div className='absolute right-0 top-0  bg-red-500 rounded-full'>
                                <span className='text-xs text-white p-1'>12</span>
                            </div>
                            <div className='p-2'>
                                <IoNotificationsOutline className='h-7 w-7 text-gray-500' />
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center space-x-4 cursor-pointer'>
                        <div className='lg:flex flex-col items-end hidden'>
                            <div className='text-md font-medium'>Hello, Franklin</div>
                            <div className='text-xs text-gray-500 font-regular'>45834300</div>
                        </div>

                        <Avatar size={50} src='https://i.pravatar.cc/300' />
                    </div>
                    <Dropdown overlay={menu} trigger={['click']}>
                        <HiDotsVertical onClick={e => e.preventDefault()} className='h-6 w-6 cursor-pointer' />
                    </Dropdown>
                </div>
            </div>
        </header>
    )
}

export default Header