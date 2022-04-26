import { Avatar, Drawer } from 'antd'
import { useEffect, useState } from 'react'
import { FaFirstAid } from 'react-icons/fa'
import { MdOutlinePendingActions } from 'react-icons/md'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import useHandleScreenWidth from '../../hooks/utilities/useHandleScreenWidth'
import { currencyFormatter, formatDateAndTime2 } from '../../utils/helperFunctions'
import PreviewActivity from './PreviewActivity'
import { useActivityContext } from '../../pages/Activity'
import { useNavigate } from 'react-router-dom'
import { useFetcher } from '../../hooks/fetcher'

const ActivityDetails = ({ visible, closeActivityDetails, activity }) => {

    const width = useHandleScreenWidth()

    const { data: pullActivityDetails, isLoading: pullActivityDetailsLoading, refetch, isRefetching } = useFetcher(`activity/details/${activity.reference_number}`)

    useEffect(() => {
        visible && refetch()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activity.reference_number])

    return (
        <Drawer
            className='ActivityDetails'
            visible={visible}
            key={activity.id}
            onClose={closeActivityDetails}
            bodyStyle={{ padding: '10px' }}
            // closable={false}
            width={width <= 500 ? '100%' : width <= 700 ? '70%' : width <= 900 ? '60%' : width <= 1100 ? '45%' : width <= 1200 ? '40%' : width <= 1400 ? '35%' : '25%'}
            footer={
                <div className='flex items-center gap-6 p-5 border-t-2 border-dashed'>
                    <div className='rounded-full p-3 bg-gradient-to-r from-[#1eabe7e3] to-cyan-300 text-white'>
                        <FaFirstAid className='w-10 h-10' />
                    </div>
                    <div className=''>
                        <h3 className='font-medium text-lg text-gray-500'>Having troubles?</h3>
                        <h5 className='text-gray-400 font-medium'>Contact support</h5>
                    </div>
                </div>
            }
        >
            {activity.type === 'invoicing' ?
                <InvoiceComponent
                    loading={(pullActivityDetailsLoading || isRefetching)}
                    activity={pullActivityDetails?.activity_details}
                    user={pullActivityDetails?.user}
                    items={pullActivityDetails?.items}
                /> :
                <TransactionComponent
                    loading={(pullActivityDetailsLoading || isRefetching)}
                    activity={pullActivityDetails?.activity_details}
                    user={pullActivityDetails?.user}
                />}
        </Drawer>
    )
}

export default ActivityDetails

