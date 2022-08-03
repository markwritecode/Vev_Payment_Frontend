import { HambergerMenu } from 'iconsax-react'
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
                    <div className='fixed top-0 left-0 lg:hidden bg-white h-10 w-full flex items-center'>
                        {!expanded && <HambergerMenu onClick={toggleExpansion} className='text-black opacity-50 ml-[27px]' />}
                    </div>
                    {children}
                </main>
            </div>
        </div>
    )
}

export default Layout