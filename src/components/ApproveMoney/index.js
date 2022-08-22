import { Dropdown, Menu, Modal } from 'antd'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { usePoster } from '../../hooks/poster'
import { useFetchLocalStorageData } from '../../hooks/utilities/useFetchLocalStorage'
import { currencyFormatter, formatDateAndTime2 } from '../../utils/helperFunctions'

const ApproveMoney = ({ data, loading }) => {

    const { user } = useFetchLocalStorageData()
    const { mutate, isLoading } = usePoster('authorize/payment', 'Payment Approved', ['payments'])

    function menu(item) {
        return (
            <Menu
                items={[
                    ...item.owner === user.email ? [{ label: <span onClick={() => confirmationModal(item)}>Approve</span>, key: 'approve' }] : [],
                    // { label: 'Reject', key: 'reject' }
                ]}
            />
        )
    }

    const imgs = [
        'https://images.unsplash.com/photo-1552788960-65fcafe071a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1285&q=80',
        'https://images.unsplash.com/photo-1496086363406-27fbdabb8593?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2706&q=80',
        'https://images.unsplash.com/photo-1616640045164-deb3b104c4b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
        'https://images.unsplash.com/photo-1615921511258-0aa98c84d400?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
        'https://images.unsplash.com/photo-1615719413546-198b25453f85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1336&q=80'
    ]

    function confirmationModal(data) {
        Modal.confirm({
            title: `Confirmation required`,
            content: `Approve payment of ${currencyFormatter(data.amount)} Naira for ${data.recipient}`,
            centered: true,
            confirmLoading: isLoading,
            cancelText: 'Cancel',
            onOk: () => mutate({ payment_reference: data.transaction_reference })
        })
    }

    return (
        <div className='overflow-x-auto'>
            <table className='w-full whitespace-nowrap'>
                <thead>
                    <tr className='h-[52px] text-black opacity-50 text-base'>
                        <td>Business</td>
                        <td className='pl-24'>Date</td>
                        <td className='pl-5'>Payment Type</td>
                        <td className='pl-5'>Status</td>
                        <td className='pl-5'>Payment Amount</td>
                        <td className='pl-4'></td>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map((item, index) => {
                            return (
                                <tr tabIndex={index} key={index} className='focus:outline-none h-[83px] border-y border-black border-opacity-20 text-base font-semibold text-black text-opacity-60'>
                                    <td className=''>
                                        <div className='flex items-center gap-3'>
                                            <img alt='vev' className='h-12 w-12 rounded' src={imgs[index]} />
                                            <div>
                                                <p>{item.owner === user.email ? item.recipient : item.owner}</p>
                                                <p className='text-sm font-normal'>{item.transaction_reference}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='pl-24'>{formatDateAndTime2(item.created_at)}</td>
                                    <td className='pl-5 capitalize'>{item.payment_method}</td>
                                    <td className='pl-5'>
                                        <button className={`border rounded-[10px] p-[5px] text-xs font-medium capitalize ${item.status === 'pending' ? 'text-[#FC8906] border-[#FC8906]' : item.status === 'paid' ? 'text-[#0A9807] border-[#0A9807]' : 'text-[#FF0D0D] border-[#FF0D0D]'}`}>{item.status}</button>
                                    </td>
                                    <td className='pl-5'>{currencyFormatter(item.amount)}</td>
                                    <td className='pl-4'>
                                        <Dropdown placement='topRight' overlay={() => menu(item)} trigger={['click']}>
                                            <BsThreeDotsVertical className='w-5 h-5 cursor-pointer' />
                                        </Dropdown>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            {loading && 'Loading...'}
        </div>
    )
}

export default ApproveMoney