import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useAuth } from '../../contexts/auth'
import Layout from '../General/Layout'
import Loading from '../General/Loading'
import SignUpWelcome from '../SignUp/SignUpWelcome'

const Dashboard = lazy(() => import('../../pages/Dashboard'))
const Transactions = lazy(() => import('../../pages/Transactions'))
const Checkout = lazy(() => import('../../pages/Checkout'))
const Profile = lazy(() => import('../../pages/Profile'))

const Authenticated = () => {

    const { signup } = useAuth()

    return (
        <Layout>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path='/' element={signup ? <SignUpWelcome /> : <Dashboard />} />
                    <Route path='transactions' element={<Transactions />} />
                    <Route path='profile' element={<Profile />} />
                    <Route path='checkout/:id' element={<Checkout />} />
                    <Route path='*' element={'Page not found'} />
                </Routes>
            </Suspense>
        </Layout>
    )
}

export default Authenticated