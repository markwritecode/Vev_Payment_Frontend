import { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {

    const [expanded, setExpanded] = useState(false)

    const toggleExpansion = () => setExpanded(prev => !prev)

    return (
        <div className='bg-[#F9F9F9] relative'>
            <Header expanded={expanded} toggleExpansion={toggleExpansion} />
            <div className='flex overflow-hidden bg-white pt-16'>
                <Sidebar expanded={expanded} />
                <div className={`bg-gray-900 ${!expanded && 'hidden'} opacity-50 fixed inset-0 z-10`}></div>

                <main className='h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64 pt-6 px-4'>
                    {children}
                </main>
            </div>
        </div>
    )
}

export default Layout