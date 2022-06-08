import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Loading from '../General/Loading'

const SignIn = lazy(() => import('../../pages/SignIn'))
const SignUp = lazy(() => import('../../pages/SignUp'))

const UnAuthenticated = () => {
    return (
        // <div className='flex justify-center'>
        //     <div className='w-full h-screen flex'>
        //         <div className='w-full h-auto hidden lg:flex lg:w-1/2 items-center justify-center'>
        //             <img src='/images/logo2.jpg' alt='vev' />
        //         </div>
        //         <div className='flex items-center w-full lg:w-1/2 h-screen'>
        //             <div className='w-2/3 mx-auto lg:mx-0 space-y-8'>
        //                 <Suspense fallback={<Loading />}>
        //                     <Routes>
        //                         <Route path='/' element={<SignIn />} />
        //                         <Route path='signup' element={<SignUp />} />
        //                         <Route path='*' element={'Page not found'} />
        //                     </Routes>
        //                 </Suspense>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className='flex items-center justify-center h-screen w-full'>
            <div className='space-y-8'>
                <img src='/images/logo2.jpg' alt='vev' className='mx-auto' />
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