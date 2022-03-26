import { BellIcon } from '@heroicons/react/outline'
import { MenuAlt3Icon } from '@heroicons/react/solid'

const Header = ({ toggleExpansion }) => {
    return (
        <nav className="bg-white border-b border-gray-200 fixed z-30 w-full">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start">
                        <button onClick={toggleExpansion} className="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded">
                            <MenuAlt3Icon className='w-6 h-6' />
                        </button>
                    </div>
                    <div className='flex flex-shrink-0 items-center space-x-1 lg:space-x-10 text-black'>
                        <div className='bg-white rounded-full p-2'>
                            <BellIcon className='h-8 w-8 text-gray-500' />
                        </div>
                        <div className='flex items-center space-x-4'>
                            <div className='lg:flex flex-col items-end hidden'>
                                <div className='text-md font-medium'>Hello, Franklin</div>
                                <div className='text-xs text-gray-500 font-regular'>Super Admin</div>
                            </div>

                            <div className='h-10 w-10 rounded-full cursor-pointer bg-gray-300'></div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header