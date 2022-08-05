import { HambergerMenu, NotificationBing } from 'iconsax-react'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {

    const [expanded, setExpanded] = useState(false)
    const location = useLocation()

    const toggleExpansion = () => setExpanded(prev => !prev)

    useEffect(() => {
        setExpanded(false)
    }, [location])

    return (
        <div className='bg-[#E6E6E6]'>
            <Sidebar expanded={expanded} toggleExpansion={toggleExpansion} />
            <div className={`h-screen ml-0 lg:ml-[246px]`}>
                <Header />
                <main className='bg-[#E6E6E6] w-full h-full overflow-auto lg:border-l-8 border-white'>
                    <div className='fixed top-0 left-0 lg:hidden bg-transparent h-10 w-full flex items-center' style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.25)' }}>
                        {!expanded &&
                            <div className={`flex items-center justify-between w-full ${location.pathname === '/' ? 'text-white' : 'text-black opacity-50 '} px-[27px]`}>
                                <HambergerMenu onClick={toggleExpansion} />
                                <NotificationBing />
                            </div>
                        }
                    </div>
                    {children}
                </main>
            </div>
        </div>
    )
}

export default Layout