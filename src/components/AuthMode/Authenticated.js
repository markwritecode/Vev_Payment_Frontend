import { lazy, Suspense } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { useAuth } from '../../contexts/auth'
import Layout from '../General/Layout'
import Loading from '../General/Loading'

const Dashboard = lazy(() => import('../../pages/Dashboard'))
const Invoice = lazy(() => import('../../pages/Invoice'))
const Transactions = lazy(() => import('../../pages/Transactions'))
const Activity = lazy(() => import('../../pages/Activity'))
const Wallet = lazy(() => import('../../pages/Wallet'))
const Profile = lazy(() => import('../../pages/Profile'))

const Authenticated = () => {

    const { signup } = useAuth()
    const location = useLocation()
    const showLayout = location.pathname !== '/activity/checkout'

    return (
        <Layout showLayout={showLayout} >
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path='/' element={signup ? 'Welcome' : <Dashboard />} />
                    <Route path='invoice' element={<Invoice />} />
                    <Route path='transactions' element={<Transactions />} />
                    <Route path='activity/*' element={<Activity />} />
                    <Route path='wallet' element={<Wallet />} />
                    <Route path='profile' element={<Profile />} />
                    <Route path='*' element={'Page not found'} />
                </Routes>
            </Suspense>
        </Layout>
    )
}

export default Authenticated