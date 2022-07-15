import { NavLink } from 'react-router-dom'
import { Home, LogoutCurve, Setting2 } from 'iconsax-react'

const navData = [
    { to: '/', icon: <Home variant='Bold' className='h-6 w-6' />, name: 'Dashboard' },
    { to: '/profile', icon: <Setting2 variant='Bold' className='h-6 w-6' />, name: 'User Setting' },
]

const Sidebar = ({ expanded }) => {
    return (
        <>
            {/* View for bigger screen */}
            <aside className={`flex flex-col ${!expanded ? 'w-64' : 'w-14'} h-screen text-black transition-all duration-300 bg-[#E6E6E6] border-none py-20 hidden lg:flex`}>
                <div className='overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow'>
                    <div className='flex flex-col'>
                        {
                            navData.map(item => {
                                return (
                                    <NavLink to={item.to} key={item.name} className={({ isActive }) => `${isActive ? 'bg-[#6968DC] bg-opacity-20' : 'opacity-50'} flex flex-row items-center gap-5 py-5 hover:text-current`}>
                                        <span className='inline-flex justify-center bg-[#895CDF] p-2 rounded-lg text-white items-center ml-5'>
                                            {item.icon}
                                        </span>
                                        <span className='text-base font-normal tracking-wide truncate'>{item.name}</span>
                                        {/* <FiChevronRight className={`${expanded ? 'block' : 'hidden'} h-5 w-5 font-thin ml-auto`} /> */}
                                    </NavLink>
                                )
                            })
                        }
                    </div>
                    <div className='flex flex-row items-center gap-5 py-5 hover:text-current'>
                        <span className='inline-flex justify-center bg-[#FC8906] bg-opacity-50 p-2 rounded-lg text-white items-center ml-5'>
                            <LogoutCurve />
                        </span>
                        <span className='text-base font-normal tracking-wide truncate'>Logout</span>
                    </div>
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