import { Button, Drawer, Form, notification } from 'antd'
import { useEffect, useState } from 'react'
import { useInvoice } from '../../contexts/invoice'
import { useCreateInvoice, useUpdateInvoice } from '../../hooks/invoice'
import useHandleScreenWidth from '../../hooks/utilities/useHandleScreenWidth'
import InvoiceForm from './InvoiceForm'
import PreviewInvoice from './PreviewInvoice'

const CreateInvoice = ({ visible, handleCloseDrawer, updateData }) => {

    const [showPreview, setShowPreview] = useState(false)
    const [loading, setLoading] = useState({ draft: false, send_save: false })
    const [invoice, setInvoice] = useInvoice()
    const [invoiceForm] = Form.useForm()


    const resetProcess = () => {
        setInvoice({ items: [] })
        invoiceForm.resetFields()
    }

    useEffect(() => {
        updateData && setInvoice(prev => {
            return {
                ...prev, items: [
                    ...updateData.items.map(item => {
                        return {
                            'item_name': item.item_name,
                            'item_quantity': Number(item.item_qty),
                            'item_price': Number(item.item_amount),
                            'item_total': Number(item.item_qty) * Number(item.item_amount),
                            'id': Math.random()
                        }
                    })]
            }
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [updateData])

    const handleFullClose = () => {
        handleCloseDrawer(resetProcess)
        setLoading({ draft: false, send_save: false })
    }

    const { mutate } = useCreateInvoice(handleFullClose)
    const { mutate: mutateUpdate, isLoading: updateLoading } = useUpdateInvoice(handleFullClose)

    const width = useHandleScreenWidth()

    const handleShowPreview = () => {
        invoiceForm.validateFields().then(values => {
            if (invoice.items.length > 0) {
                setInvoice(prev => {
                    return { ...prev, ...values }
                })
                setShowPreview(true)
            } else {
                notification.warning({ message: 'Items list empty', description: 'Click the "Add item" button to add item(s)' })
            }
        }).catch(err => {
            console.log(err, 'error')
        })
    }

    const handleClosePreview = () => setShowPreview(false)

    const handleFormSubmission = type => {
        invoiceForm.validateFields().then(values => {
            if (invoice.items.length > 0) {
                handleCreateInvoice(type, values)
            } else {
                notification.warning({ message: 'Items list cannot be empty', description: 'Click the "Add item" button to add item(s)' })
            }
        }).catch(err => {
            console.log(err, 'error')
        })
    }

    const handleCreateInvoice = (type, values) => {
        const data = {
            "description": values.description,
            "additional_note": values.additional_note || '',
            "items": JSON.stringify(invoice.items.map(item => {
                return { "item": item.item_name, "qty": item.item_quantity, "amount": item.item_price }
            })),
        }
        const create_payload = {
            ...data,
            "recipient": values.email,
            "command": type
        }
        const update_payload = {
            ...data,
            "reference_number": updateData?.ref_number
        }
        setLoading(prev => {
            return { ...prev, [type]: true }
        })
        updateData ? mutateUpdate(update_payload) : mutate(create_payload)
    }

    return (
        <Drawer
            visible={visible}
            size='large'
            width={width <= 500 ? '100%' : width <= 700 ? '70%' : width <= 900 ? '60%' : width <= 1100 ? '45%' : width <= 1200 ? '40%' : width <= 1400 ? '35%' : '25%'}
            onClose={handleFullClose}
            closable={false}
            footer={
                <div className='md:flex items-center justify-between space-y-2'>
                    <p onClick={handleShowPreview} className='text-[#1EAAE7] cursor-pointer'>PREVIEW</p>
                    <div className='space-x-3'>
                        {!updateData &&
                            <Button
                                loading={loading.draft}
                                onClick={() => handleFormSubmission('draft')}
                                className='border-gray-400 border-[1px] text-gray-500 px-3 py-1 space-x-2 rounded-sm'>
                                <span>SAVE AS DRAFT</span>
                            </Button>}
                        <Button
                            onClick={() => handleFormSubmission('send_save')}
                            loading={updateData ? updateLoading : loading.send_save} type='primary' className='text-white px-3 py-1 space-x-2 rounded-sm'>
                            <span>{updateData ? 'UPDATE' : 'SEND'}</span>
                        </Button>
                    </div>
                </div>
            }
            footerStyle={{ padding: '30px' }}
        >
            <InvoiceForm updateData={updateData} invoiceForm={invoiceForm} handleCloseDrawer={handleCloseDrawer} />

            {showPreview && <PreviewInvoice showPreview={showPreview} handleClosePreview={handleClosePreview} />}
        </Drawer>

    )
}

export default CreateInvoice