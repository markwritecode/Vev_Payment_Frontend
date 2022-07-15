import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = ({ children, showLayout }) => {

    const [expanded, setExpanded] = useState(false)
    const location = useLocation()

    const toggleExpansion = () => setExpanded(prev => !prev)

    useEffect(() => {
        setExpanded(false)
    }, [location])

    return (
        <div className='bg-[#E6E6E6]'>
            {showLayout && <Header expanded={expanded} toggleExpansion={toggleExpansion} />}
            <div className='h-screen w-full flex items-center flex-auto'>
                {showLayout && <Sidebar expanded={expanded} />}

                <div className={`w-full h-full flex flex-col justify-between`}>
                    <main className='w-full h-full flex overflow-y-scroll'>
                        {children}
                    </main>
                </div>

            </div>
        </div>
    )
}

export default Layout