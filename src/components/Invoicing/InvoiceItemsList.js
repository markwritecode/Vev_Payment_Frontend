import { IoTrashOutline } from 'react-icons/io5'
import React, { useState } from 'react'
import { useInvoice } from '../../contexts/invoice'
import { currencyFormatter } from '../../utils/helperFunctions'
import AddInvoiceItem from './AddInvoiceItem'
import { FiEdit3 } from 'react-icons/fi'

const InvoiceItemsList = ({ preview }) => {

    const [visible, setVisible] = useState(false)
    const [invoice, setInvoice] = useInvoice()
    const [modalData, setModalData] = useState({})

    const handleOpenModal = (e, data) => {
        e.preventDefault()
        setVisible(true)
        setModalData(data)
    }
    const handleCloseModal = () => {
        setVisible(false)
    }

    const deleteItem = id => {
        setInvoice(prev => {
            return { ...prev, items: prev.items.filter(item => item.id !== id) }
        })
    }

    const totalAmount = invoice.items.reduce((curr, value) => {
        return curr + value.item_total
    }, 0)

    return (
        <section className='antialiased text-gray-600 space-y-2'>

            <div className='flex flex-col justify-center h-full'>

                <div className={`w-full max-w-2xl mx-auto rounded-sm ${preview ? 'border-gray-100 border-[1px]' : 'bg-gray-100'}`}>
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
                                        {!preview &&
                                            <th className='p-2 whitespace-nowrap'>
                                                {/* <div className='font-semibold text-center'>Edit</div> */}
                                            </th>}
                                        {!preview &&
                                            <th className='p-2 whitespace-nowrap'>
                                                {/* <div className='font-semibold text-center'>Delete</div> */}
                                            </th>}
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
                                                        <div className='text-left font-medium text-green-500'>₦{currencyFormatter(item.item_price)}</div>
                                                    </td>
                                                    <td className='p-2 whitespace-nowrap'>
                                                        <div className='text-center'>{currencyFormatter(item.item_total)}</div>
                                                    </td>
                                                    {!preview &&
                                                        <td className='p-2 whitespace-nowrap'>
                                                            <div className='text-center'>
                                                                <FiEdit3 onClick={e => handleOpenModal(e, item)} className='w-5 h-5 mx-auto text-gray-400 cursor-pointer' />
                                                            </div>
                                                        </td>}
                                                    {!preview &&
                                                        <td className='p-2 whitespace-nowrap'>
                                                            <div className='text-center'>
                                                                <IoTrashOutline onClick={() => deleteItem(item.id)} className='w-5 h-5 mx-auto text-red-400 cursor-pointer' />
                                                            </div>
                                                        </td>}
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

            {!preview && <div className='flex items-center justify-between pt-10'>
                <span onClick={e => handleOpenModal(e, {})} className='text-white text-xs bg-[#1EAAE7] rounded-sm px-3 py-2 cursor-pointer'>ADD ITEM</span>
                <p className='text-gray-400'>Total: <span className='text-black ml-5 text-xl font-medium'>₦{currencyFormatter(totalAmount)}</span></p>
            </div>}

            {visible && <AddInvoiceItem visible={visible} handleCloseModal={handleCloseModal} modalData={modalData} />}
        </section>
    )
}

export default InvoiceItemsList