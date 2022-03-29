import { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {

    const [expanded, setExpanded] = useState(false)

    const toggleExpansion = () => setExpanded(prev => !prev)

    return (
        <div className='bg-[#F9F9F9]'>
            <div className='h-screen w-full flex items-center flex-auto'>
                <Sidebar expanded={expanded} />

                <div className={`w-full h-full flex flex-col justify-between`}>
                    <Header expanded={expanded} toggleExpansion={toggleExpansion} />
                    <main className='max-w-full h-full flex py-5 overflow-y-scroll'>
                        {children}
                    </main>
                </div>

            </div>
        </div>
    )
}

export default Layout