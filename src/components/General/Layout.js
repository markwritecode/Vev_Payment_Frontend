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
        <div className='bg-[#F9F9F9]'>
            <div className='h-screen w-full flex items-center flex-auto'>
                <Sidebar expanded={expanded} />

                <div className={`w-full h-full flex flex-col justify-between`}>
                    <Header expanded={expanded} toggleExpansion={toggleExpansion} />
                    <main className='w-full h-full flex lg:pl-5 overflow-y-scroll'>
                        {children}
                    </main>
                </div>

            </div>
        </div>
    )
}

export default Layout