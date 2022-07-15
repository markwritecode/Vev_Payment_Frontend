import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Loading from '../General/Loading'

const SignIn = lazy(() => import('../../pages/SignIn'))
const SignUp = lazy(() => import('../../pages/SignUp'))

const UnAuthenticated = () => {
    return (
        <div className='flex items-center justify-center h-screen overflow-auto w-full md:bg-[#F3F3F3] relative'>
            <img src='/images/vev_logo.png' className='absolute top-10 left-10 h-8 hidden md:block' alt='vev' />
            <div className='w-full md:w-[40%]'>
                <Suspense fallback={<Loading />}>
                    <Routes>
                        <Route path='/' element={<SignIn />} />
                        <Route path='signup' element={<SignUp />} />
                        <Route path='*' element={'Page not found'} />
                    </Routes>
                </Suspense>
            </div>
        </div>
    )
}

export default UnAuthenticated