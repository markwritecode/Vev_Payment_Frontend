import { NavLink } from 'react-router-dom'
import { GiMoneyStack } from 'react-icons/gi'
import { RiDashboardFill } from 'react-icons/ri'
import { FaFileInvoice } from 'react-icons/fa'
import { FiActivity, FiChevronRight, FiUser } from 'react-icons/fi'
import { BiWallet } from 'react-icons/bi'

const navData = [
    { to: '/', icon: <RiDashboardFill className='h-6 w-6' />, name: 'Dashboard' },
    { to: '/invoice', icon: <FaFileInvoice className='h-6 w-6' />, name: 'Invoice' },
    { to: '/transactions', icon: <GiMoneyStack className='h-6 w-6' />, name: 'Transactions' },
    { to: '/activity', icon: <FiActivity className='h-6 w-6' />, name: 'Activity' },
    { to: '/wallet', icon: <BiWallet className='h-6 w-6' />, name: 'Wallet' },
    { to: '/profile', icon: <FiUser className='h-6 w-6' />, name: 'Profile' }
]

const Sidebar = ({ expanded }) => {
    return (
        <>
            {/* View for bigger screen */}
            <aside className={`flex flex-col ${expanded ? 'w-64' : 'w-14'} h-full text-black transition-all duration-300 bg-[#F9F9F9] border-none py-20 hidden lg:flex`}>
                <div className='overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow'>
                    <div className='flex flex-col space-y-10'>
                        {
                            navData.map(item => {
                                return (
                                    <NavLink to={item.to} key={item.name} className={({ isActive }) => `${isActive && 'text-[#1EAAE7]'} flex flex-row items-center text-gray-500 gap-10`}>
                                        <span className='inline-flex justify-center items-center ml-5'>
                                            {item.icon}
                                        </span>
                                        <span className='ml-2 text-lg font-normal tracking-wide truncate'>{item.name}</span>
                                        <FiChevronRight className={`${expanded ? 'block' : 'hidden'} h-5 w-5 font-thin ml-auto`} />
                                    </NavLink>
                                )
                            })
                        }
                    </div>
                    <p className={`mb-14 px-5 py-3 ${expanded ? 'block' : 'hidden'} text-center text-xs`}>Copyright @2022</p>
                </div>
            </aside>

            {/* View for smaller screen */}
            <aside className={`flex flex-col ${expanded ? 'w-full px-5' : 'w-0'} h-full text-black transition-all duration-300 bg-[#F9F9F9] border-none py-20 lg:hidden fixed top-20 left-0 z-20`}>
                <div className='overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow'>
                    <div className='flex flex-col space-y-10'>
                        {
                            navData.map(item => {
                                return (
                                    <NavLink to={item.to} key={item.name} className={({ isActive }) => `${isActive && 'text-[#1EAAE7]'} flex flex-row items-center text-gray-500 gap-2`}>
                                        <span className='inline-flex justify-center items-center ml-5'>
                                            {item.icon}
                                        </span>
                                        <span className='ml-2 text-lg font-normal tracking-wide'>{item.name}</span>
                                        {/* <FiChevronRight className={`${expanded ? 'block' : 'hidden'} h-5 w-5 font-thin ml-auto`} /> */}
                                    </NavLink>
                                )
                            })
                        }
                    </div>
                    <p className={`mb-14 px-5 py-3 ${expanded ? 'block' : 'hidden'} text-center text-xs`}>Copyright @2022</p>
                </div>
            </aside>
        </>
    )
}

export default Sidebar