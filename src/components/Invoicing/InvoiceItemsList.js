import React, { useState } from 'react'
import { useInvoice } from '../../contexts/invoice'
import { currencyFormatter } from '../../utils/helperFunctions'
import AddInvoiceItem from './AddInvoiceItem'

const InvoiceItemsList = ({ preview }) => {

    const [visible, setVisible] = useState(false)
    const [invoice] = useInvoice()

    const handleOpenModal = e => {
        e.preventDefault()
        setVisible(true)
    }
    const handleCloseModal = () => setVisible(false)

    return (
        <section className='antialiased text-gray-600 space-y-2'>
            {!preview && <button onClick={handleOpenModal} className='text-white text-xs bg-[#1EAAE7] rounded-sm px-3 py-1'>ADD ITEM</button>}
            <div className='flex flex-col justify-center h-full'>
                
                <div className={`w-full max-w-2xl mx-auto bg-blue-100 rounded-sm`}>
                    <div className='p-3'>
                        <div className='overflow-x-auto'>
                            <table className='table-auto w-full'>
                                <thead className='text-xs font-semibold uppercase text-gray-400'>
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
                                        invoice.items.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td className='p-2 whitespace-nowrap'>
                                                        <div className='flex items-center'>
                                                            <div className='font-medium text-gray-800'>{item.item_name.substring(0, 10)}...</div>
                                                        </div>
                                                    </td>
                                                    <td className='p-2 whitespace-nowrap'>
                                                        <div className='text-left'>{item.item_quantity}</div>
                                                    </td>
                                                    <td className='p-2 whitespace-nowrap'>
                                                        <div className='text-left font-medium text-green-500'>${currencyFormatter(item.item_price)}</div>
                                                    </td>
                                                    <td className='p-2 whitespace-nowrap'>
                                                        <div className='text-center'>{currencyFormatter(item.item_total)}</div>
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

            <AddInvoiceItem visible={visible} handleCloseModal={handleCloseModal} />
        </section>
    )
}

export default InvoiceItemsList