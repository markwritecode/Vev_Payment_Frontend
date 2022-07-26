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
            <div className={`h-screen ml-0 lg:ml-52 xl:ml-[246px]`}>
                <Header />
                <main className='bg-[#E6E6E6] w-full h-full overflow-auto lg:px-[50px] lg:py-[80px] lg:border-l-8 lg:border-t-8 border-white'>
                    <div className='fixed top-2 left-5 block lg:hidden'>
                        {!expanded && <HambergerMenu onClick={toggleExpansion} className='text-white' />}
                    </div>
                    {children}
                </main>
            </div>
        </div>
    )
}

export default Layout