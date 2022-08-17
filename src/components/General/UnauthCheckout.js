import { Modal } from 'antd'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const UnauthCheckout = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const arr = location.pathname.split('/')
    const ref_id = arr[arr.length - 1]

    useEffect(() => {
        ref_id === 'transactions' ?
            navigate('/') :
            Modal.confirm({
                title: `Note`,
                content: 'You must be logged in to continue with checkout',
                centered: true,
                cancelText: 'Cancel',
                okText: 'Login',
                afterClose: () => navigate('/'),
                onOk: () => {
                    localStorage.setItem('ichor-checkout-ref', ref_id)
                    navigate('/')
                }
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref_id])

    return null
}

export default UnauthCheckout