import { Route, Routes } from 'react-router-dom'
import Activity from '../../pages/Activity'
import Dashboard from '../../pages/Dashboard'
import Invoice from '../../pages/Invoice'
import Transactions from '../../pages/Transactions'
import Layout from '../General/Layout'

const Authenticated = () => {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='invoice' element={<Invoice />} />
                <Route path='transactions' element={<Transactions />} />
                <Route path='activity' element={<Activity />} />
            </Routes>
        </Layout>
    )
}

export default Authenticated