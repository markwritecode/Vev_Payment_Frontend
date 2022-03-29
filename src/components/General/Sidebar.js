import { NavLink } from 'react-router-dom'
import { GiMoneyStack } from 'react-icons/gi'
import { RiDashboardFill } from 'react-icons/ri'
import { FaFileInvoice } from 'react-icons/fa'
import { FiChevronRight } from 'react-icons/fi'

const Sidebar = ({ expanded }) => {

    return (
        <>
            {/* View for bigger screen */}
            <aside className={`flex flex-col ${expanded ? 'w-64' : 'w-14'} h-full text-black transition-all duration-300 bg-[#F9F9F9] border-none py-20 hidden lg:flex`}>
                <div className='overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow'>
                    <div className='flex flex-col space-y-10'>
                        <NavLink to={'/'} className={({ isActive }) => `${isActive && 'text-[#1EAAE7]'} flex flex-row items-center text-gray-500 gap-10`}>
                            <span className='inline-flex justify-center items-center ml-4'>
                                <RiDashboardFill className='h-6 w-6' />
                            </span>
                            <span className='ml-2 text-lg font-normal tracking-wide truncate'>Dashboard</span>
                            <FiChevronRight className={`${expanded ? 'block' : 'hidden'} h-5 w-5 font-thin ml-auto`} />
                        </NavLink>
                        <NavLink to={'/invoice'} className={({ isActive }) => `${isActive && 'text-[#1EAAE7]'} flex flex-row items-center text-gray-500 gap-10`}>
                            <span className='inline-flex justify-center items-center ml-4'>
                                <FaFileInvoice className='h-6 w-6' />
                            </span>
                            <span className='ml-2 text-lg font-normal tracking-wide truncate'>Invoice</span>
                            <FiChevronRight className={`${expanded ? 'block' : 'hidden'} h-5 w-5 font-thin ml-auto`} />
                        </NavLink>
                        <NavLink to={'/transactions'} className={({ isActive }) => `${isActive && 'text-[#1EAAE7]'} flex flex-row items-center text-gray-500 gap-10`}>
                            <span className='inline-flex justify-center items-center ml-4'>
                                <GiMoneyStack className='h-6 w-6' />
                            </span>
                            <span className='ml-2 text-lg font-normal tracking-wide truncate'>Transaction</span>
                            <FiChevronRight className={`${expanded ? 'block' : 'hidden'} h-5 w-5 font-thin ml-auto`} />
                        </NavLink>
                    </div>
                    <p className={`mb-14 px-5 py-3 ${expanded ? 'block' : 'hidden'} text-center text-xs`}>Copyright @2022</p>
                </div>
            </aside>

            {/* View for smaller screen */}
            <aside className={`flex flex-col ${expanded ? 'w-64 px-5' : 'w-0'} h-full text-black transition-all duration-300 bg-[#F9F9F9] border-none py-20 lg:hidden fixed top-20 left-0 z-10`}>
                <div className='overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow'>
                    <div className='flex flex-col space-y-10'>

                        <NavLink to={'/'} className={({ isActive }) => `${isActive && 'text-[#1EAAE7]'} flex flex-row items-center text-gray-500 gap-2`}>
                            <span className='inline-flex justify-center items-center ml-4'>
                                <RiDashboardFill className='h-6 w-6' />
                            </span>
                            <span className='ml-2 text-xs font-normal tracking-wide'>Dashboard</span>
                            <FiChevronRight className={`${expanded ? 'block' : 'hidden'} h-5 w-5 font-thin ml-auto`} />
                        </NavLink>
                        <NavLink to={'/invoice'} className={({ isActive }) => `${isActive && 'text-[#1EAAE7]'} flex flex-row items-center text-gray-500 gap-2`}>
                            <span className='inline-flex justify-center items-center ml-4'>
                                <FaFileInvoice className='h-6 w-6' />
                            </span>
                            <span className='ml-2 text-xs font-normal tracking-wide'>Invoice</span>
                            <FiChevronRight className={`${expanded ? 'block' : 'hidden'} h-5 w-5 font-thin ml-auto`} />
                        </NavLink>
                        <NavLink to={'/transactions'} className={({ isActive }) => `${isActive && 'text-[#1EAAE7]'} flex flex-row items-center text-gray-500 gap-10`}>
                            <span className='inline-flex justify-center items-center ml-4'>
                                <GiMoneyStack className='h-8 w-8' />
                            </span>
                            <span className='ml-2 text-lg font-normal tracking-wide truncate'>Transaction</span>
                            <FiChevronRight className={`${expanded ? 'block' : 'hidden'} h-5 w-5 font-thin ml-auto`} />
                        </NavLink>
                    </div>
                    <p className={`mb-14 px-5 py-3 ${expanded ? 'block' : 'hidden'} text-center text-xs`}>Copyright @2022</p>
                </div>
            </aside>
        </>
    )
}

export default Sidebar