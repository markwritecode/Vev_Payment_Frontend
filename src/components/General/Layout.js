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
            <Sidebar expanded={expanded} />
            <div className='h-screen ml-52 xl:ml-64'>
                <Header expanded={expanded} toggleExpansion={toggleExpansion} />
                <div className='h-full bg-white pl-3 pt-3'>
                    <main className='bg-[#E6E6E6] w-full h-full overflow-auto p-10'>
                        {children}
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Layout