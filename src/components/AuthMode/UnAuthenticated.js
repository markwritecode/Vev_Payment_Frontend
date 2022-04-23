import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

const SignIn = lazy(() => import('../../pages/SignIn'))
const SignUp = lazy(() => import('../../pages/SignUp'))

const UnAuthenticated = () => {
    return (
        <Suspense fallback='Loading...'>
            <Routes>
                <Route path='/' element={<SignIn />} />
                <Route path='signup' element={<SignUp />} />
                <Route path='*' element={'Page not found'} />
            </Routes>
        </Suspense>
    )
}

export default UnAuthenticated