const InvoiceComponent = ({ activity, loading, user, items }) => {

    const [visible, setVisible] = useState(false)
    const [, setActivityData] = useActivityContext()
    const navigate = useNavigate()

    const openPaymentPage = () => {
        setActivityData({ activity, user, items })
        navigate('/activity/checkout')
    }

    if (loading) return <p>Loading...</p>

    const formattedPrice = () => Number(activity?.total).toFixed(2).split('.')
    const isOwner = () => user?.email === activity?.owner

    const handleOpenModal = () => setVisible(true)
    const handleCloseModal = () => setVisible(false)

    return (
        <section className='space-y-8'>
            <div className='text-center space-y-4 mt-8'>
                {activity?.status !== 'pending' && <IoMdCheckmarkCircleOutline className='h-10 w-10 text-green-300 mx-auto' />}
                {activity?.status === 'pending' && <MdOutlinePendingActions className='h-10 w-10 text-yellow-300 mx-auto' />}
                <h3 className='font-medium text-base opacity-60'>Total Invoice</h3>
                <h5 className='text-4xl font-medium'>
                    <span className='opacity-60'>$</span>{currencyFormatter(formattedPrice()[0])}<span className='opacity-60'>.{formattedPrice()[1]} USD</span>
                </h5>
            </div>

            <div className='bg-[#F9F9F9] p-3 sm:p-5 space-y-4 rounded-lg'>
                <div className='flex items-center justify-between col-span-7'>
                    <div className='flex items-center gap-3 sm:gap-6'>
                        <Avatar shape='square' src={`https://i.pravatar.cc/600?img=${user?.id}`} size={60} />
                        <div className=''>
                            <h3 className='font-medium text-gray-500 capitalize'>{user?.name}</h3>
                            <h5 className='text-gray-400 font-medium text-xs sm:text-base'>{user?.email}</h5>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                    <button onClick={handleOpenModal} className='w-full text-[#1EAAE7] bg-white font-semibold py-3 rounded-lg'>Preview</button>
                    {activity?.status === 'pending' && isOwner() && <button
                        onClick={openPaymentPage}
                        className='w-full text-white bg-gradient-to-r from-[#1eabe7e3] to-cyan-300 font-semibold py-3 rounded-lg'>Pay</button>}
                </div>
            </div>

            <div className='space-y-8'>
                <div>
                    <h3 className='text-xs font-semibold'>INVOICE NUMBER</h3>
                    <h4 className='text-gray-400 capitalize'>{activity?.ref_number}</h4>
                </div>
                <div>
                    <h3 className='text-xs font-semibold'>DESCRIPTION</h3>
                    <h4 className='text-gray-400 capitalize'>{activity?.description}</h4>
                </div>
                <div>
                    <h3 className='text-xs font-semibold'>DATE CREATED</h3>
                    <h4 className='text-gray-400 capitalize'>{formatDateAndTime2(activity?.created_at)}</h4>
                </div>
                <div>
                    <h3 className='text-xs font-semibold'>ADDITIONAL NOTE</h3>
                    <h4 className='text-gray-400 capitalize'>{activity?.additional_note}</h4>
                </div>
            </div>
            {visible && <PreviewActivity visible={visible} handleCloseModal={handleCloseModal} activity={activity} items={items} type='Invoice' isOwner={isOwner} />}
        </section>
    )
}

export const TransactionComponent = ({ activity, loading, user }) => {

    if (loading) return <p>Loading...</p>

    const formattedPrice = () => Number(activity?.amount).toFixed(2).split('.')

    return (
        <section className='space-y-8'>
            <div className='text-center space-y-4 mt-8'>
                {activity?.status !== 'pending' && <IoMdCheckmarkCircleOutline className='h-10 w-10 text-green-300 mx-auto' />}
                {activity?.status === 'pending' && <MdOutlinePendingActions className='h-10 w-10 text-yellow-300 mx-auto' />}
                <h3 className='font-medium text-base opacity-60'>Transaction Total</h3>
                <h5 className='text-4xl font-medium'>
                    <span className='opacity-60'>$</span>{currencyFormatter(formattedPrice()[0])}<span className='opacity-60'>.{formattedPrice()[1]} USD</span>
                </h5>
            </div>

            <div className='bg-[#F9F9F9] p-3 sm:p-5 space-y-4 rounded-lg'>
                <div className='flex items-center justify-between col-span-7'>
                    <div className='flex items-center gap-3 sm:gap-6'>
                        <Avatar shape='square' src={`https://i.pravatar.cc/600?img=${user?.id}`} size={60} />
                        <div className=''>
                            <h3 className='font-medium text-gray-500 capitalize'>{user?.name}</h3>
                            <h5 className='text-gray-400 font-medium text-xs sm:text-base'>{user?.email}</h5>
                        </div>
                    </div>
                </div>
            </div>


            <div className='space-y-8'>
                <div>
                    <h3 className='text-xs font-semibold'>DOCUMENT REFERENCE</h3>
                    <h4 className='text-gray-400 capitalize'>{activity?.document_reference}</h4>
                </div>
                <div>
                    <h3 className='text-xs font-semibold'>DATE CREATED</h3>
                    <h4 className='text-gray-400 capitalize'>{formatDateAndTime2(activity?.created_at)}</h4>
                </div>
                <div>
                    <h3 className='text-xs font-semibold'>PURPOSE</h3>
                    <h4 className='font-semibold text-gray-400 capitalize'>{activity?.purpose.split('_').join(' ')}</h4>
                </div>
                <div>
                    <h3 className='text-xs font-semibold'>PAYMENT METHOD</h3>
                    <h4 className='font-semibold text-gray-400 capitalize'>{activity?.payment_method.split('_').join(' ')}</h4>
                </div>
            </div>
        </section>
    )
}