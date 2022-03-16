import { ArrowRightIcon, BellIcon } from '@heroicons/react/outline'
import { MenuAlt3Icon } from '@heroicons/react/solid'

const Header = ({ expanded, toggleExpansion }) => {
    return (
        <header className='w-full flex items-center justify-between py-8 space-x-10 sticky top-0 bg-[#F9F9F9]'>
            {
                expanded ?
                    <MenuAlt3Icon onClick={toggleExpansion} className='w-8 h-8 text-[#1EAAE7] cursor-pointer' /> :
                    <ArrowRightIcon onClick={toggleExpansion} className='w-6 h-6 font-thin text-[#1EAAE7] cursor-pointer' />
            }
            <div className='flex flex-shrink-0 items-center space-x-1 lg:space-x-10 text-black'>

                <div className='bg-white rounded-full p-2'>
                    <BellIcon className='h-8 w-8 text-gray-500' />
                </div>

                <div className='flex items-center space-x-4'>
                    <div className='lg:flex flex-col items-end hidden'>
                        <div className='text-md font-medium'>Hello, Franklin</div>
                        <div className='text-xs text-gray-500 font-regular'>Super Admin</div>
                    </div>

                    <div className='h-16 w-16 rounded-full cursor-pointer bg-gray-300'></div>
                </div>
            </div>
        </header>
    )
}

export default Header