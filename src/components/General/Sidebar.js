import { ClipboardListIcon, ServerIcon } from '@heroicons/react/outline'
import { NavLink } from 'react-router-dom'

const Sidebar = ({ expanded }) => {

    return (
        <aside className={`fixed z-20 h-full ${!expanded && 'hidden'} top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75`}>
            <div className='relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0'>
                <div className='flex-1 flex flex-col pt-5 pb-4 overflow-y-auto'>
                    <div className='flex-1 px-3 bg-white divide-y space-y-1'>
                        <ul className='space-y-4 pb-2'>
                            <li>
                                <NavLink to={'/'} className={({ isActive }) => `${isActive && 'text-[#1EAAE7]'} text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group`}>
                                    <ServerIcon className='h-6 w-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75' />
                                    <span className='ml-3 flex-1 whitespace-nowrap'>Dashboard</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/invoice'} className={({ isActive }) => `${isActive && 'text-[#1EAAE7]'} text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group`}>
                                    <ClipboardListIcon className='h-6 w-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75' />
                                    <span className='ml-3 flex-1 whitespace-nowrap'>Invoice</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar