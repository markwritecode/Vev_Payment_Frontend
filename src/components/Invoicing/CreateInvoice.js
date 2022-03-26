import { Button, Drawer, Form, notification } from 'antd'
import { useEffect, useState } from 'react'
import { useInvoice } from '../../contexts/invoice'
import { useCreateInvoice, useUpdateInvoice } from '../../hooks/invoice/useInvoice'
import useHandleScreenWidth from '../../hooks/useHandleScreenWidth'
import CompleteInvoice from './CompleteInvoice'
import InvoiceForm from './InvoiceForm'
import PreviewInvoice from './PreviewInvoice'

const CreateInvoice = ({ visible, handleCloseDrawer, updateData }) => {

    const [showPreview, setShowPreview] = useState(false)
    const [step, setStep] = useState(1)
    const [loading, setLoading] = useState({ draft: false, save: false })
    const [invoice, setInvoice] = useInvoice()
    const [invoiceForm] = Form.useForm()


    const resetProcess = () => {
        setInvoice({ items: [] })
        invoiceForm.resetFields()
        setStep(1)
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
                            'item_total': Number(item.item_qty) * Number(item.item_amount)
                        }
                    })]
            }
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [updateData])

    const handleFullClose = () => {
        handleCloseDrawer(resetProcess)
        setLoading({ draft: false, save: false })
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

    const incrementStep = () => setStep(previousStep => previousStep + 1)
    const decrementStep = () => setStep(previousStep => previousStep - 1)

    const handleFormSubmission = () => {
        invoiceForm.validateFields().then(values => {
            if (invoice.items.length > 0) {
                setInvoice(prev => {
                    return { ...prev, ...values }
                })
                incrementStep()
            } else {
                notification.warning({ message: 'Items list cannot be empty', description: 'Click the "Add item" button to add item(s)' })
            }
        }).catch(err => {
            console.log(err, 'error')
        })
    }

    const handleCreateInvoice = type => {
        const data = {
            "description": invoice.description,
            "additional_note": invoice.additional_note || '',
            "items": JSON.stringify(invoice.items.map(item => {
                return { "item": item.item_name, "qty": item.item_quantity, "amount": item.item_price }
            })),
        }
        const payload = {
            "recipient": invoice.email,
            "command": type,
            ...data
        }
        setLoading(prev => {
            return { ...prev, [type]: true }
        })
        updateData ? mutateUpdate({ ...data, "reference_number": updateData.ref_number }) : mutate(payload)
    }

    const getCurrentPage = () => {
        switch (step) {
            case 1:
                return <InvoiceForm updateData={updateData} invoiceForm={invoiceForm} handleCloseDrawer={handleCloseDrawer} />
            case 2:
                return <CompleteInvoice incrementStep={incrementStep} decrementStep={decrementStep} handleCloseDrawer={handleCloseDrawer} />
            default:
                return <InvoiceForm />
        }
    }

    return (
        <Drawer
            visible={visible}
            size='large'
            width={width <= 500 ? '100%' : width <= 700 ? '80%' : width <= 1000 ? '70%' : width <= 1200 ? '50%' : width <= 1400 ? '40%' : '30%'}
            onClose={handleFullClose}
            closable={false}
            footer={
                <div className='flex items-center justify-between'>
                    <p onClick={handleShowPreview} className='text-[#1EAAE7] cursor-pointer'>PREVIEW</p>
                    <div className='space-x-3'>
                        {step > 1 && !updateData && <Button loading={loading.draft} onClick={() => handleCreateInvoice('draft')} className='border-gray-400 border-[1px] text-gray-500 px-3 py-1 rounded-sm'>SAVE AS DRAFT</Button>}
                        <Button
                            onClick={step === 1 ? handleFormSubmission : () => handleCreateInvoice('send_save')}
                            loading={step > 1 && (updateData ? updateLoading : loading.save)} type='primary' className='bg-[#1EAAE7] text-white px-3 py-1 rounded-sm'>
                            {step === 1 ? 'NEXT' : 'SEND'}
                        </Button>
                    </div>
                </div>
            }
            footerStyle={{ padding: '30px' }}
        >
            <section>
                {getCurrentPage()}
            </section>

            <PreviewInvoice showPreview={showPreview} handleClosePreview={handleClosePreview} />
        </Drawer>

    )
}

export default CreateInvoice