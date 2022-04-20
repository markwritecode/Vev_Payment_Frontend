import { Modal } from 'antd'
import { currencyFormatter } from '../../utils/helperFunctions'

const PreviewActivity = ({ visible, handleCloseModal, activity, items, type }) => {

    const totalAmount = items.reduce((curr, value) => {
        return curr + Number(value.subtotal)
    }, 0)

    return (
        <Modal
            visible={visible}
            closable={false}
            onCancel={handleCloseModal}
            footer={null}
        >
            <div className='space-y-6'>
                <div>
                    <h4 className='text-gray-400'>Invoice for</h4>
                    <h5>{activity.owner}</h5>
                    <p className='text-gray-400'>{activity.description}</p>
                </div>
                <section className='antialiased text-gray-600 space-y-2'>

                    <div className='flex flex-col justify-center h-full'>

                        <div className={`w-full max-w-2xl mx-auto rounded-sm bg-gray-100`}>
                            <div className='p-3'>
                                <div className='overflow-x-auto'>
                                    <table className='table-auto w-full'>
                                        <thead className='text-xs font-semibold text-gray-400'>
                                            <tr>
                                                <th className='p-2 whitespace-nowrap'>
                                                    <div className='font-semibold text-left'>Item</div>
                                                </th>
                                                <th className='p-2 whitespace-nowrap'>
                                                    <div className='font-semibold text-left'>Quantity</div>
                                                </th>
                                                <th className='p-2 whitespace-nowrap'>
                                                    <div className='font-semibold text-left'>Price</div>
                                                </th>
                                                <th className='p-2 whitespace-nowrap'>
                                                    <div className='font-semibold text-center'>Total</div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className='text-sm divide-y divide-gray-100'>
                                            {
                                                items.map((item, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td className='p-2 whitespace-nowrap'>
                                                                <div className='flex items-center'>
                                                                    <div className='font-medium text-gray-800 capitalize'>{item.item_name.substring(0, 10)}...</div>
                                                                </div>
                                                            </td>
                                                            <td className='p-2 whitespace-nowrap'>
                                                                <div className='text-left'>{item.item_qty}</div>
                                                            </td>
                                                            <td className='p-2 whitespace-nowrap'>
                                                                <div className='text-left font-medium text-green-500'>₦{currencyFormatter(item.item_amount)}</div>
                                                            </td>
                                                            <td className='p-2 whitespace-nowrap'>
                                                                <div className='text-center'>{currencyFormatter(item.subtotal)}</div>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
                <div className='flex items-center justify-between'>
                    <div>
                        {activity.additional_notes && <p className='text-gray-400'>{activity.additional_notes}</p>}
                    </div>
                    <div>
                        <p className='text-gray-400'>Total: <span className='text-black'>₦{currencyFormatter(totalAmount)}</span></p>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default PreviewActivity