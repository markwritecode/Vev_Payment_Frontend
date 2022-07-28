import { NavLink } from 'react-router-dom'
import { CloseCircle, Home, LogoutCurve, Setting2 } from 'iconsax-react'
import { useAuth } from '../../contexts/auth'

const navData = [
    { to: '/', icon: <Home variant='Bold' className='h-6 w-6' />, name: 'Dashboard' },
    { to: '/transactions', icon: <Setting2 variant='Bold' className='h-6 w-6' />, name: 'My Transaction' },
    { to: '/profile', icon: <Setting2 variant='Bold' className='h-6 w-6' />, name: 'User Setting' },
]

const Sidebar = ({ expanded, toggleExpansion }) => {

    const { signout } = useAuth()

    return (
        <aside className={`fixed ${expanded ? 'w-full' : 'w-0 lg:w-[246px]'} h-screen text-black transition-all duration-300 bg-[#E6E6E6] py-5`}>
            <div className='overflow-y-auto flex flex-col justify-between flex-grow'>
                <div>
                    <div className='flex items-center justify-between'>
                        <img src='/images/vev_logo.png' className='w-20 xl:w-32 ml-5' alt='vev logo' />
                        <CloseCircle onClick={toggleExpansion} className='lg:hidden mr-3 text-red-500' variant='Bulk' />
                    </div>
                    <div className='flex flex-col pt-20'>
                        {
                            navData.map(item => {
                                return (
                                    <NavLink to={item.to} key={item.name} className={({ isActive }) => `${isActive ? 'bg-[#6968DC] bg-opacity-20' : 'opacity-50'} flex items-center gap-5 py-5 hover:text-current`}>
                                        <span className='inline-flex justify-center bg-[#895CDF] p-2 rounded-lg text-white items-center ml-5'>
                                            {item.icon}
                                        </span>
                                        <span className='text-base font-normal tracking-wide truncate'>{item.name}</span>
                                    </NavLink>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='flex items-center gap-5 py-5 hover:text-current cursor-pointer' onClick={signout}>
                    <span className='inline-flex justify-center bg-[#FC8906] bg-opacity-50 p-2 rounded-lg text-white items-center ml-5'>
                        <LogoutCurve />
                    </span>
                    <span className='text-base font-normal tracking-wide truncate'>Logout</span>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar