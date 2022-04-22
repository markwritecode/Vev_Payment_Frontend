import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../General/Layout'

const Dashboard = lazy(() => import('../../pages/Dashboard'))
const Invoice = lazy(() => import('../../pages/Invoice'))
const Transactions = lazy(() => import('../../pages/Transactions'))
const Activity = lazy(() => import('../../pages/Activity'))

const Authenticated = () => {
    return (
        <Layout>
            <Suspense fallback='Loading...'>
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='invoice' element={<Invoice />} />
                    <Route path='transactions' element={<Transactions />} />
                    <Route path='activity' element={<Activity />} />
                </Routes>
            </Suspense>
        </Layout>
    )
}

export default Authenticated