import Header from './Header'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
    return (
        <div className='bg-[#F9F9F9]'>
            <div className='h-screen w-full relative flex overflow-hidden'>
                <Sidebar />

                <div className='w-full h-full flex flex-col justify-between'>
                    <Header />
                    <main className='max-w-full h-full flex p-5'>
                        {children}
                    </main>
                </div>

            </div>
        </div>
    )
}

export default Layout